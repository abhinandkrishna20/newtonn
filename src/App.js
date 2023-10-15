import logo from './logo.svg';
import './App.css';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Carousal from './comp/Carousal';
import Footer2 from './comp/Footer2';
import Material from './comp/Material';
import Top from './comp/Top';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Login } from '@mui/icons-material';
import Signup from './comp/Singup';
import Design from './comp/Design';
function App() {
  return (
    <div className="App">
      <Top />
      {/* <Header /> */}
      <Carousal />
      <Material />
      <Design />
      {/* <Signup /> */}
      <Footer />
      {/* <Footer2 /> */}
      
    </div>
  );
}


export default App;
