---
slug: /
title: Data ingress
sidebar_position: 1
---

# Data ingress

**Status:** Draft for review. **Version:** 0.1. **Date:** 6 October 2026.

This interface is not in production. The pages here are the contract Tacit will build to.

This document is for security, data, and integration reviewers. Tacit already captures knowledge from the tools a team uses (mail, files, meetings, chat). This specification adds two ways to bring records those tools do not already reach.

1. [Push API](/api). Your systems send a record to Tacit over HTTPS.
2. [Amazon S3](/s3). The records already sit in a bucket. Tacit reads them with a role you grant, from event notifications plus a listing, or through a small agent you run in your account.

Both paths identify a record the same way, store the bytes the same way, and run the same processing afterward. The machine-readable push contract is [openapi.yaml](pathname:///openapi.yaml).

## What Tacit does with a record

Tacit does not treat the file as the product. The product is the operational knowledge derived from it: the entities, the claims, and the links your organization can reuse.

For every accepted record, Tacit:

1. Stores the bytes as an immutable object and keeps a pointer to it. The processing queue carries that pointer, the identity, and a content hash. It does not carry the file.
2. Identifies the record as one item inside your organization: source, type, and the stable id you already use.
3. If the same id arrives again with the same bytes, Tacit records who saw it and stops. It does not create a second item and does not run extraction again.
4. If the same id arrives with new bytes, Tacit keeps the id and refreshes the item.
5. Tacit then decides whether the record is noise, matches it to your catalog, and writes the knowledge it can support. Ambiguous matches wait for a person. They are not guessed into the catalog.

You can ask for the status of a record at any time. The status names the stage and the outcome. It does not return the file, and it does not return the derived knowledge.

## Rules that apply to both paths

**Identity.** A record is `organization + source + type + id`. The id is yours (a ticket number, a message id, an object key). Tacit does not invent one. The organization is taken from the credential, never from a field in the body.

**Content is separate from identity.** A hash of the bytes says whether the content changed. The id stays stable across versions.

**Delivery is at-least-once.** Clients, S3 notifications, and the agent may retry. Tacit deduplicates on the identity and the content hash. A retried call with the same idempotency key returns the original acceptance. Reusing that key with a different payload is rejected.

**Landing objects are immutable.** A new delivery writes a new object. Tacit does not overwrite bytes in place.

**Replay does not require a second send.** Reprocessing reads the stored object again. The cursor that tracks progress lives in Tacit.

**Order.** Records with different ids can be processed in any order. Two versions of the same id are ordered by the source time you send (`seen_at`), then by version.

**Late and historical data use the same path as live data.** A backfill and a new event become the same kind of record. `seen_at` is when the source says it happened. `ingested_at` is when Tacit accepted it.

**Encryption.** TLS on every hop. Objects are encrypted at rest. When the object stays in your bucket, your key is the one that decrypts it. When Tacit holds a copy, Tacit encrypts it with a key dedicated to your organization.

**Least privilege.** An ingest credential can submit records and read their processing status. It cannot read your knowledge, other organizations, or employee data outside the scope you set.

**Logs.** Tacit logs the identity, the hash, the size, the key id, and the outcome. Tacit does not log the file contents, and does not put the file in the queue or in an error message.

**Retention.** Landing objects follow the retention period agreed for your organization. Removing a record writes a tombstone. Deleting the stored bytes is a separate, explicit job.

**People.** If you attach a person to a record, that person must already belong to your organization. The access list is captured at acceptance time.

## Where derived knowledge is stored

Files can stay in your bucket. Claims, entities, and embeddings are the knowledge Tacit produces. In the standard deployment they are stored in Tacit. Keeping that derived record in your account is a later option, described on the [S3 page](/s3). Say which you need before rollout. The interface does not change. The processing location does.

## What we need from you

**Push**

- The list of `source` names you will send
- Who should be able to create and revoke ingest keys
- Whether people (`member_id`) will be attached, and how those people map to your directory
- Expected volume (records per day, typical size)
- Retention period for the stored bytes

**S3**

- Account, region, bucket, prefix
- Versioning on or off
- Encryption: SSE-S3 or your CMK (and the key ARN, if we must decrypt)
- Mode: role, events, or agent
- Size cap and any prefixes or suffixes to skip
- Whether a sidecar will supply business ids, or the object key is the id

**Either path**

- Confirmation of where derived knowledge is stored: in Tacit, or in your account
- A sample of records (a few dozen, representative, with permission to process them) so identity and exclusion rules can be checked before a full backfill

## Out of scope for this version

- Replacing the in-product paste box. People can still submit text while signed in. That path is separate.
- A public URL that accepts raw S3 notifications without a queue and a signature.
- Copying your bucket into Tacit storage when you have granted a read role.
- Processing that runs inside your account. The contract allows it. The first build processes in Tacit.
- Connectors Tacit already operates (Google Workspace, Slack, and others). Those keep their own setup. They will converge on this same record shape. You do not configure them through this API.

## Review questions

1. Which path do you want first: push, S3 role, S3 events, or the agent?
2. Can derived knowledge (entities, claims, embeddings) be stored in Tacit, or must it remain in your account?
3. Who issues the stable id for each record, and is that id stable across updates?
4. Which encryption key should protect objects Tacit reads or stores?
5. What is the retention period, and who approves deletion?
