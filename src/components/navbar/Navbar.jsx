import "./navbar.scss"
import React from 'react'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')} id='navbar'>
      <div className="wrapper">
        {/* <div className="left">
          <a href="#intro" className="logo">Nicolò D'Addabbo</a>
          <div className="itemContainer">

          </div>
        </div> */}
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger" >
            <div className="hamburgerLine"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

  