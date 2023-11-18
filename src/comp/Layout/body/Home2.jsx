import React from "react";
import "../Style/newhome.css";

const Home2 =()=>{
    return(
        <div>
            <div className="headcontact" style={{display:"flex", background:"#333333"}}>
            <a href="">Login/Signup</a>
            <a href="">Register As a Professional</a>
            <a href="">Refer & Earn</a>
            </div>
            <div className="nav">
                <div className="logo"> LOGO</div>
                <nav className="navbar">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">BLOGS</a></li>
                    <li><a href="">CONTACT US</a></li>
                </ul>
                </nav>
            </div>
        </div>
    );
}
export default Home2;