import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
AOS.init({
  offset: 200, // Offset (in pixels) from the top of the viewport where the animation starts
  duration: 800, // Duration of the animation (in milliseconds)
});
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);


