import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Top from "./comp/Top";
// import Top2 from "./comp/Top2";
import { HashRouter , Routes, Route, Link } from "react-router-dom";
import React from "react";
import Signup from "./comp/Singup"; // Correct the typo in "Signup"
import ReactDOM from "react-dom/client";

import Home from "./comp/Home";

import Contact from "./comp/Contact";
import About from "./comp/About";

function App() {
  return (
    <div className="App">
      
        
      <HashRouter   >
      <Top />
        <Header  basename="/newtonn" />
        <Routes>
          <Route path="/newtonn/" element={<Home />} />
          <Route path="/newtonn/#/sign" element={<Signup />} />
          <Route path="/newtonn/#/about" element={<About />} />
          <Route path="/newtonn/#/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
      
    </div>
  );
}

export default App;
