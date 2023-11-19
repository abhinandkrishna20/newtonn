import React from "react";
import logo from "../../../img/social/logo.png";
import img1 from "../../../img/social/1.png";
import img2 from "../../../img/social/2.png";
import img3 from "../../../img/social/3.png";
import img4 from "../../../img/social/4.png";
import img5 from "../../../img/social/5.png";

import img6 from "../../../img/social/6.png";
import img7 from "../../../img/social/7.png";
const Footer3 = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-link">
          <h5>SERVICES</h5>
          <ul>
            <li>
              <a href="">Building Materials</a>
            </li>
            <li>
              <a href="">Construction Designing</a>
            </li>
            <li>
              <a href="">House Maintanance Works</a>
            </li>
            <li>
              <a href="">Appliances Services</a>
            </li>
            <li>
              <a href="">Contractor Profiles</a>
            </li>
          </ul>
        </div>

        <div className="footer-link">
          <h5>COMPANY</h5>
          <ul>
            <li>
              <a href="">About Newtonn</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer-link">
          <h5>BUSINESS</h5>
          <ul>
            <li>
              <a href="">Register as Professional</a>
            </li>
            <li>
              <a href="">Partner Welfare Policy</a>
            </li>
            <li>
              <a href="">Newtonn Community</a>
            </li>
            <li>
              <a href="">Code of Conduct</a>
            </li>
          </ul>
        </div>

        <div className="footer-link">
          <h5>POLICIES</h5>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Refund & Cancellations</a>
            </li>
            <li>
              <a href="">Privacy Policies</a>
            </li>
            
          </ul>
        </div>


      </div>
      <div className="social">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-soci">
          <p>Social Media</p>
          <div className="social-icon">
            <img src={img1} alt="" className="icon" />
            <img src={img2} alt="" className="icon" />
            <img src={img3} alt="" className="icon" />
            <img src={img4} alt="" className="icon" />
            <img src={img5} alt="" className="icon" />
          </div>
        </div>

        <div className="footer-soci">
          <p>Download App Now</p>
          <div className="social-icon">
            <img src={img6} alt="" className="icon" />
            <img src={img7} alt="" className="icon" />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyrights @ 2022 - 24 ARARK Infra Private Limited. All Rights.</p>
      </div>
    </div>
  );
};
export default Footer3;
