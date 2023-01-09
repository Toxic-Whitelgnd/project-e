import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import "../Blog/BlogPage.css";
import BlogCard from "./blogCard";
import { motion } from "framer-motion";
import ButtonAni from "../button-animation/Button-ani";
import SideBarReviews from './../Reviews/SideBarReviews';

const BlogPage = () => {
  const [Blogpost, setBlogpost] = useState([]);
  const scrolltoview = () => {
    var element = document.getElementById("blogpage");
    if (element) {
      element.scrollIntoView();
    }
  };

  useEffect(() => {
    scrolltoview();
  }, []);
  useEffect(() => {
    Client.fetch(
      `*[_type == "post"] {
                title,
                slug,
                body,
                publishedAt,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
                "name": author -> name,
              } | order(publishedAt desc)`
    )
      .then((data) => {
        setBlogpost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <div className="container  mt-2">
        <div className="row g-5">
          <div className="col-lg-8">
            {Blogpost[0] && (
              <div className="row ">
                {Blogpost.map((story) => (
                  <BlogCard
                    key={story.slug.current}
                    title={story.title}
                    img={story.mainImage.asset.url}
                    goTo={story.slug.current}
                    author={story.name}
                    publish={story.publishedAt}
                    body={story.body}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="col-lg-4 ">
            <SideBarReviews />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BlogPage;
