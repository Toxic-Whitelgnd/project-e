import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Articles.css"
import ButtonAni from '../button-animation/Button-ani';
import {FiEye} from "react-icons/fi"

const LatestArticles = () => {
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
          } | order(publishedAt desc)`
    )
      .then((data) => {
        setBlogpost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="LatestArticles mt-3">
      <div className=" container py-5">
        <h2 className="fw-bold">Latest <span className="purpleColor ">articles</span></h2>
        {Blogpost[0] && (
          <div className="row p-5 la">
            {Blogpost.slice(0,4).map((story) => (
              <>
                <div className="row">
                  <div className="col-lg-10">
                    <h5 className="card-title ">{story.title}</h5>
                    <p className="card-desc">{story.body[0].children[0].text.slice(0, 100)}...</p>
                    <p className="publishedAt row ">
                      {story.publishedAt && (
                        <>
                        <div className="col">
                          {format(new Date(story.publishedAt), " MMMM dd , yyyy")} 
                        </div>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <Link
                      to={`/Blog/${story.slug.current}`}
                      // className="Articlebtn"
                    >
                      <ButtonAni widht={'100px'} height={'50px'} text={'Read'} 
                      background={'#d9aef4'} color={'#8659c2'}  borderRad={'50px'} />
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
