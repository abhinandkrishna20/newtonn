import React from "react";
import '../../../Style/Mains.css';
import img1 from '../../../img/ser/1.jpg';
import img2 from '../../../img/ser/2.jpg';
import img3 from '../../../img/ser/3.jpg';
const OurService =()=>{
    return(
        <div className="service">
             <div>
          <div>
            <h3  >Our  <span style={{color:"#aa0000"}}>Services</span></h3>
            <p>
              We work very systamatically. Our team will analyze your project <br />
              requirements in Construction Materials, Construction Design and
              House Work
            </p>
            <div className="service-item">
              <div className="serivce-child">
                <img src={img1} alt="" />
                <h4>CONSTRUCTION MATERIALS</h4>
              </div>

              <div className="serivce-child">
                <img src={img2}  alt="" />
                <h4>CONSTRUCTION DESIGN</h4>
              </div>

              <div className="serivce-child">
                <img src={img3}  alt="" />
                <h4>HOUSE WORKS</h4>
              </div>
            </div>
          </div>
        </div> 
        </div>
    );
}
export default OurService;