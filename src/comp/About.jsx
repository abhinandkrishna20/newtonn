import React from "react";
import Carousal from "./Carousal";
import about from "../img/about.jpg";
import "../Style/about.css";
import Service from "./Service";

const About = () => {
  return (
    <div >
      <div id="about" class="about section-bg">
        <div class="container" data-aos="fade-up" >
          <div class="section-title">
            <h2 style={{margin:"10px"}}>About</h2>
            <h3>
              Find Out More About <span>NEWTONN</span>
            </h3>
            <p>
            At NEWTONN, we are a dedicated team of experienced professionals with a passion for building excellence. 
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <img src={about} class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
              Our Comprehensive Services.
              </h3>
              <p class="fst-italic">
              With over two decades of expertise in the construction industry, we have successfully delivered a wide range of projects, from residential homes to commercial structures. 
              </p>
              <p>We Provide the following Services also:</p>
              <ul>
                <li>
                  <i class="bx bx-store-alt"></i>
                  <div>
                    <h5>Construction Materials Supply:</h5>
                    <p>
                    Our Construction Materials Supply service is the backbone of every project. We offer a comprehensive range of high-quality construction materials, sourced from trusted suppliers.
                    </p>
                  </div>
                </li>
                <li>
                  <i class="bi bi-box2-heart-fill"></i>
                  <div>
                    <h5>Interior Design:</h5>
                    <p>
                    Transform your space with our Interior Design expertise. Our talented designers combine creativity and functionality to craft interiors that reflect your unique style and enhance the comfort of your space.
                    </p>
                  </div>
                </li>
                <li>
                  <i class="bx bx-images"></i>
                  <div>
                    <h5>Home Services:</h5>
                    <p>
                    Our Home Services provide you with the skilled professionals you need to make your home projects a reality.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
};
export default About;
