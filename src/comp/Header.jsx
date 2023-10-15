import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const Header =()=>{
    return (
<div className='pr-2'>
<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      {/* <a className="navbar-brand" href="#">
        Your Site
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <div className="d-flex">
                <div className="col">
                  <h6 className="dropdown-header">Column 1</h6>
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                  {/* Add more dropdown items as needed */}
                </div>
                <div className="col">
                  <h6 className="dropdown-header">Column 2</h6>
                  <a className="dropdown-item" href="#">
                    Item 5
                  </a>
                  {/* Add more dropdown items as needed */}
                </div>
                <div className="col">
                  <h6 className="dropdown-header">Column 3</h6>
                  <a className="dropdown-item" href="#">
                    Item 9
                  </a>
                  {/* Add more dropdown items as needed */}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className='ml-auto'>
        <TextField
          label="Search"
          size="small"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </div>
      </div>
    </nav>
</div>
);
}
export default Header;