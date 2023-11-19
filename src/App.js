import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Header1 from "./comp/Layout/header/Header1";
import Footer from "./comp/Layout/footer/Footer";
import Body from "./comp/Layout/body/Body";
function App() {
  return (
    <div className="App">
      
        
      <BrowserRouter   basename="/newtonn">
      {/* <Top />
        <Header   /> */}
        <Header1 />
        <Body />
        <Routes>
          
          {/* <Route path="/" element={<Home2 />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          
          {/* <Route path="/sign" element={} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/intdesign" element={<Intdesign />} /> */}
          {/* <Route path="/interior" element={<Interior />} /> */}
          
          
          
        </Routes>
        {/* <Footer /> */}
   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
