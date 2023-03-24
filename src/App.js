import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/Navbar";
import BlogPage from "./Components/Blog/BlogPage";
import Footer from "./Components/Footer/Footer";
import BlogPostPage from "./Components/Blog/BlogPostPage";
import WebsiteBuilder from "./Components/Website-Card-Section/WebsiteBuilder";
import ReviewPages from "./Components/Reviews/ReviewPages";
import ReviewPostPage from "./Components/Reviews/ReviewPostPage";
import LatestArticles from "./Components/Article-Section/LatestArticles";
import Home from "./Home";
import Resource from "./Components/Resources/Resource";

import Deals from "./Components/Deals/Deals";

import TopEcoms from "./Components/topEcoms/TopEcoms";
import Contact from "./ContactUs/Contact";
import Comparision from "./Components/Comparision/Comparision";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Resource" element={<Resource />} />
          <Route path="/topecommerse" element={<TopEcoms />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/Blog/:slug" element={<BlogPostPage />} />
          <Route path="/Review" element={<ReviewPages />} />
          <Route path="/Review/:slug" element={<ReviewPostPage />} />

          <Route path="/Deals" element={<Deals />} />
          <Route path="/Comparision" element={<Comparision />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
