import React from "react";
import BestAndSell from "../Best-Section/BestAndSell";
import WebsiteBuilder1 from "./WebsiteBuilder1";
import WebsiteBuilder2 from "./WebsiteBuilder2";

const WebsiteBuilder = () => {
  return (
    <>
      <div className="my-3">
        <WebsiteBuilder1 />
        <WebsiteBuilder2 />
        <BestAndSell />
      </div>
    </>
  );
};

export default WebsiteBuilder;
