import React from "react";
import img1 from "../../../img/mat/1.jpg";
import img2 from "../../../img/mat/2.jpg";
import img3 from "../../../img/mat/3.jpg";
import img4 from "../../../img/mat/4.jpg";
import img5 from "../../../img/mat/5.jpg";
import fet1 from "../../../img/mat/11.jpg";
import fet2 from "../../../img/mat/22.jpg";
import fet3 from "../../../img/mat/33.jpg";
import fet4 from "../../../img/mat/44.jpg";
import fet5 from "../../../img/mat/55.jpg";

const Materials = () => {
  return (
    <div className="materials">
      <h3 style={{ textAlign: "center", fontWeight: "600" }}>
        CONSTRUCTION <span style={{ color: "#aa0000" }}>MATERIALS</span>
      </h3>

      <div className="mat-item-con" style={{margin:"5% 10%"}}>
        <div className="mat-item">
          <img src={img1} alt="" />
          <h6>CEMENT</h6>
        </div>
        <div className="mat-item">
          <img src={img2} alt="" />
          <h6>SAND</h6>
        </div>
        <div className="mat-item">
          <img src={img3} alt="" />
          <h6>STEEL</h6>
        </div>
        <div className="mat-item">
          <img src={img4} alt="" />
          <h6>BRICKS</h6>
        </div>
        <div className="mat-item">
          <img src={img5} alt="" />
          <h6>AGGREGATE </h6>
        </div>
      </div>
      <div className="feature-con">
        <div className="feature">
          <img src={fet1} alt="" />
          <h6>Easy to Order</h6>
        </div>

        <div className="feature">
          <img src={fet2} alt="" />
          <h6>Premium Quality</h6>
        </div>

        <div className="feature">
          <img src={fet3} alt="" />
          <h6>Big Savings</h6>
        </div>

        <div className="feature">
          <img src={fet4} alt="" />
          <h6>Free Shipping for Bulk Order</h6>
        </div>

        <div className="feature">
          <img src={fet5} alt="" />
          <h6>Product Sourced Directly
From Manufacturers</h6>
        </div>
      </div>
    </div>
  );
};
export default Materials;
