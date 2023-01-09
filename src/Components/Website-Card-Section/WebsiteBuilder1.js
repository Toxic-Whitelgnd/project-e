import React from "react";
import CardsEcommerse from "./CardsEcommerse";
import Data from "./EcommerseAPI";
import { useState } from "react";
import "./CardsStyle.css"
import BestAndSell from "../Best-Section/BestAndSell";


const WebsiteBuilder1 = () => {
  const [ecommerseData, setEcommerseData] = useState(Data);

  return (
    <>
      <div className="container WebsiteBuilder ">
        <h3 className="my-5 boxtitle">E-commerce</h3>
       
        <div className="row ECard g-2 ">
          <div className="best-product">
          {ecommerseData.map((val, index) => {
            return (
              <CardsEcommerse
                key={index}
                title={val.title}
                desc={val.desc}
                logo={val.logo}
                reviewLink={val.reviewLink}
                siteLink={val.siteLink}
                badge={val.badge}
                rating={val.rating}
              />
            );
          })}
          </div>
        </div>
        </div>
  
    </>
  );
};

export default WebsiteBuilder1;
