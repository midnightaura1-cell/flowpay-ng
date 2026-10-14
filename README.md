# FlowPay.ng

Prototype repository for FlowPay — payment processing infrastructure for Nigeria.

Quick start (local):

1. Clone the repo
2. npm install
3. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or replace with your Bolt credentials)
4. npm run dev

Notes:
- Database migrations are in sql/migrations/001_init.sql
- The NIBSS edge function is a mocked implementation at functions/nibss-edge.ts
- Replace the Supabase placeholder with the official Bolt client when available and provide server keys as environment variables for server-side operations.
