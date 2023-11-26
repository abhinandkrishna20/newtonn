import React from "react";
import '../../../Style/mainstyle.css'
import logo from '../../../img/logo3.jpg';
import { Link } from "react-router-dom";

const Header1 =()=>{
    return(
        <div>
            <div  id="top" className="top" >
                <ul style={{display:"flex", padding:"10px"}}>
                    
                    <li><a > <Link to="/login">Login/Signup</Link> </a></li>
                    <li><a href="#">Register as a Professional</a></li>
                    <li><a href="#">
                        Refer and Earn</a>
                    </li>
                </ul>
            </div>


            <div className="nav" style={{display:"flex" ,justifyContent: "space-between;", alignItems:"center"}}>
                    <div className="logo"style={{height:"70px", margin:"5px", }}>
                    <img src={logo} alt="" height="60px" style={{margin:"2px"}}/>
                </div>
                <div className="navitems" style={{padding:"10px 0px", flexDirection:"row", right:"10px" }}>
                <nav style={{}}>
                    <ul >
                        <li><a ><Link to="/"> HOME</Link></a></li>
                        <li><a ><Link to="/">SERVICES</Link></a></li>
                        <li><a ><Link to="/about">ABOUT</Link></a></li>
                        <li><a ><Link to="/">BLOG</Link></a></li>
                        <li><a ><Link to="/contact">CONTACT US</Link></a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    );
}
export default Header1;