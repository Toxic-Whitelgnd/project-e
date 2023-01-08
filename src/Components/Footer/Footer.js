import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-2">
            <img src="" alt="logo and name" />
          </div>
          <div className="col">
            
            <ul>
              <li>About</li>
              <li>contact us</li>
              <li>site map</li>
              <li>RSS feed</li>
              <li>terms of use</li>
            </ul>
          </div>
          <div className="col">
           
            <ul>
              <li>Facebook</li>
              <li>twitter</li>
              <li>linkedin</li>
              <li>youtube</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="col">
            
            <ul>
              <li>blog</li>
              <li>hub</li>
              <li>Advertising</li>
              <li>Disclosure</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="col-lg-5">top posts</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
