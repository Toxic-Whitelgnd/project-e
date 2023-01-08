import React from "react";
import CardsEcommerse from "./CardsEcommerse";
import Data from "./EcommerseAPI";
import { useState } from "react";
import "./CardsStyle.css"

const WebsiteBuilder1 = () => {
  const [ecommerseData, setEcommerseData] = useState(Data);

  return (
    <>
      <div className="container WebsiteBuilder">
        <h1>ecommerce</h1>
        <div className="row ECard">
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
    </>
  );
};

export default WebsiteBuilder1;
