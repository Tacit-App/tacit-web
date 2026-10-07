---
title: Push API
description: Send records to Tacit over HTTPS.
---

Use the push API when a system you run already has the record: your application, a warehouse export, or a partner. You choose the moment it is sent, and you keep the id your system already uses, so Tacit does not become a second system of record for that ticket or contract.

The [S3 agent](/s3/) calls this same API when it has to upload a file Tacit cannot read directly. The machine-readable contract is [openapi.yaml](/docs/openapi.yaml).

The operations are listed in the sidebar:

- [POST /api/v1/artifacts](/api/artifacts/) reserves an upload for a large or binary file.
- [POST /api/v1/observations](/api/observations/) accepts one record.
- [POST /api/v1/observations:batch](/api/observations-batch/) accepts up to 100 uploaded records.
- [GET /api/v1/observations/{observation_id}](/api/observation/) reads the status.

## Credential

Tacit issues an organization ingest key. The secret is shown once. Tacit stores a hash of it, plus a short prefix so you can recognize the key in a list. You can rotate it and revoke it. Revocation takes effect on the next call.

The key can only submit records and read their status. It is not a login to the product, so a leaked ingest key cannot open the app.

Send it as `Authorization: Bearer <secret>`.

## Limits

- 1 MB inline. Above that, upload first.
- 100 items per batch.
- Rate limit per key, returned as `429` with `Retry-After`.
