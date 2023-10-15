import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomp from './Autocom';

const locationOptions = [
  'Chennai',
  'Madurai',
  'Bangalore',
  // Add more location options here
];

const Top = () => {
  const platinumBackgroundColor = '#E5E4E2';
  const fontcolor = '#331155';
  const mobileBreakpoint = 600; // Adjust this breakpoint as needed

  return (
    <AppBar position="static" style={{ background: platinumBackgroundColor, color: fontcolor, fontWeight: 800,  }}>
      <Toolbar>
        <Typography variant="h6" component="div" >
          NEWTONN
        </Typography>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginRight:"auto"}}>
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <Autocomp />

          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton color="inherit" >
            <SearchIcon />
          </IconButton>
        </div>

        {/* Display login icon only on screens larger than the mobile breakpoint */}
        {window.innerWidth > mobileBreakpoint && (
          <IconButton color="inherit">
            <Badge badgeContent={0} color="error">
              <AccountCircle />
            </Badge>
           
          </IconButton>
        )}
        <div>
          Join as Pro
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Top;
