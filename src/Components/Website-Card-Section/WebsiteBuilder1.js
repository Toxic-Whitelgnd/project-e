import React from "react";
import CardsEcommerse from "./CardsEcommerse";
import Data from "./EcommerseAPI";
import { useState } from "react";

const WebsiteBuilder1 = () => {
  const [ecommerseData, setEcommerseData] = useState(Data);

  return (
    <>
      <div className="container WebsiteBuilder">
        {ecommerseData.map((val, index) => {
          return (
            <CardsEcommerse
              key={index}
              title={val.title}
              desc={val.desc}
              logo={val.logo}
              reviewLink={val.reviewLink}
              siteLink = {val.siteLink}
              badge={val.badge}

            />
          );
        })}
      </div>
    </>
  );
};

export default WebsiteBuilder1;
