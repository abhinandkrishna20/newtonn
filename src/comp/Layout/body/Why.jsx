import React from "react";
import icon1 from '../../../img/icon/icon1.png';

import "../../../Style/Mains.css";
const Why = () => {
  return (
    <div className="why">
      <div className="whynew" >
        <h3>Why Newtonn?</h3>
        <div className="why-items">
          <div className="whyblock">
            <div className="round"> <img src={icon1} alt="" style={{padding:"5px"}}/></div>
           
            <h5>BEST PRICE</h5>
          </div>

          <div className="whyblock">
          <div className="round"> <img src={icon1} alt="" style={{padding:"5px"}}/></div>
           
            <img src="" alt="" />
            <h5>SAVE TIME</h5>
          </div>

          <div className="whyblock">
          <div className="round"> <img src={icon1} alt="" style={{padding:"5px"}}/></div>
           
            <img src="" alt="" />
            <h5>ASSURED QUALITY</h5>
          </div>

          <div className="whyblock">
          <div className="round"> <img src={icon1} alt="" style={{padding:"5px"}}/></div>
           
            <img src="" alt="" />
            <h5>ON TIME COMPLETION</h5>
          </div>

          <div className="whyblock">
          <div className="round"> <img src={icon1} alt="" style={{padding:"5px"}}/></div>
             
            <img src="" alt="" />
            <h5>ASSISTANCE</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Why;
