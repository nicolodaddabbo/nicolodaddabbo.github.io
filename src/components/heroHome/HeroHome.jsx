// import BigText from "../bigText/BigText"
import "./heroHome.scss"
import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import { useEffect, useRef, useState } from "react";
import { init } from "ityped";

export default function HeroHome() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Full Stack Developer", "Web Designer", "Web Developer", "Software Developer"],
        })
    }, [])

    const [isLoaded, setIsLoaded] = useState(false)
    return (
        // <div id="heroHome">
        //     <div className="heroTitle-container">
        //         <BigText
        //             text="Nicolo'"
        //             duration={1}
        //             animationType={"blocks"}
        //             tag={"h1"}
        //             className={"heroTitle"}
        //         />
        //         <BigText
        //             text="D'Addabbo"
        //             duration={1}
        //             animationType={"blocks"}
        //             tag={"h1"}
        //             className={"heroTitle"}
        //         />
        //         <BigText
        //             text="Web Developer"
        //             duration={1}
        //             animationType={"blocks"}
        //             tag={"h1"}
        //             className={"heroTitleUppercase"}
        //         />
        //         <BigText
        //             text="Full-Stack Developer"
        //             duration={1}
        //             animationType={"blocks"}
        //             tag={"h1"}
        //             className={"heroTitleUppercase"}
        //         />
        //         <BigText
        //             text="Web Designer"
        //             duration={1}
        //             animationType={"blocks"}
        //             tag={"h1"}
        //             className={"heroTitleUppercase"}
        //         />
        //     </div>

        // </div>
        <div className='heroHome' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <div className="imgCircle">
                        <img 
                            style={this.isLoaded ? {} : {display : 'none'}}
                            src="assets/logo_bianco.svg" 
                            alt="Nicolò D'Addabbo"
                            onLoad={setIsLoaded(true)}
                            />
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
                            <LinkedInIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://instagram.com/nicolodaddabbo">
                            <InstagramIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="mailto:nicolodaddabbo@gmail.com">
                            <MailOutlineIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="tel:+393273936148">
                            <CallIcon style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://github.com/nicolodaddabbo">
                            <GitHubIcon style={{ fontSize: "40px" }} />
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