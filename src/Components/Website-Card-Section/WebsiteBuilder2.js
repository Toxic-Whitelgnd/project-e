import React from 'react'
import Data from './BuilderApi';
import { useState } from 'react';
import CardsBuilder from './CardsBuilder';



const WebsiteBuilder2 = () => {
  const [builderData, setBuilderData] = useState(Data);
  return (
    <>
      <div className="container WebsiteBuilder">
        <h3>website builder</h3>
        <div className="row ECard g-2">
          {builderData.map((val, index) => {
            return (
              <CardsBuilder
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
  )
}

export default WebsiteBuilder2
