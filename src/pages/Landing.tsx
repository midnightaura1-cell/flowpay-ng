import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="container" style={{padding:32}}>
      <section style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{maxWidth:520}}>
          <h1>FlowPay — Payments simplified for Nigerian businesses</h1>
          <p>Accept and move money across Nigeria with FlowPay. Merchant onboarding, hosted checkout, API keys, and settlements.</p>
          <p>
            <Link to="/signup" className="button">Get started</Link>
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/360x220?text=FlowPay+Preview" alt="preview" />
        </div>
      </section>

      <hr />
      <section>
        <h2>How it works</h2>
        <ol>
          <li>Merchant signs up and completes onboarding (CAC docs, business info, bank details)</li>
          <li>Merchant gets API keys and hosted checkout</li>
          <li>FlowPay processes payments and settles to merchant bank</li>
        </ol>
      </section>
    </div>
  )
}
