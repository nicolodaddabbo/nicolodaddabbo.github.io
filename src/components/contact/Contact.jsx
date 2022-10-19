import "./contact.scss"
import React from 'react'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contactHeader">
        <p className="contactHeaderLeft">Want to work<br/>togheter?</p>
        <p className="contactHeaderRight">Send me a<br/>message</p>
      </div>
      <div className="contactEmail">
        <a className="bigEmail" href="mailto:nicolodaddabbo@gmail.com">nicolodaddabbo<span className="at">@</span>gmail<span className="dot">.</span>com</a>
      </div>
      <div className="footerContainer">
        <div className="footerCredits">
          Build and Developed by <a href="https://nicolodaddabbo.github.io/">Nicolò D'Addabbo</a>
        </div>
      </div>
    </div>
  )
}
