import React from "react";
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      
    </Routes>
    </>
  );
}

export default App;
