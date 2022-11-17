import "./app.scss";
import Home from "./components/home/Home"
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";

export default function App() {
  return(
    <BrowserRouter>
      <Helmet>
        <title>Nicolò D'Addabbo Portfolio</title>
        <meta
          name="description"
          content="Freelance Web Developer based in Rimini - Italia"
        />
        <meta
          name="keywords"
          content="Sito Web, Rimini, Web Developer, Freelance, Developer, Full Stack, Portfolio"
        />
        <meta 
          http-equiv="Content-Language" 
          content="en, it" 
        />
      </Helmet>
      <Home/>   
    </BrowserRouter>
  )
}
