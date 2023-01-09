import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import ReviewCard from "./reviewcard";
import SideBarReviews from "./SideBarReviews";

const ReviewPages = () => {
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
    <div className="container  mt-2">
      <div className="row g-5">
        <div className="col-lg-8 ">
          {revposts[0] && (
            <div className="row">
              {revposts.map((story) => (
                <ReviewCard
                  key={story.slug.current}
                  title={story.title}
                  img={story.mainImage.asset.url}
                  goTo={story.slug.current}
                  author={story.name}
                  rating={story.rating}
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
  );
};

export default ReviewPages;
