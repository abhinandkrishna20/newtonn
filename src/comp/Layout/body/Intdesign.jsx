import React from "react";
import car1 from '../img/car/car1.jpg';
import car2 from '../img/car/car2.jpg';
import car3 from '../img/car/car3.jpg';

const Intdesign =()=>{
return(
    <div>
        <div className="">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

        <div class="carousel-inner" style={{width:"100%", height:"40vh"}}>
    <div class="carousel-item active">
      <img src={car1} alt="Los Angeles" class="d-block" style={{width:"100%"}} />
    </div>
    <div class="carousel-item">
      <img src={car2} alt="Chicago" class="d-block" style={{width:"100%"}}  />
    </div>
    <div class="carousel-item">
      <img src={car1} alt="New York" class="d-block" style={{width:"100%"}} />
    </div>
  </div>
  
 
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>
        
    
    </div>
);
}
export default Intdesign;