import "./home.scss"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroHome from "../heroHome/HeroHome";
import Intro from "../intro/Intro";
import TimelineSection from "../timelineSection/TimelineSection";
import Projects from "../projects/Projects";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import { useRef, useState, useEffect } from "react";
import React from 'react'
import Contact from "../contact/Contact";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const isMobile = windowDimensions.width <= 768;
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef()

  const scrollToHome = () => {
    ref.current.scrollTo(0)
  }

  const scrollToProjects = () => {
    ref.current.scrollTo(2.2)
  }

  const scrollToContact = () => {
    ref.current.scrollTo(4)
  }

  const scaleFactor = isMobile ? 1 : 0

  return (
    <div id="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Parallax pages={4.5 + scaleFactor} ref={ref}>
        <ParallaxLayer speed={1} className="heroSection">
          <HeroHome />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4} factor={2} className="introSection">
          <Intro />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.4} factor={1} className="timelineSection">
          <TimelineSection />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1} factor={1.5 + scaleFactor} className="portfolioSection">
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={4.5 + scaleFactor} speed={0.5} factor={1.2} className="contactSection">
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}