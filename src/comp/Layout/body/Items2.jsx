import React, { useState } from 'react';
import prof from '../../../img/profile.png';
import st1 from '../../../img/steal/st1.jpg';
import st2 from '../../../img/steal/st2.jpg';
import st3 from '../../../img/steal/st3.jpg';
import st4 from '../../../img/steal/st4.jpg';
import st5 from '../../../img/steal/st5.jpg';

const Items2 = () => {
  const profiles = [
    {
        "name":"JSW Cement",
        "img":st1
    },{
        "name":"UltraTech Cement",
        "img":st2
    },
    {
        "name":"Ambuja Cement",
        "img":st3
    },
    {
        "name":"ACC Cement",
        "img":st4
    },
    {
        "name":"Dalmia Cement",
        "img":st5
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
      FE - 500 TMT BAR
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
      FE - 550 TMT BAR
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
      FE - 600 TMT BAR
      </h3>
      <div>
        <div className="con-prof" style={{width:"100%"}}>
            <div className='but'>
            <button onClick={handleMoveLeft} style={{ background:"#999999", textAlign:"center", justifyContent:"center",  color:"#090909",width:"10px", top:"10px", marginRight:"10px"}} >&lt;</button>
            </div>
          
          {visibleProfiles.map((profile, index) => (
            <div key={index} className="profile" style={{marginRight:"10px", padding:"10px" }}>
              <img src={profile.img} alt=""  />
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

export default Items2;
