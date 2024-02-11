import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import "./pages/style.css";
import Header from "./pages/header";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./pages/footer";
import Service from "./pages/service";
import Skill from "./pages/skill";
import Project from "./pages/project";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>
      <Header/>
      <Home />
      <About />
      <Service/>
      <Skill/>
      <Project/>
      
    <Routes>
    <Route path="/">
    {/* <Route index path="/" element={<Home />} />
    <Route index path="/about" element={<About />} /> */}
   
      </Route>
    </Routes>
    < Footer/>

    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
