// NIBSS adapter and helper functions (server-side)
// This is an implementation scaffold — replace mock sections with real NIBSS endpoints and credentials when available.

const NIBSS_BASE_URL = process.env.NIBSS_BASE_URL || ''
const NIBSS_CLIENT_ID = process.env.NIBSS_CLIENT_ID || ''
const NIBSS_CLIENT_SECRET = process.env.NIBSS_CLIENT_SECRET || ''
const NIBSS_API_KEY = process.env.NIBSS_API_KEY || ''
const NIBSS_SIGNATURE_SECRET = process.env.NIBSS_SIGNATURE_SECRET || 'change_me'

async function signPayload(payload: string) {
  // Use HMAC SHA256 signing with NIBSS_SIGNATURE_SECRET for webhook validation and request signing if required.
  const encoder = new TextEncoder()
  const keyData = encoder.encode(NIBSS_SIGNATURE_SECRET)
  const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(payload))
  return Buffer.from(sig).toString('hex')
}

export async function initiateNibssTransfer({ reference, amount, beneficiaryAccount, beneficiaryBankCode, narration }: {reference:string, amount:number, beneficiaryAccount:string, beneficiaryBankCode:string, narration?:string}){
  // If no NIBSS_BASE_URL is configured, return a mocked response for development.
  const payload = {
    reference,
    amount,
    beneficiaryAccount,
    beneficiaryBankCode,
    narration: narration || 'FlowPay settlement'
  }

  if(!NIBSS_BASE_URL){
    // Mocked response — simulate success
    return {
      success: true,
      provider: 'nibss-mock',
      data: {
        providerReference: `MOCK-${reference}`,
        status: 'initiated',
        payload
      }
    }
  }

  // Real integration (example skeleton):
  try{
    const body = JSON.stringify(payload)
    const signature = await signPayload(body)

    const res = await fetch(`${NIBSS_BASE_URL}/transfers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NIBSS_API_KEY}`,
        'X-Signature': signature,
        'X-Client-Id': NIBSS_CLIENT_ID
      },
      body
    })

    const data = await res.json()
    return { success: res.ok, provider: 'nibss', status: res.status, data }
  }catch(err){
    return { success: false, error: String(err) }
  }
}

export async function verifyNibssCallback(rawBody: string, signatureHeader?: string){
  if(!signatureHeader){
    return { valid: false, reason: 'no-signature' }
  }
  const expected = await signPayload(rawBody)
  const valid = expected === signatureHeader
  return { valid, expected, provided: signatureHeader }
}
