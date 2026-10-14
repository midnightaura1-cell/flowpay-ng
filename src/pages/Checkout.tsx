import React from 'react'

export default function Checkout(){
  return (
    <div className="container" style={{padding:32}}>
      <h2>Hosted Checkout</h2>
      <p>This is a hosted payment page preview. Integrate provider SDK to accept payments.</p>
      <form>
        <label>Amount (NGN)<br/><input type="number" name="amount" defaultValue={1000} /></label><br/>
        <label>Email<br/><input type="email" name="email" /></label><br/>
        <button className="button" type="button">Pay now</button>
      </form>
    </div>
  )
}
