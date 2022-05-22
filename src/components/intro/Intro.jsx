import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        strings: ["Full Stack Developer", "Web Designer", "Web Developer", "Software Developer"],
      })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <div className="imgCircle">
            <img src="assets/logo_sito_1.png" alt="Nicolò D'Addabbo" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Ciao, I'm</h2>
          <h1><span>N</span>icolò <span>D</span>'Addabbo</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
          <div className="social">
            <a href="https://www.linkedin.com/in/nicolodaddabbo/">
              <LinkedInIcon style={{fontSize: "50px"}}/>
            </a>
            <a href="https://instagram.com/nicolodaddabbo">
              <InstagramIcon style={{fontSize: "50px"}}/>
            </a>
            <a href="mailto:nicolodaddabbo@gmail.com">
              <MailOutlineIcon style={{fontSize: "50px"}}/>
            </a>
            <a href="tel:+393273936148">
              <CallIcon style={{fontSize: "50px"}}/>
            </a>
            <a href="https://github.com/nicolodaddabbo">
              <GitHubIcon style={{fontSize: "50px"}}/>
            </a>
          </div>
        </div>
        {/* <a href="#portfolio" className="arrow-down">
          <KeyboardArrowDownIcon style={{fontSize: "50px"}}/>
        </a> */}
      </div>
    </div>
  )
}
