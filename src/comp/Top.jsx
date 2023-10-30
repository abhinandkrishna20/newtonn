import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignUp from './Singup';
import logo from '../img/logo1.png';
import Header from './Header';
const Top = () => {
const platinumBackgroundColor = '#E5E4E2';
const fontcolor = '#331155';
const mobileBreakpoint = 600; // Adjust this breakpoint as needed/* 632  291 */
return (
<div >
<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#aa0044", opacity:"0.9",top:"0px", left:"0px", maxHeight:"90px", }} >
<div className="container">
   <a className="navbar-brand" href="/newtonn">
   <img src={logo} className="d-inline-block align-top text-start" alt="NEWTONN" style={{width:"230px", height:"103px", position:"relative", left:"-80px", }}   />
   </a>
   <div className='row'>
   <div className='col-md-6'>

   
   <div className='d-flex  m-2' style={{float:"left"}}>
      <div class="input-group mr-1" style={{opacity:"0.8", width:"250px", float:"inherit"}}>
      <span class="input-group-text" id="basic-addon1">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018V.5Zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
         </svg>
      </span>
      <input type="text" class="form-control" placeholder="Location" aria-label="location" aria-describedby="basic-addon1" />
   </div>
   <div class="input-group ml-1 " style={{opacity:"0.8", width:"250px", float:"inherit", color:"inherit"}}>
   <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1" />
   <span class="input-group-text" id="basic-addon1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
   </span>
</div>
</div>
</div>

</div> 
<div>
   
      <a href="/newtonn/sign">
         {/* <Link to={
         <SignUp />
         // }> */}
         <Link to="/sign">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  style={{margin:"0 10 0 10"}} color='#ffffff' fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
         <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
         <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
         </svg></Link>
      </a>
      {/* </Link> */}
      <a href="" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color='#ffffff' fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      
      <sup style={{background:"#fff",color:"black",height:"10px", width:"10px", borderRadius:"50%",padding:"3px"}}>0</sup>
      </a>
   
</div>
</div>

</nav>
<div>
  {/* <Header /> */}
</div>
</div>
);
};
export default Top;