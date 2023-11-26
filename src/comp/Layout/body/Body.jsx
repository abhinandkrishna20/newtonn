import React from "react";
import Carousal from '../body/Carousal';
import OurService from "./OurService";
import Why from "./Why";
import Howitworks from "./Howitworks";
import Footer3 from "../footer/Footer3";
import Refer from "./Refer";
import Phase from "./Phase";
import Contractor from "./Contarctor";
import Materials from "./Materials";
// import signup from '../../../../src/comp/Layout/';

const Body =()=>{
    return(
        <div>
            <Carousal />
            <OurService />
            <Why />
            <Materials />
            <Contractor />
            <Phase />
            <Howitworks />
        
            <Refer />
            {/* <Footer3 /> */}
        </div>
    );
}
export default Body;