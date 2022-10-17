import "./app.scss";
import Home from "./components/home/Home"
import React from 'react'
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return(
    <BrowserRouter>
      <Home/>   
    </BrowserRouter>
  )
}
