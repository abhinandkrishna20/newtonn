import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Top from "./comp/Top";
// import Top2 from "./comp/Top2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Signup from "./comp/Singup"; // Correct the typo in "Signup"
import ReactDOM from "react-dom/client";

import Home from "./comp/Home";

import Contact from "./comp/Contact";
import About from "./comp/About";

function App() {
  return (
    <div className="App">
      
        
      <Router basename="/newtonn" >
      <Top />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
