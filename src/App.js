import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';
import  BlogPage from './Components/Blog/BlogPage';

function App() {
  return (
    <>
      <Router>
          <NavBar/>
          <Hero/>
        <Routes>
          <Route path='/Blog' element={<BlogPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
