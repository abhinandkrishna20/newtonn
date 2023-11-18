import React from "react";  
import mat1 from "../img/material/mat/1.jpg";

const Addcart =()=>{
    return(
        <div className="container" style={{ height:"80vh", width:"80%" ,}}>
            <div className="row">

            <div style={{display:"flex" , border:"solid #aabbaa", height:"500px", margin:"20px", justifyContent:"left"}}>
                <div style={{display:"flex", flexDirection:"column" ,margin:"20px"}}>
                    <img src={mat1} alt="" style={{height:"40px", width:"40px", borderRadius:"5px" , margin:"5px"}} />
                    <img src={mat1} alt="" style={{height:"40px", width:"40px", borderRadius:"5px" , margin:"5px"}} />
                    <img src={mat1} alt="" style={{height:"40px", width:"40px", borderRadius:"5px" , margin:"5px"}} />
                    <img src={mat1} alt="" style={{height:"40px", width:"40px", borderRadius:"5px" , margin:"5px"}} />
                    <img src={mat1} alt="" style={{height:"40px", width:"40px", borderRadius:"5px" , margin:"5px"}} />
                </div>
                <div style={{padding:"10px"}}>
                    <img src={mat1} alt="" style={{height:"400px", width:"400px", border:"solid #aaa7aa", borderRadius:"10px" }} />
                </div>
                <div style={{margin:"20px"}}>
                    <h4>Maharashtra Red Brick </h4>
                    <p>
                    One Brick at a Time! Discover Our Premium Bricks for Sale - Unleash the Elegance of Your Projects with Our Handpicked Selection. Built to Last, Priced for Success - Your Vision, Our Bricks!
                    </p>
                    <h5 style={{color:"#778888"}}>Availabilty :<span style={{color:"#00aa00"}}>InStack</span></h5>
                    <div>
                        Qty: <div style={{width:"100px", display:"flex", alignItems:"center"}}> <span className="fa fa-plus" style={{border:"solid #aabbaa 2px", padding:"4px", background:"#ddffdd"}}></span>
                            <input type="text" size={8} style={{background:"#fffeff", border:" solid #aabbaa 2px", textAlign:"center"} } value={15000} /><span className="fa fa-minus" style={{border:"solid #aabbaa 2px", padding:"4px", background:"#ffdddd"}}></span>
                            
                        </div><span><p style={{fontSize:"12px", color:"#aa0000"}}>Minimum Order Qty : 15000</p></span>
                    </div>
                    <div style={{display:"block"}}>
                        Size:
                        <div style={{margin:"7px", display:"flex", color:"#aaaaaa" }}>
                            
                            <a href="" style={{textDecoration:"none", padding:"10px", border:"solid 2px #aaaaaa", margin:"10px", borderRadius:"5px", color:"#aaaaaa" }}>19x19x10</a>
                            <a href="" style={{textDecoration:"none", padding:"10px", border:"solid 2px #aaaaaa", margin:"10px", borderRadius:"5px", color:"#aaaaaa" }}>16x16x10</a>
                            <a href="" style={{textDecoration:"none", padding:"10px", border:"solid 2px #aaaaaa", margin:"10px", borderRadius:"5px" ,color:"#aaaaaa" }}>13x13x10</a>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <div style={{border:"solid #faff00", padding:"5px 10px", width:"100%", margin:"10px", borderRadius:"5px", textAlign:"center"}}>Add to Cart</div>
                        <div style={{border:"solid #00aaaa", padding:"5px 10px", width:"100%",  margin:"10px" , borderRadius:"5px" , textAlign:"center"}}>Buy Now</div>

                    </div>
                </div>

            </div>
            </div>

        </div>
    );
}
export default Addcart;