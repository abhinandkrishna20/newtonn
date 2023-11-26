import React, { useState } from 'react';
import prof from '../../../img/profile.png';
import cm1 from '../../../img/cement/cm1.jpg';
import cm2 from '../../../img/cement/cm2.jpg';
import cm3 from '../../../img/cement/cm3.jpg';
import cm4 from '../../../img/cement/cm4.jpg';
import cm5 from '../../../img/cement/cm5.jpg';

const Items = () => {
  const profiles = [
    {
        "name":"JSW Cement",
        "img":cm1
    },{
        "name":"UltraTech Cement",
        "img":cm2
    },
    {
        "name":"Ambuja Cement",
        "img":cm3
    },
    {
        "name":"ACC Cement",
        "img":cm4
    },
    {
        "name":"Dalmia Cement",
        "img":cm5
    },
  ];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const visibleProfiles = profiles.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleMoveLeft = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleMoveRight = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(profiles.length / itemsPerPage) - 1));
  };

  return (
    <div className="contract" >
        <div>
      <h3 style={{ textAlign: 'left', marginLeft: '50px' }}>
        ORDINARY PORTLAND CEMENT (OPC) - 53
      </h3>
      <div>
        <div className="con-prof" style={{width:"100%"}}>
            <div className='but'>
            <button onClick={handleMoveLeft} style={{ background:"#999999", textAlign:"center", justifyContent:"center",  color:"#090909",width:"10px", top:"10px", marginRight:"10px"}} >&lt;</button>
            </div>
          
          {visibleProfiles.map((profile, index) => (
            <div key={index} className="profile" style={{marginRight:"10px", padding:"10px"}}>
              <img src={profile.img} alt="" />
              <h4>{profile.name}</h4>
            </div>
          ))}
          <div className='but'>
          <button onClick={handleMoveRight} style={{ background:"#999999", textAlign:"center",  color:"#090909",width:"10px", top:"10px", marginLeft:"10px"}} > &gt;</button>
        
          </div>
          </div>
      </div>
      {/* <button>SHOW MORE</button> */}
      </div>

      <div style={{paddingTop:"3%"}}>
      <h3 style={{ textAlign: 'left', marginLeft: '50px' }}>
      PORTLAND POZZOLANA CEMENT (PPC)
      </h3>
      <div>
        <div className="con-prof" style={{width:"100%"}}>
            <div className='but'>
            <button onClick={handleMoveLeft} style={{ background:"#999999", textAlign:"center", justifyContent:"center",  color:"#090909",width:"10px", top:"10px", marginRight:"10px"}} >&lt;</button>
            </div>
          
          {visibleProfiles.map((profile, index) => (
            <div key={index} className="profile" style={{marginRight:"10px", padding:"10px"}}>
              <img src={profile.img} alt="" />
              <h4>{profile.name}</h4>
            </div>
          ))}
          <div className='but'>
          <button onClick={handleMoveRight} style={{ background:"#999999", textAlign:"center",  color:"#090909",width:"10px", top:"10px", marginLeft:"10px"}} > &gt;</button>
        
          </div>
          </div>
      </div>
      {/* <button>SHOW MORE</button> */}
      </div>

      <div style={{paddingTop:"3%"}}>
      <h3 style={{ textAlign: 'left', marginLeft: '50px' }}>
      PORTLAND SLAG CEMENT (PSC)
      </h3>
      <div>
        <div className="con-prof" style={{width:"100%"}}>
            <div className='but'>
            <button onClick={handleMoveLeft} style={{ background:"#999999", textAlign:"center", justifyContent:"center",  color:"#090909",width:"10px", top:"10px", marginRight:"10px"}} >&lt;</button>
            </div>
          
          {visibleProfiles.map((profile, index) => (
            <div key={index} className="profile" style={{marginRight:"10px", padding:"10px"}}>
              <img src={profile.img} alt="" />
              <h4>{profile.name}</h4>
            </div>
          ))}
          <div className='but'>
          <button onClick={handleMoveRight} style={{ background:"#999999", textAlign:"center",  color:"#090909",width:"10px", top:"10px", marginLeft:"10px"}} > &gt;</button>
        
          </div>
          </div>
      </div>
      {/* <button>SHOW MORE</button> */}
      </div>

    </div>
  );
};

export default Items;
