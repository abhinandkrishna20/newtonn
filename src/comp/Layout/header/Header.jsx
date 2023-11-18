import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='align-items-right'>
      <div className='justify-content-center align-items-center   ' style={{ boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.8)" }}>
      <nav className="  navbar navbar-expand-lg " style={{ background: "#aa0044", color: "#ffaaff" }}>
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
        <div className="collapse navbar-collapse" style={{ color: "#ffffff" }} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link"  style={{ color: 'white',  }}>
              <Link to="/"  style={{ color: 'white', textDecoration:"none"  }}>Home</Link>
                
              </a>
            </li>
            <li className="nav-item"> 
              <a className="nav-link"  style={{ color: 'white',  }}>
              <Link to="/about"  style={{ color: 'white', textDecoration:"none"  }}>About</Link>
                
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link"  style={{ color: 'white',  }}>
              <Link to="/contact"  style={{ color: 'white', textDecoration:"none"  }}>Contact</Link>
                
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
                style={{ color: 'white' }}
              >
                Services
              </a>
              <div className="dropdown-menu">
                <div className="d-flex">
                  <div className="col">
                    <h6 className="dropdown-header">Interior Design</h6>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                    Classic Design 
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                    Indian Style
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                    Western Interior
                    </a>
                    {/* Add more dropdown items as needed */}
                  </div>
                  <div className="col">
                    <h6 className="dropdown-header">Construcs Works</h6>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Electical Work
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Plumbing Work
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Carpenter Work
                    </a>
                    {/* Add more dropdown items as needed */}
                  </div>
                  <div className="col">
                    <h6 className="dropdown-header">Home Services</h6>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Kitchen Cleaning
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Bathroom Cleaning
                    </a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>
                      Full House Cleaing
                    </a>
                    {/* Add more dropdown items as needed */}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {/* Your additional content */}
      </div>
      </div>
    </div>
  );
}

export default Header;
