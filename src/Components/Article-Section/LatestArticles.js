import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Articles.css"

const LatestArticles = () => {
  const [Blogpost, setBlogpost] = useState([]);

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
    <div className="LatestArticles my-3">
      <div className=" container py-5">
        <h2 className="fw-bold">Latest <span className="purpleColor ">articles</span></h2>
        {Blogpost[0] && (
          <div className="row p-5">
            {Blogpost.map((story) => (
              <>
                <div className="row">
                  <div className="col-lg-10">
                    <h5 className="card-title ">{story.title}</h5>
                    <p className="card-desc">{story.body[0].children[0].text.slice(0, 100)}...</p>
                    <p className="publishedAt">
                      {story.publishedAt && (
                        <>
                          {format(new Date(story.publishedAt), " MMMM dd , yyyy")}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <Link
                      to={`/Blog/${story.slug.current}`}
                      className="Articlebtn"
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestArticles;
