import React from 'react'

export default function AdminLogin(){
  return (
    <div className="container" style={{padding:32}}>
      <h2>Admin Login</h2>
      <p>Admin portal access.</p>
      <form>
        <label>Email<br/><input type="email" name="email" /></label><br/>
        <label>Password<br/><input type="password" name="password" /></label><br/>
        <button className="button" type="button">Sign in</button>
      </form>
    </div>
  )
}
