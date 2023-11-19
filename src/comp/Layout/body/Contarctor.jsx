import React from "react";
import prof from "../../../img/profile.png";

const Contractor =()=>{
    return(
        <div className="contract">
            <h3 style={{textAlign:"left", marginLeft:"50px"}}>BUILDER / CONTRACTORS <span style={{color:"#aa0000"}}> PROFILE</span></h3>
            <div>
                <div className="con-prof">
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>NIRVIGNA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>YUVA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>NJK INFRA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>ARMAR</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>ARKAR</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>GREENATIVE</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>NIRVIGNA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>YUVA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>NJK INFRA</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>ARMAR</h4>
                    </div>
                    <div className="profile">
                        <img src={prof} alt="" />
                        <h4>ARKAR</h4>
                    </div>
                   

                </div>
            </div>
            <button>SHOW MORE</button>
        </div>
    );
}
export default Contractor;