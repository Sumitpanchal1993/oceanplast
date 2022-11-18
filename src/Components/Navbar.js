import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import menuimg from '../Images/menu_white_36dp.svg'
// its css styling is given in app.css


function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display==='none') {
    console.log('yes')
    x.style.display = "none";
  }
  else(x.style.display = "block" )
  console.log(x)
  console.log("I am Clicked")
}
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <span className='heading'>Ocean Micro Plast</span>
          <ul className='listtop' id='myLinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>            
            <li><Link to="/customer">Customers</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/tablefetch">Table Fetch</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/other"><img src={menuimage} alt="" /></Link></li> */}
          </ul>
          <div className='burger'>
            <img src={menuimg} alt="menu" onClick={menu}/>             
          </div>
        </nav>
      </>
    )
  }
}
