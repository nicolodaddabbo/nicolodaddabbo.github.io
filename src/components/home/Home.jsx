import "./home.scss"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroHome from "../heroHome/HeroHome";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";

export default function Home() {
  return (
    <div id="home">
      <Parallax pages={5}>
        <ParallaxLayer speed={1} className="heroSection">
          <HeroHome/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4} factor={2} className="introSection">
          <Intro/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1} factor={1} className="portfolioSection">
          <Projects/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={4} factor={1} className="portfolioSection">
          <div>test</div>
        </ParallaxLayer>
      </Parallax> 
    </div>
  )
}