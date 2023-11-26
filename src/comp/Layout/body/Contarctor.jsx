import React, { useState } from 'react';
import prof from '../../../img/profile.png';

const Contractor = () => {
  const profiles = ['NIRVIGNA', 'YUVA', 'NJK INFRA', 'ARMAR', 'ARKAR', 'GREENATIVE' ,'NIRVIGNA', 'YUVA', 'NJK INFRA', 'ARMAR', 'ARKAR', 'GREENATIVE'];
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
    <div className="contract">
      <h3 style={{ textAlign: 'left', marginLeft: '50px' }}>
        BUILDER / CONTRACTORS <span style={{ color: '#aa0000' }}> PROFILE</span>
      </h3>
      <div>
        <div className="con-prof" style={{}}>
            <div className='but'>
            <button onClick={handleMoveLeft} style={{ background:"#999999", textAlign:"center", justifyContent:"center",  color:"#090909",width:"10px", top:"10px", marginRight:"10px"}} >&lt;</button>
            </div>
          
          {visibleProfiles.map((profile, index) => (
            <div key={index} className="profile">
              <img src={prof} alt="" />
              <h4>{profile}</h4>
            </div>
          ))}
          <div className='but'>
          <button onClick={handleMoveRight} style={{ background:"#999999", textAlign:"center",  color:"#090909",width:"10px", top:"10px", marginLeft:"10px"}} > &gt;</button>
        
          </div>
          </div>
      </div>
      <button>SHOW MORE</button>
    </div>
  );
};

export default Contractor;
