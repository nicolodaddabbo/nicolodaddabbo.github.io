// import BigText from "../bigText/BigText"
import "./heroHome.scss"
import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useEffect, useRef, useState } from "react";
import { init } from "ityped";

export default function HeroHome() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Full Stack Developer", "Web Developer", "Software Developer"],
        })
    }, [])

    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div className='heroHome' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <div className="imgCircle">
                        <div className="imgCircleContent">
                            ND
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Ciao, I'm</h2>
                    <h1><span>N</span>icolò <span>D</span>'Addabbo</h1>
                    <h2>Full Stack Developer @ <a target="_blank" href="https://www.lunapartner.it">Luna Partner</a></h2>
                    <h2>MSc Computer Science and Engineering @ <a target="_blank" href="https://www.polimi.it">Politecnico di Milano</a></h2>
                    <h2>BSc Computer Science and Engineering @ <a target="_blank" href="https://www.unibo.it/">Università di Bologna</a></h2>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/nicolodaddabbo/">
                            <LinkedInIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://instagram.com/nicolodaddabbo">
                            <InstagramIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="mailto:nicolodaddabbo@gmail.com">
                            <MailOutlineIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://github.com/nicolodaddabbo">
                            <GitHubIcon style={{ fontSize: "40px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}