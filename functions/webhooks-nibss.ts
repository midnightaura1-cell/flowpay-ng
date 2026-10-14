// Webhook endpoint to receive NIBSS callbacks
// Verifies signature and then updates transaction status in the DB.

import { verifyNibssCallback } from './nibss-adapter'

export async function POST(request: Request){
  const raw = await request.text()
  const signature = request.headers.get('x-signature') || request.headers.get('x-nibss-signature')

  const verification = await verifyNibssCallback(raw, signature || undefined)
  if(!verification.valid){
    return new Response(JSON.stringify({ success:false, reason: 'invalid_signature', details: verification }), { status: 400, headers: {'Content-Type':'application/json'} })
  }

  const payload = JSON.parse(raw)
  // Example payload fields: reference, providerReference, status, amount

  // TODO: reconcile callback with DB transaction using reference/providerReference and update status

  // respond 200 to acknowledge
  return new Response(JSON.stringify({ success: true }), { status: 200, headers: {'Content-Type':'application/json'} })
}
