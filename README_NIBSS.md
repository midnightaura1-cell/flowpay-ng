## NIBSS Integration (FlowPay)

This project includes a scaffolded NIBSS adapter and serverless endpoints for initiating transfers and receiving callbacks.

Files of interest:
- functions/nibss-adapter.ts — adapter with mocked behavior if no NIBSS_BASE_URL is configured. Implements HMAC signing scaffolding.
- functions/transactions.ts — endpoint to create a transaction and call the NIBSS adapter to initiate transfers.
- functions/webhooks-nibss.ts — endpoint to receive and verify NIBSS callbacks/webhooks.
- src/lib/hmac.ts — helper functions for signing and verifying HMAC payloads.

Environment variables used for NIBSS integration (set these in Vercel or your environment):

- NIBSS_BASE_URL — base API URL for the NIBSS provider (leave empty to use the mock)
- NIBSS_CLIENT_ID — client id if required by provider
- NIBSS_CLIENT_SECRET — client secret if required
- NIBSS_API_KEY — API key for provider (used as Bearer token)
- NIBSS_SIGNATURE_SECRET — secret used to sign outgoing requests and validate inbound webhooks

Usage notes & next steps:
1. For local development you can leave NIBSS_BASE_URL empty — the adapter will return mock success responses so you can test settlement flows.
2. When you have a bank sponsor or aggregator that grants you access to NIBSS endpoints, populate the environment variables and replace mocked parts with the real provider contract (endpoints, auth flows).
3. Ensure you store service keys (SUPABASE_SERVICE_ROLE_KEY, NIBSS secrets, etc.) as server-only environment variables and never expose them to the browser.
4. Implement DB persistence in functions/transactions.ts and webhook handler to reconcile provider callbacks with your transactions table.

Security & compliance:
- NIBSS and direct settlement integrations typically require a bank sponsor and contractual onboarding. Only use live keys after completing legal and compliance steps.
- Implement retries, idempotency, logging, and encrypted storage for provider responses and sensitive PII.

