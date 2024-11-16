import React from 'react'

function Header() {
  return (
    <div className="header">
        <h1 className="title">My Blog</h1>
        <div className="btn-container">
          <button className="btn">Sign Up</button>
          <button className="btn">Log In</button>
        </div>
    </div>
  )
}

export default Header