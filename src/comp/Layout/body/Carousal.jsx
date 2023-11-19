import React from "react";
import car1 from "../../../img/car1.jpg";
import '../../../Style/Carosel.css';

// import car2 from "../img/car/car2.jpg";
// import car3 from "../img/car/car3.jpg";
// import "../Style/Carosel.css";
const Carousal = () => {
  return (
    <div
      id="imageCarousel"
      className="hero carousel slide  custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100" alt="Slide 1" />
          <div class="info d-flex align-items-start">
            <div class="container">
              <div class="row justify-content-center ">
                <div class="col-lg-10 text-center">
                  <h3 data-aos="fade-down">
                  The fusion of art and engineering 
Creating masterpieces that define our world
                  </h3>
                  <div className="search col-lg-12" style={{display:"flex",justifyContent:"center"}}>
                    <div className="search-child" >
                    <i class="fas fa-map-marker-alt icon"></i>
                      <input type="text" name="location" placeholder="Location" style={{width:"100px"}} />
                    </div>
                    <div className="search-child " >
                    <i class="fas fa-search icon"></i>
                      <input type="text" name="search" placeholder="Search" style={{width:"250px"}} />
                    </div>
                  </div>

                  {/* <p data-aos="fade-up">
                    Our team of experienced construction professionals is
                    dedicated to delivering top-quality projects. With years of
                    expertise in the industry, we are your trusted partner in
                    bringing your construction vision to life.
                  </p> */}
                  {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <a
        className="carousel-control-prev"
        href="#imageCarousel"
        role="button"
        data-slide="prev"
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span> */}
      </a>
      <a
        className="carousel-control-next"
        href="#imageCarousel"
        role="button"
        data-slide="next"
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span> */}
      </a>
    </div>
  );
};
export default Carousal;
