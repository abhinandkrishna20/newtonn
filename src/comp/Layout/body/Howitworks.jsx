import React from "react";
import icon1 from "../../../img/how/icon1.jpg";

import "../../../Style/Mains.css";
const Howitworks = () => {
  return (
    <div className="How">
      <div className="whynew">
        <h3>How it Works?</h3>
        <div className="How-items">
                  <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Rise a Request</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Meet our Expert</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Budgeting & Signing</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Receive Plans</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Project Executions</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Quality Check</p>
          </div>

          <div  className="whyblock">
            <img src={icon1} alt="" />
            <p>Handover</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Howitworks;
