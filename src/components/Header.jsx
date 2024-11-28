import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <Link to="/"i ><h1 className="title">My Blog</h1></Link>
        <div className="btn-container">
          <button className="btn">Sign Up</button>
          <button className="btn">Log In</button>
        </div>
    </div>
  )
}

export default Header