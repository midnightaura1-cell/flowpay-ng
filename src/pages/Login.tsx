import React from 'react'

export default function Login(){
  return (
    <div className="container" style={{padding:32}}>
      <h2>Login</h2>
      <p>Placeholder login page — integration with AuthContext coming next.</p>
      <form>
        <label>Email<br/><input type="email" name="email" /></label><br/>
        <label>Password<br/><input type="password" name="password" /></label><br/>
        <button className="button" type="button">Sign in</button>
      </form>
    </div>
  )
}
