import React from "react";
import buildingMaterialSVG from "../img/service/serv1.png"; // Replace with your SVG file paths
import designingSVG from "../img/service/serv2.jpg";
import contractorsProfileSVG from "../img/service/serv3.png";
import houseWorksSVG from "../img/service/serv4.jpg";
import applianceServiceSVG from "../img/service/serv5.jpg";


const Service = () => {
    const roundImageStyle = {
        borderRadius: "10%",
        width: "150px", // Adjust the width as needed
        height: "150px", // Adjust the height as needed
      };
  return (
    <div style={{background:"#ffeeff"}} >
         <h1 className=" text-center ">Services</h1>
      <div className="container text-center mt-5 justify-content-center " >
       
        <div className="row mt-4 mx-auto" >
        <div className="col-md-4 mb-4 mt-4 text-center">
            <a href="/"  style={{textDecoration:"none"}}>
            <img src={buildingMaterialSVG} alt="Building Material" style={roundImageStyle} />
            <p>Building Material</p>
            </a>
          </div>
          <div className="col-md-4 mb-4 mt-4 text-center">
          <a href="/"  style={{textDecoration:"none"}}>
            <img src={designingSVG} alt="Designing" style={roundImageStyle} />
            <p>Designing</p>
            </a>
          </div>
          <div className="col-md-4 mb-4 mt-4 text-center">
          <a href="/"  style={{textDecoration:"none"}}>
            <img src={contractorsProfileSVG} alt="Contractors Profile" style={roundImageStyle} />
            <p>Contractors Profile</p> </a>
          </div>
          <div className="col-md-6 mb-4 mt-4 text-center">
          <a href="/" style={{textDecoration:"none"}}>
            <img src={houseWorksSVG} alt="House Works" style={roundImageStyle} />
            <p>House Works</p> </a>
          </div>
          <div className="col-md-6 mb-4 mt-4 text-center">
          <a href="/"  style={{textDecoration:"none"}}>
            <img src={applianceServiceSVG} alt="Appliance Service" style={roundImageStyle} />
            <p>Appliance Service</p> </a>
          </div>
          </div>
      </div>
    </div>
  );
};
export default Service;
