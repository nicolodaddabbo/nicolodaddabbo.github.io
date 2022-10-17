import "./home.scss"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroHome from "../heroHome/HeroHome";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import { useRef, useState } from "react";
import React from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef()

  const scrollToHome = () => {
    ref.current.scrollTo(0)
  }

  const scrollToProjects = () => {
    ref.current.scrollTo(2.2)
  }

  return (
    <div id="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        scrollToHome={scrollToHome} 
        scrollToProjects={scrollToProjects}
      />
      <Parallax pages={5} ref={ref}>
        <ParallaxLayer speed={1} className="heroSection">
          <HeroHome />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4} factor={2} className="introSection">
          <Intro />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1} factor={1.5} className="portfolioSection">
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} >
          <div>test</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}