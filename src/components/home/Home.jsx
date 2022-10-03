import "./home.scss"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Intro from '../intro/Intro'
import HeroHome from "../heroHome/HeroHome";

export default function Home() {
  return (
    <div id="home">
      <Parallax pages={4}>
        <ParallaxLayer speed={1} className="heroSection">
          <HeroHome/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Intro />
        </ParallaxLayer>
      </Parallax> 
    </div>
  )
}