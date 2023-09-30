import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
<nav>
    <div className="logo">MyShope</div>
    <div className="linkbox">
        <Link to={'/'}>HOME</Link>
        <Link to={'/cart'}>CART</Link>
    </div>
</nav>
    </div>
  )
}

export default Navbar