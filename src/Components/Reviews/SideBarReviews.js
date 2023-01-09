import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const SideBarReviews = () => {
  const [revposts, setRevposts] = useState([]);
  useEffect(() => {
    Client.fetch(
      `*[_type == "postReview"] {
                title,
                slug,
                body,
                rating,
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
        setRevposts(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="sideRev">
      <h5 className="my-5">Reviews</h5>
      {revposts[0] && (
        <div className="row">
          {revposts.map((story) => (
            <>
              <Link to={`/Review/${story.slug}`}>
                <h6>{story.title}</h6>
              </Link>
              <div className="row">
                <div className="col">
                  <p>{story.rating}⭐</p>
                </div>
                <div className="col">
                  <p>
                    {story.publishedAt && (
                      <>
                        {format(new Date(story.publishedAt), " MMMM dd , yyyy")}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarReviews;
