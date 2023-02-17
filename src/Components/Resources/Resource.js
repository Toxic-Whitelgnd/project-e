import React, { useState, useEffect } from "react";
import { Client } from "../../lib/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ButtonAni from "./../button-animation/Button-ani";

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
      <h1>Fantastic Resources & Tools for Ecommerce (Jan 2023)</h1>
      {Resourcepost[0] && (
        <div>
          {unique.map((head) => (
            <>
              <h4>{head}</h4>
              {Resourcepost.map((story) => 
              story.Rtype === head &&
              (
                <div>
                  <h5><a href={story.link}>{story.title2}</a> :{story.description}</h5>
                </div>
              ))}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Resource;
