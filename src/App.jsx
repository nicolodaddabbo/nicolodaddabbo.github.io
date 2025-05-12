import "./app.scss";
import Home from "./components/home/Home"
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta
          name="description"
          content="Software Engineer based in Berlin - Germany"
        />
        <title>Redirecting to https://nicolod.com/</title>
        <meta http-equiv="refresh" content="0; URL=https://nicolod.com/" />
        <link rel="canonical" href="https://nicolod.com/" />
        <meta
          http-equiv="Content-Language"
          content="en, it"
        />
      </Helmet>
      <Home />
    </BrowserRouter>
  )
}
