import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';
import WebsiteBuilder from './Components/Website-Card-Section/WebsiteBuilder';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Router>
          <NavBar/>
          <Hero/>
          <WebsiteBuilder/>
        <Routes>
          <Route />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
