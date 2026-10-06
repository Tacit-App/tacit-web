---
slug: /api
title: Push API
sidebar_position: 3
---

# Push API

Use this when a system you run already has the record: an application, an export, a partner. The [S3 agent](/s3) is a client of this same API.

This interface is not in production. The machine-readable contract is [openapi.yaml](pathname:///openapi.yaml).

## Credential

Tacit issues an organization ingest key.

- The secret is shown once.
- Tacit stores a hash of the secret, plus a short prefix so you can recognize the key in a list.
- You can rotate it and revoke it.
- Revocation takes effect on the next call.
- This key is only for ingress. It is not a login to the product.

Send it as `Authorization: Bearer <secret>`.

## Send a small text record

`POST /api/v1/observations`

```json
{
  "source": "acme_erp",
  "type": "ticket",
  "id": "T-1042",
  "seen_at": "2026-09-29T18:00:00Z",
  "member_id": "optional-person-id",
  "content_type": "text/plain",
  "body": "The customer asked for net-60 on the renewal."
}
```

`source`, `type`, and `id` are required. Send either `body` or `artifact_id`, not both.

Inline `body` accepts `text/*` and `application/json`, up to 1 MB. Any other media type, and any larger payload, uses the upload in the next section.

`source` is a name you register with Tacit for that system (`acme_erp`, `billing`, `data_warehouse`). An unknown source is rejected, so a mistyped name cannot open a new stream by accident.

For email, `id` is the shared Message-ID of the thread, the same value every mailbox already has. Tacit does not change the casing of ids you send. Some systems treat ids as case-sensitive.

## Send a large or binary record

`POST /api/v1/artifacts`

```json
{
  "content_type": "application/pdf",
  "byte_size": 4821130,
  "sha256": "hex digest of the bytes"
}
```

Tacit responds with an `artifact_id` and a single-use upload URL that expires in minutes. You `PUT` the bytes to that URL. Tacit checks the size and the checksum before it will accept an observation that names this `artifact_id`.

Then:

```json
{
  "source": "acme_erp",
  "type": "contract",
  "id": "C-8831",
  "seen_at": "2026-09-29T18:00:00Z",
  "content_type": "application/pdf",
  "artifact_id": "art_01H..."
}
```

## Acceptance

A successful call returns `202 Accepted`:

```json
{
  "observation_id": "64-character hex",
  "status": "accepted",
  "status_url": "/api/v1/observations/64-character-hex"
}
```

`observation_id` is determined by your organization, source, type, and id. You can store it before processing finishes. Sending the same id again returns the same `observation_id`.

Optional header `Idempotency-Key`. Tacit remembers it for 24 hours, scoped to your key. The same key and the same request return the original `202`. The same key and a different request return `409`.

## Send many records

`POST /api/v1/observations:batch`

Up to 100 items. Each item uses `artifact_id` (upload the bytes first). Tacit accepts or rejects each item on its own. One invalid item does not reject the rest. The response lists a status for every item.

## Read status

`GET /api/v1/observations/{observation_id}`

```json
{
  "observation_id": "64-character hex",
  "disposition": "pending",
  "content_hash": "hex",
  "ingested_at": "2026-09-29T18:00:01Z",
  "layers": [
    { "name": "evidence", "outcome": "passed" }
  ]
}
```

`disposition` is one of:

| Value | Meaning |
| --- | --- |
| `pending` | Accepted, processing has not finished |
| `new` | First time Tacit has seen this id |
| `sighting` | Same id, same bytes, recorded again |
| `refreshed` | Same id, new bytes |
| `excluded` | Accepted, then dropped by a rule (noise, or a redaction rule you configured) |

`layers` names each stage and whether it passed, was skipped, or failed. This is the audit trail for that record. The file and the derived knowledge are not included.

## Errors

| HTTP | When |
| --- | --- |
| `400` | Missing `id`, unknown `source`, or both `body` and `artifact_id` |
| `401` | Missing or unknown key |
| `403` | Key revoked, or `member_id` is not in your organization |
| `409` | Checksum does not match, or the idempotency key was reused with a different payload |
| `413` | Inline body is over 1 MB |
| `415` | Inline body is not text or JSON |
| `429` | Rate limit. Honor `Retry-After` |

Tacit accepts the record before it decides the record is noise. Exclusion appears on the status URL as `excluded`. The accept call stays `202`.

## Limits

- 1 MB inline. Above that, upload first.
- 100 items per batch.
- Rate limit per key, returned as `429`.
