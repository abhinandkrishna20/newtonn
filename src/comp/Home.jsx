// import { Carousel } from "bootstrap";
import React from "react";
import Carousal from './Carousal';
import Material from './Material';
import Design from './Design';
import car3 from '../img/car/car3.jpg';
import Service from "./Service";
// import bg from "../img/background.jpeg";



const Home =()=>{
    const divStyle = {
        backgroundImage: car3,
        backgroundSize: 'cover', // You can adjust this property as needed
        backgroundPosition: 'center', // You can adjust this property as needed
      };
    return(
        <div style={{background:divStyle,opacity:0.9}}>
            <Carousal />
            <Material />
            <Design />
            <Service />
        </div>
    );
}
export default Home;