import React from 'react'

export default function Signup(){
  return (
    <div className="container" style={{padding:32}}>
      <h2>Sign up</h2>
      <p>Create a merchant account on FlowPay.</p>
      <form>
        <label>Business email<br/><input type="email" name="email" /></label><br/>
        <label>Password<br/><input type="password" name="password" /></label><br/>
        <button className="button" type="button">Create account</button>
      </form>
    </div>
  )
}
