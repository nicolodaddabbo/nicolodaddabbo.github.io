import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      <div className="sections">
        <Intro/>
        {/* <Portfolio/> */}
        {/* <Contact/> */}
      </div>
    </div> 
  )
}

export default App;
