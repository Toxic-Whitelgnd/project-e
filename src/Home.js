import React from 'react'
import Hero from './Components/Hero/Hero';
import WebsiteBuilder from './Components/Website-Card-Section/WebsiteBuilder';
import LatestArticles from './Components/Article-Section/LatestArticles';
import MostPopular from './Components/Article-Section/MostPopular';
import Deals from './Components/Deals/Deals';

const Home = () => {
  return (
    <>
      <Hero/>
      <WebsiteBuilder/>
      <LatestArticles/>
      <MostPopular />
    </>
  )
}

export default Home
