import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(props) {

  function openNav() {
    document.getElementById('mySidebar').style.width = "250px";
    document.getElementById('logo').hidden = true
  }

  function closeNav() {
    document.getElementById('mySidebar').style.width = "0";
    document.getElementById('logo').hidden = false

  }

  return (
    <div>
      <div id='mySidebar' className='sidebar'>
        <img src={props.img} alt="img-header" />
        <Link
          type='button'
          className='closebtn'
          onClick={closeNav}
        > X </Link>
        <Link to="#"> Home </Link>
        <Link to="#"> Videos </Link>
        <Link to="#"> Images </Link>
        <div id='footer-bar'>
          <span>Felipe Alex &copy; 2022</span>
        </div>
      </div>

      <button className='button' onClick={openNav}><span>MENU</span></button>
      <div className='logo'>
        <img id='logo' style={{position: "absolute"}} src={props.img} alt="logo" />
      </div>
      
    </div>
  )
}
