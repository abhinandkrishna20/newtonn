import React from "react";
import Carousal from "./Carousal";
import Banner from "./Banner";
import br1 from '../../../img/cement/br1.jpg';
import br2 from '../../../img/cement/br2.jpg';
import br3 from '../../../img/cement/br3.jpg';
import br4 from '../../../img/cement/br4.jpg';
import './../../../Style/Mains.css'
import Items from "./Items";
const Cement =()=>{
    return(
        <div className="cement">
            <div  >
            <Banner />
            
            </div>
         <div className="brand" style={{marginTop:"3%"}}>
            <h3 style={{fontSize:"40px"}}>Brands</h3>
            <div className="brand-items " >
            <img src={br1} alt="" />
            <img src={br2} alt="" />
            <img src={br3} alt="" />
            <img src={br4} alt="" />


            </div>
         </div> 
            <div className="" style={{marginTop:"10px", marginTop:"5%"}}>
                <h3 style={{fontSize:"40px"}}>PRODUCT <span style={{ color: '#aa0000' }}> CATEGORIES</span> </h3>
                <Items />
            </div>

            <div className="adds" style={{display:"flex", alignContent:"center", margin:"30px", justifyContent:"space-between"}}>
            <div className="ads-item" style={{background:"#909090", height:"100px", width:"100%", margin:"10px"}}>
                <h4 style={{textAlign:"center",alignItems:"center", marginTop:"5%"}}>advertisement</h4>
            
            </div>
            <div className="ads-item" style={{background:"#909090", height:"100px", width:"100%",margin:"10px"}}>
            <h4 style={{textAlign:"center",alignItems:"center", marginTop:"5%"}}>advertisement</h4>
            
            </div>
            </div>

            <div>
            <h3 style={{fontSize:"40px"}}><span style={{ color: '#aa0000' }}>BLOG</span> </h3>
            <div className="blogs" style={{display:"flex" ,justifyContent:"center"}}>

                <div style={{margin:"20px"}}>
                    <div style={{width:"200px", height:"180px", background:"#bababa"}}></div>
                    <p style={{textAlign:"center"}}>
                        <a href="">Read more</a>
                         </p>
                </div>
                <div style={{margin:"20px"}}>
                    <div style={{width:"200px", height:"180px", background:"#bababa"}}></div>
                    <p style={{textAlign:"center"}}>
                        <a href="">Read more</a>
                         </p>
                </div>
                <div style={{margin:"20px"}}>
                    <div style={{width:"200px", height:"180px", background:"#bababa"}}></div>
                    <p style={{textAlign:"center"}}>
                        <a href="">Read more</a>
                         </p>
                </div>
                <div style={{margin:"20px"}}>
                    <div style={{width:"200px", height:"180px", background:"#bababa"}}></div>
                    <p style={{textAlign:"center"}}>
                        <a href="">Read more</a>
                         </p>
                </div>
                <div style={{margin:"20px"}}>
                    <div style={{width:"200px", height:"180px", background:"#bababa"}}></div>
                    <p style={{textAlign:"center"}}>
                        <a href="">Read more</a>
                         </p>
                </div>

            </div>
            </div>

        </div>
    );
}
export default Cement;