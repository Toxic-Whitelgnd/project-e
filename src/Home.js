import React from 'react'
import Hero from './Components/Hero/Hero';
import WebsiteBuilder from './Components/Website-Card-Section/WebsiteBuilder';
import LatestArticles from './Components/Article-Section/LatestArticles';

const Home = () => {
  return (
    <>
      <Hero/>
      <WebsiteBuilder/>
      <LatestArticles/>
      
    </>
  )
}

export default Home
