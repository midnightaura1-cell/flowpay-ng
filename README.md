# FlowPay.ng

A Nigerian payment infrastructure prototype with merchant onboarding, dashboards, and transaction settlement flow.

## Local setup

1. npm install
2. cp .env.example .env
3. Fill in your Supabase/Bolt env values and NIBSS values as needed.
4. npm run dev
5. Open http://localhost:5173

## Production deployment

Connect this repo to Vercel and add the environment variables from `.env.example`.

## Current status

- App shell and routes are implemented
- Paystack-inspired brand theme is applied
- Merchant onboarding flow scaffold is included
- Admin and merchant dashboards are scaffolded
- NIBSS transfer adapter and webhook mock are included
- Browser smoke tests are set up with Playwright

## Required next step for real production use

- Add real database + auth credentials
- Add real NIBSS or PSP API access
- Add secure server-side storage and webhook validation
- Finalize PCI/compliance and bank sponsorship approval
