import React from "react";
import car1 from "../../../img/car2.jpg";
import '../../../Style/Carosel.css';

// import car2 from "../img/car/car2.jpg";
// import car3 from "../img/car/car3.jpg";
// import "../Style/Carosel.css";
const Banner = () => {
  return (
    <div
      id="imageCarousel"
      className="hero carousel slide  custom-carousel"
      data-bs-ride="carousel"
    //   data-bs-interval="2000" 

    >
      <div className="carousel-inner ">
        <div className="carousel-item active" style={{maxHeight:"500px", alignContent:"center"}} >
          <img src={car1} className="d-block w-100" alt="Slide 1" style={{}} />
          <div class="info d-flex align-items-start">
            <div class="container" >
              <div class="row justify-content-center ">
                <div class="col-lg-10 text-center">
                  <h3 style={{fontSize:"80px"}}>
                Cement
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  );
};
export default Banner;
