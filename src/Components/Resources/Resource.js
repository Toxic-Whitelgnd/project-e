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
            body,
            description,
            id,
            link,
          } `
    )
      .then((data) => {
        setResourcepost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Fantastic Resources & Tools for Ecommerce (Jan 2023)</h1>
      {
        Resourcepost[0] && (
          <div>
            {
              Resourcepost.map((story)=>(
                <>
                  <h1>{story.description}</h1>
                </>
              ))
            }
          </div>
        )
      }
    </>
  );
};

export default Resource;
