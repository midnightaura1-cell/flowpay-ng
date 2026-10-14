// HMAC helper for client/server usage (fallback implementation for Node/Edge runtimes)
export async function signHMAC(payload: string, secret: string){
  const encoder = new TextEncoder()
  const keyData = encoder.encode(secret)
  const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(payload))
  return Buffer.from(sig).toString('hex')
}

export async function verifyHMAC(payload: string, secret: string, signature: string){
  const expected = await signHMAC(payload, secret)
  return expected === signature
}
