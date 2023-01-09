import React,{useEffect} from "react";
import "./Hero.css";
import cartimg from "../../assests/cart.png";

const Hero = () => {
  return (
    <>
      <div className="container Hero">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column justify-content-center fw-bold">
            <h1 className="pt-5">
              The best <span className="purpleColor">ecommerce platforms</span>{" "}
              for a successful online store
            </h1>
            <div className=" subtitle pt-5">
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
          <div className="col-lg-4">
            <img src={cartimg} alt="cartimg" className="img-fluid"  />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero;
