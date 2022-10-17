import "./menu.scss"
import React from 'react'

export default function Menu({ menuOpen, setMenuOpen, scrollToHome, scrollToProjects, scrollToContact }) {
  return (
    <div className={"menu " + (menuOpen && "active")} onClick={() => setMenuOpen(false)}>
        <ul>
            <li>
                <span onClick={scrollToHome}>Home</span>
            </li>
            <li>
                <span onClick={scrollToProjects}>Projects</span>
            </li>
            <li>
                <span onClick={scrollToContact}>Contact</span>
            </li>   
        </ul>
    </div>
  )
}
