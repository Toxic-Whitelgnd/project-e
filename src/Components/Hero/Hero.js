import React from "react";
import "./Hero.css";
import cartimg from "../../assests/img4.png";

const Hero = () => {
  return (
    <>
      <div className="container Hero">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center align-items-center fw-bold">
            <h1 >
              The best <span className="purpleColor">ecommerce platforms</span>{" "}
              for a successful online store
            </h1>
          </div>
          <div className="col-lg-4">
            <img src={cartimg} alt="cartimg" className="img-fluid"  />
          </div>
          <div className="col-lg-6 subtitle">
            <p>
              <span class="badge ">
                Life's too short for bad software.
              </span>{" "}
              We're constantly using, reviewing and comparing all tools on the
              market, then report back everything, so you can make informed
              decisions and choose the absolute best solutions for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
