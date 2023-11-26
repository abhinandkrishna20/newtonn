import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Header1 from "./comp/Layout/header/Header1";
import Footer from "./comp/Layout/footer/Footer";
import Body from "./comp/Layout/body/Body";
import Sign from "./comp/Layout/body/Sign";
import Footer3 from "./comp/Layout/footer/Footer3";
import About from "./comp/Layout/body/About";
import Contact from "./comp/Layout/body/Contact";
import Cement from "./comp/Layout/body/Cement";
import Steel from "./comp/Layout/body/Steel";
// import SignUp from "./comp/Layout/body/New folder/Singup";
function App() {
  return (
    <div className="App">
      
        
      <BrowserRouter   basename="/newtonn">
      {/* <Top />
        <Header   /> */}
        <Header1 />
        
        <Routes>
          
          <Route path="/" element={<Body />} />
         
          
          <Route path="/login" element={<Sign />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/cement" element={<Cement />} />
          
          <Route path="/steel" element={<Steel />} />
          
          {/* <Route path="/intdesign" element={<Intdesign />} /> */}
          {/* <Route path="/interior" element={<Interior />} /> */}
          
          
          
        </Routes>
        <Footer3 />
        {/* <Footer /> */}
   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
