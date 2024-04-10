import "./contact.scss"
import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contactHeader">
        <p className="contactHeaderLeft">Want to work<br />togheter?</p>
        <p className="contactHeaderRight">Send me a<br />message</p>
      </div>
      <div className="contactEmail">
        <a className="bigEmail" href="mailto:nicolodaddabbo@gmail.com">nicolo<span className="at"></span>daddabbo<span className="at">@</span>gmail<span className="dot">.</span>com</a>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/nicolodaddabbo/">
          <LinkedInIcon style={{ fontSize: "50px" }} />
        </a>
        <a href="https://instagram.com/nicolodaddabbo">
          <InstagramIcon style={{ fontSize: "50px" }} />
        </a>
        <a href="mailto:nicolodaddabbo@gmail.com">
          <MailOutlineIcon style={{ fontSize: "50px" }} />
        </a>
        <a href="https://github.com/nicolodaddabbo">
          <GitHubIcon style={{ fontSize: "50px" }} />
        </a>
      </div>
      <div className="footerContainer">
        <div className="footerCredits">
          Build and Developed by <a href="https://nicolodaddabbo.github.io/">Nicolò D'Addabbo</a>
        </div>
      </div>
    </div>
  )
}
