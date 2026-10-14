// Serverless function to create a transaction and (optionally) initiate a NIBSS transfer for settlements.
// Deploy under functions/transactions.ts (Vercel edge function style)

import { initiateNibssTransfer } from './nibss-adapter'

export async function POST(request: Request) {
  try{
    const body = await request.json()
    const { merchant_id, amount, beneficiaryAccount, beneficiaryBankCode, reference, narration } = body

    // Validate params in real implementation
    if(!merchant_id || !amount || !beneficiaryAccount || !beneficiaryBankCode){
      return new Response(JSON.stringify({error: 'missing_parameters'}), { status: 400, headers: {'Content-Type':'application/json'} })
    }

    // TODO: persist transaction to DB using SUPABASE_SERVICE_ROLE_KEY or server-side DB connection.
    // Example: INSERT into transactions (merchant_id, amount, status='initiated', external_reference=reference)

    // Initiate NIBSS transfer (mocked if no NIBSS config)
    const transfer = await initiateNibssTransfer({ reference: reference || `txn_${Date.now()}`, amount, beneficiaryAccount, beneficiaryBankCode, narration })

    // TODO: update transaction record with transfer result/provider reference and status

    return new Response(JSON.stringify({ success: true, transfer }), { status: 200, headers: {'Content-Type':'application/json'} })
  }catch(err){
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: {'Content-Type':'application/json'} })
  }
}
