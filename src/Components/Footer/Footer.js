import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="row p-2">
          <div className="col-lg-2">
            <img src="" alt="logo and name" />
          </div>
          <div className="col">
            <ul>
              <li> <Link to="/about">About</Link> </li>
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
          <div className="col right-border">
            <ul>
              <li>blog</li>
              <li>hub</li>
              <li>Advertising</li>
              <li>Disclosure</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="col-lg-5">
           
            <ul>
              <h6> top posts</h6>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                repellendus?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
