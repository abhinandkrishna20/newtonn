import React from "react";
import im1 from '../img/service/image1.webp';
import im2 from '../img/service/image2.webp';
import im3 from '../img/service/image3.webp';
import im4 from '../img/service/image4.webp';
import im5 from '../img/service/image5.webp';
import im6 from '../img/service/image6.jpeg';
import im7 from '../img/service/image7.jpg';
import im8 from '../img/service/image8.jpg';
import { Link } from "react-router-dom";


const Design=()=>{
    const buttons = [
        { imageUrl: im1, alt: 'Image 1' },
        { imageUrl: im2, alt: 'Image 2' },
        { imageUrl:  im3, alt: 'Image 3' },
        { imageUrl:  im4, alt: 'Image 4' },
        { imageUrl:  im5, alt: 'Image 5' },
        { imageUrl:  im6, alt: 'Image 6' },
        { imageUrl:  im7, alt: 'Image 7' },
        { imageUrl: im8, alt: 'Image 8' },
      ];
    return(
        <div style={{background:"#eeffee"}} >
        <div className="container text-center mt-5" >
        <h1 className=" text-center ">Design</h1>
        <div className="row mt-4">
          {buttons.map((button, index) => (
            <div key={index} className="col-md-3 mb-4">
                <h5></h5>
              <button className="btn btn-light btn-block">
                <Link to={"/intdesign"}>
                <img
                  src={button.imageUrl}
                  alt={button.alt}
                  className="img-fluid"
                />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
}
export default Design;