import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Client } from "../../lib/client";
import { FiEye } from "react-icons/fi";
import ButtonAni from "./../button-animation/Button-ani";

const Footer = () => {
  const [Blogpost, setBlogpost] = useState([]);
  useEffect(() => {
    Client.fetch(
      `*[_type == "post"] {
            title,
            slug,
            body,
            publishedAt,
            viewscount,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt,
            },
            "name": author -> name,
          } | order(viewscount desc)`
    )
      .then((data) => {
        setBlogpost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="footer">
      <div className="container ">
        <div className="row p-2">
          <div className="col-lg-2">
            <img src="" alt="logo and name" />
          </div>
          <div className="col">
            <ul>
              <li>
                {" "}
                <Link to="/about">About</Link>{" "}
              </li>
              <li>
                <Link to="/contactus">contact us</Link>
              </li>
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
              <li><Link to="/Blog">blog</Link></li>
              <li><Link to="/Review">reviews</Link></li>
              <li>Disclosure</li>
              <li>Cookie Policy</li>
              <li>credits</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul>
              <h6> top posts</h6>
              {Blogpost.slice(0, 4).map((story) => (
                <>
                  <li className="row">
                    <div className="col-lg-10">
                      <Link
                        className="card-title"
                        to={`/Blog/${story.slug.current}`}
                      >
                        {story.title}
                      </Link>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
