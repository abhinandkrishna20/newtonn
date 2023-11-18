import React from "react";
import "../Style/car2.css";
import img1 from "../img/interior/3.webp";
import img2 from "../img/interior/2.webp";
import img3 from "../img/interior/1.webp";
import card1 from "../img/interior/card1.webp";
// import "../JS/scroll.js";

const Interior = () => {
  return (
    <div className="interior" style={{ margin: "0", padding: "0" }}>
      <div class="carousel" >
        <ul class="slides">
          <input type="radio" name="radio-buttons" id="img-1" checked />
          <li class="slide-container">
            <div class="slide-image " id="imgwrap">
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" /> */}
              <img src={img1} alt="" className="imgwrap" />
            </div>
            <div class="carousel-controls">
              <label for="img-3" class="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-2" class="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li class="slide-container">
            <div class="slide-image" id="imgwrap">
              <img src={img2} alt="" />
              {/* <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" /> */}
            </div>
            <div class="carousel-controls">
              <label for="img-1" class="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-3" class="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" />
          <li class="slide-container">
            <div class="slide-image" id="imgwrap">
              <img src={img3} alt="" />
              {/* <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" /> */}
            </div>
            <div class="carousel-controls">
              <label for="img-2" class="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-1" class="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div class="carousel-dots">
            <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
            <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
            <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
          </div>
        </ul>
      </div>

      {/* <div class="scroll-container" > */}
    {/* <div class="scroll-handle"></div> */}
    <div style={{background:" #f0f0f0;"}}>

   
    <div class="card-container" >
      <div class="card">
      <div
            className="car"
            style={{
              alignContent: "center",
              padding: "10px",
              justifyItems: "center",
              maxWidth: "220px",
              margin: "5px",
            //   background: "#aabbaa",
              borderRadius:"5px",
              border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={card1}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Bricks</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>Red clay bricks</span> <br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>   </p>
            <button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%"}}>Add Cart</button>
          </div>
        </div>
 
    </div>
    </div>
    {/* </div> */}
    </div>
  );
};
export default Interior;
