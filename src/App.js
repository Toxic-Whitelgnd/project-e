import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';
import BlogPage from './Components/Blog/BlogPage';
import Footer from './Components/Footer/Footer';
import BlogPostPage from './Components/Blog/BlogPostPage';
import WebsiteBuilder from './Components/Website-Card-Section/WebsiteBuilder';
import ReviewPages from './Components/Reviews/ReviewPages';
import ReviewPostPage from './Components/Reviews/ReviewPostPage';
import LatestArticles from './Components/Article-Section/LatestArticles';
import Home from './Home';
import Resource from './Components/Resources/Resource';


function App() {
  return (
    <>
      <Router>
          <NavBar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route  path='/Blog' element={<BlogPage/>} />
          <Route  path='/Resource' element={<Resource/>} />
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
