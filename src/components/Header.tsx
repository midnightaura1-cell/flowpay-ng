import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{margin:0}}>FlowPay</h3>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/docs">Developers</Link>
          {' | '}
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}
