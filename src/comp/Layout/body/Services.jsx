import React from "react";
import img1 from "../img/Services/1.png";
import img2 from "../img/Services/2.jpg";
import img3 from "../img/Services/3.jpg";
import img4 from "../img/Services/4.jpg";
import img5 from "../img/Services/5.jpg";
import back1 from "../img/Services/building.png";
import mat1 from "../img/material/mat/1.jpg";
import mat2 from "../img/material/mat/2.jpg";
import mat3 from "../img/material/mat/3.jpg";
import mat4 from "../img/material/mat/4.jpeg";
import mat5 from "../img/material/mat/5.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div style={{ margin: "40px", marginBottom:"40px" }}>
      <div className="container-fluid">
        <h2
          className="text-center"
          style={{ margin: "10px", color: "#aabbaa" }}
        >
          Services
        </h2>
        <div
          className="row"
          style={{
            border: "solid 2px rgb(200,200,200) ",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-md-3"
            style={{
              alignContent: "center",
              padding: "10px",
              margin: "10px",
              maxWidth: "200px",
            }}
          >
            <div
              className="card"
              style={{
                alignContent: "center",
                padding: "10px",
                justifyItems: "center",
              }}
            ><Link to="/interior" >
              <img
                src={img1}
                alt=""
                style={{ padding: "10px", width: "150px", height: "150px" }}
              /></Link>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              alignContent: "center",
              padding: "10px",
              margin: "10px",
              maxWidth: "200px",
            }}
          >
            <div
              className="card"
              style={{
                alignContent: "center",
                padding: "10px",
                justifyItems: "center",
              }}
            >
              <img
                src={img2}
                alt=""
                style={{ padding: "10px", width: "150px", height: "150px" }}
              />
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              alignContent: "center",
              padding: "10px",
              margin: "10px",
              maxWidth: "200px",
            }}
          >
            <div
              className="card"
              style={{
                alignContent: "center",
                padding: "10px",
                justifyItems: "center",
              }}
            >
              <img
                src={img3}
                alt=""
                style={{ padding: "10px", width: "150px", height: "150px" }}
              />
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              alignContent: "center",
              padding: "10px",
              margin: "10px",
              maxWidth: "200px",
            }}
          >
            <div
              className="card"
              style={{
                alignContent: "center",
                padding: "10px",
                justifyItems: "center",
              }}
            >
              <img
                src={img4}
                alt=""
                style={{ padding: "10px", width: "150px", height: "150px" }}
              />
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              alignContent: "center",
              padding: "10px",
              margin: "10px",
              maxWidth: "200px",
            }}
          >
            <div
              className="card"
              style={{
                alignContent: "center",
                padding: "10px",
                justifyItems: "center",
              }}
            >
              <img
                src={img5}
                alt=""
                style={{ padding: "10px", width: "150px", height: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <h2
        className="text-center"
        style={{ margin: "20px", padding: "20px", color: "#aabbaa" }}
      >
        Why choose NEWTONN
      </h2>
      <div className="container-fluid" style={{ background: "#fffeff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            color: "#8855aa",
            alignContent: "center",
          }}
        >
          <h3>Best Price</h3>
          <h3>Save Time</h3>
          <h3>Assured Quality</h3>
          <h3>Assistence</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              height: "150px",
              display: "flex",
              width: "100%",
              alignItems: "center",
              margin: "20px",
              background: "#ffccff",
              justifyContent: "center",
            }}
          >
            Ads here
          </div>
          <div
            style={{
              height: "150px",
              display: "flex",
              width: "100%",
              alignItems: "center",
              margin: "20px",
              background: "#ffccff",
              justifyContent: "center",
            }}
          >
            Ads here
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          margin: "20px",
          padding: "0px",
          marginBottom: "40px",
        //   background: "#eeeeff",
        }}
      >
        <h2
          className="text-center"
          style={{ marginTop: "30px", padding: "20px", color: "#9966c8a" }}
        >
          SHOP BUILDING MATERIALS
        </h2>
        {/* <Link to="/addcart" > */}
        <div
          className="row"
          style={{
            // height: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            
          <div
            className="car"
            style={{
              alignContent: "center",
              padding: "10px",
              justifyItems: "center",
              maxWidth: "220px",
              margin: "5px",
            //   background: "#aabbaa",
              borderRadius:"5px",
              border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={mat1}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Bricks</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>Red clay bricks</span> <br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>   </p>
            <Link to="/addcart/bricks"><button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%"}}>Add Cart</button></Link>
          </div>

          <div
             className="car"
             style={{
               alignContent: "center",
               padding: "10px",
               justifyItems: "center",
               maxWidth: "220px",
               margin: "5px",
             //   background: "#aabbaa",
               borderRadius:"5px",
               border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={mat2}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px", border:"solid #aaaaaa 2px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Cement</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>33, 43, 53 Grades</span><br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>  </p>
            <Link to="/addcart/cmt"> <button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%",margin:"5px",  }}>Add Cart</button></Link>
          </div>

          <div
            className="car"
            style={{
              alignContent: "center",
              padding: "10px",
              justifyItems: "center",
              maxWidth: "220px",
              margin: "5px",
            //   background: "#aabbaa",
              borderRadius:"5px",
              border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={mat3}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Steels and Pipes</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>Structral Steels</span><br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>  </p>
            <Link to="/addcart/stl"><button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%"}}>Add Cart</button></Link> 
          </div>
          <div
             className="car"
             style={{
               alignContent: "center",
               padding: "10px",
               justifyItems: "center",
               maxWidth: "220px",
               margin: "5px",
             //   background: "#aabbaa",
               borderRadius:"5px",
               border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={mat4}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Sand</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>River Sand and M - Sand</span><br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>  </p>
            <Link to="/addcart/snd"> <button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%"}}>Add Cart</button></Link>
          </div>
          <div
            className="car"
            style={{
              alignContent: "center",
              padding: "10px",
              justifyItems: "center",
              maxWidth: "220px",
              margin: "5px",
            //   background: "#aabbaa",
              borderRadius:"5px",
              border:"solid #eeeeee 2px"
            }}
          >
            <img
              src={mat5}
              alt=""
              style={{ padding: "5px", width: "200px", height: "200px" }}
            />
            <h5 style={{textAlign:"start" ,color:"#000066"}}>Aggregates</h5>
            <p style={{color:"#555555"}}><span style={{color:"#000000", fontStyle:"italic"}}>9.5 - 37.5 mm</span> <br />4.5 <span class="fa fa-star" style={{color:"#ffbf00"}}></span>   </p>
            <Link to="/addcart/agr"> <button style={{background:"#aaaaff", padding:"5px 5px" , borderRadius:"10%"}}>Add Cart</button></Link>
          </div>
         
        </div> 
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Services;
