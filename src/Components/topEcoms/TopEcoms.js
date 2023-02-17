import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {FiEye} from "react-icons/fi"
import ButtonAni from './../button-animation/Button-ani';
import "./Tops.css"

const TopEcoms = () => {
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
    <div className="Tops my-3">
      <div className=" container py-5">
        <h2 className="fw-bold">Top Ecommerse <span className="purpleColor ">articles</span></h2>
        {Blogpost[0] && (
          <div className="row p-5">
            {Blogpost.map((story) => (
              <>
                <div className="row">
                  <div className="col-lg-10">
                    <h5 className="card-title ">{story.title}</h5>
                    <p className="card-desc">{story.body[0].children[0].text.slice(0, 900)}...</p>
                    <p className="card-desc">{story.body[1].children[0].text.slice(0, 900)}...</p>
                    <p className="card-desc">{story.body[2].children[0].text.slice(0, 900)}...</p>
                    <p className="publishedAt row ">
                      {story.publishedAt && (
                        <>
                        <div className="col">
                       <i><FiEye/> </i> <span className="vie ">{story.viewscount}k views</span>
                        </div>
                        {/* <div className="col d-flex align-items-center">
                          <FiEye/> <span className="vie ">{story.viewscount}k views</span>
                        </div> */}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <Link
                      to={`/Blog/${story.slug.current}`}
                      // className="Articlebtn"
                    >
                      <ButtonAni widht={'190px'} height={'60px'} text={'Continue Reading'} 
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
  )
}

export default TopEcoms


