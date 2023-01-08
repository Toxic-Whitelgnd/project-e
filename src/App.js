import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"
import WebsiteBuilder from "./Components/Website-Card-Section/WebsiteBuilder"
import BlogPage from './Components/Blog/BlogPage';
import BlogPostPage from './Components/Blog/BlogPostPage';
import ReviewPages from './Components/Reviews/ReviewPages';
import ReviewPostPage from './Components/Reviews/ReviewPostPage';

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
          <Route path='/Review' element={<ReviewPages />} />
          <Route path='/Review/:slug' element={<ReviewPostPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
