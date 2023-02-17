import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ButtonAni from "./../button-animation/Button-ani";
import "./Resource.css"

const Resource = () => {
  const [Resourcepost, setResourcepost] = useState([]);
  useEffect(() => {
    Client.fetch(
      `*[_type == "respost"] {
            title,
            title2,
            body,
            description,
            id,
            link,
            "Rtype":title -> resourcestype,
          }| order(id desc) `
    )
      .then((data) => {
        setResourcepost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  const unique = [...new Set(Resourcepost.map((item) => item.Rtype))];

 


  return (
    <>
    <div className="container">
      <h1>Fantastic Resources & Tools for Ecommerce (Jan 2023)</h1>
      {Resourcepost[0] && (
        <div>
          {unique.map((head) => (
            <>
              <h3 className="head" >{head}</h3>
              {Resourcepost.map((story) => 
              story.Rtype === head &&
              (
                <div>
                  <p className="descs"><a href={story.link}>{story.title2}</a> :{story.description}</p>
                </div>
              ))}
            </>
          ))}
        </div>
      )}
      </div>
    </>
  );
};

export default Resource;
