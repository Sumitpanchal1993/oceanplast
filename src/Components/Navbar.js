import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import menuimage from '../Images/menu.png'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <span className='heading'>Ocean Micro Plast</span>
          <ul className='listtop'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>            
            <li><Link to="/customer">Customers</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/tablefetch">Table Fetch</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/other"><img src={menuimage} alt="" /></Link></li>
          </ul>
        </nav>
      </>
    )
  }
}
