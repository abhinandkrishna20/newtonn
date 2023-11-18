import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Autocomp=()=> {
  return (
    <div>
    <Autocomplete
      disablePortal
      id="filled-basic"
      options={top100Films}
      sx={{ width: 300 , marginRight:"10px"}}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  
    </div>
  );
}
export default Autocomp;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'Chennai', States: "Tamilnadu" },
    { label: 'Mumbai', state: 'Maharashtra' },
    { label: 'Delhi', state: 'Delhi' },
    { label: 'Bangalore', state: 'Karnataka' },
    { label: 'Hyderabad', state: 'Telangana' },
    { label: 'Chennai', state: 'Tamil Nadu' },
    { label: 'Kolkata', state: 'West Bengal' },
    { label: 'Pune', state: 'Maharashtra' },
    { label: 'Ahmedabad', state: 'Gujarat' },
    { label: 'Jaipur', state: 'Rajasthan' },
    { label: 'Lucknow', state: 'Uttar Pradesh' },
    { label: 'Patna', state: 'Bihar' },
    { label: 'Chandigarh', state: 'Chandigarh' },
    { label: 'Bhopal', state: 'Madhya Pradesh' },
    { label: 'Kochi', state: 'Kerala' },
    { label: 'Indore', state: 'Madhya Pradesh' },,


];
