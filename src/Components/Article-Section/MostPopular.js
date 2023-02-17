import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Articles.css"
import ButtonAni from '../button-animation/Button-ani';
import {FiEye} from "react-icons/fi"

const MostPopular = () => {
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
    <div>
      <div className="container">
      {Blogpost.map((story) => (
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
                        <div className="col d-flex align-items-center">
                          <FiEye/> <span className="vie ">{story.viewscount}k views</span>
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
    </div>
  )
}

export default MostPopular
