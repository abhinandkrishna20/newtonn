import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Top from "./comp/Top";
// import Top2 from "./comp/Top2";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import React from "react";
import Signup from "./comp/Singup"; // Correct the typo in "Signup"
import ReactDOM from "react-dom/client";

import Home from "./comp/Home";

import Contact from "./comp/Contact";
import About from "./comp/About";
import Intdesign from "./comp/Intdesign";
import Addcart from "./comp/Addcart";
import Addcartcmt from "./comp/Addcartcmt";
import Addcartstl from "./comp/Addcartstl";

import Addcartsnd from "./comp/Addcartsnd";

import Addcartagr from "./comp/Addcartagr";
function App() {
  return (
    <div className="App">
      
        
      <BrowserRouter   basename="/newtonn">
      <Top />
        <Header   />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intdesign" element={<Intdesign />} />
          <Route path="/addcart/bricks" element={<Addcart />} />
          <Route path="/addcart/cmt" element={<Addcartcmt />} />
          <Route path="/addcart/stl" element={<Addcartstl />} />
          <Route path="/addcart/snd" element={<Addcartsnd />} />
          <Route path="/addcart/agr" element={<Addcartagr />} />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
