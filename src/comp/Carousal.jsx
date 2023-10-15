import React from "react";
import car1 from '../img/car/car1.jpg';
import car2 from '../img/car/car2.jpg';
import car3 from '../img/car/car3.jpg';
import '../Style/Carosel.css';
const Carousal =()=>{
    return(
        <div className=" ">
      
            
      <div id="imageCarousel" className="hero carousel slide  custom-carousel" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner ">
          <div className="carousel-item active">
         
            <img
              src={car1}
              className="d-block w-100"
              alt="Slide 1"
            />
             <div class="info d-flex align-items-start">
      <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h3 data-aos="fade-down">Experienced Construction Professionals</h3>
            <p data-aos="fade-up">Our team of experienced construction professionals is dedicated to delivering top-quality projects. With years of expertise in the industry, we are your trusted partner in bringing your construction vision to life.</p>
            {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a> */}
          </div>
        </div>
      </div>
    </div>
            
          </div>
          <div className="carousel-item">
          <div class="info d-flex align-items-start">
      <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h3 data-aos="fade-down">Comprehensive Construction Services</h3>
            <p data-aos="fade-up">We provide a wide range of construction services, from residential to commercial projects. Whether it's new construction, renovations, or remodeling, our services are tailored to meet your specific needs.</p>
            {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a> */}
          </div>
        </div>
      </div>
    </div>
            <img
              src={car2}
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
          <div class="info d-flex align-items-start">
      <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h3 data-aos="fade-left">Uncompromising Quality Standards</h3>
            <p data-aos="fade-up">At <strong className="h3blue">NEWTON,</strong>  we uphold uncompromising quality standards in every project. From the selection of materials to the execution of work, we ensure that the highest level of quality is maintained throughout.</p>
            {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a> */}
          </div>
        </div>
      </div>
    </div>
            <img
              src={car3}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#imageCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#imageCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    
        </div>
    );
}
export default Carousal;