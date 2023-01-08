import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
          <NavBar/>
          {/* <Hero/> */}
          {/* <WebsiteBuilder/> */}
        <Routes>
          <Route  path='/Blog' element={<BlogPage/>} />
          <Route  path='/Blog/:slug' element={<BlogPostPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
