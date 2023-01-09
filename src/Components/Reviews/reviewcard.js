import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import ButtonAni from "./../button-animation/Button-ani";

const ReviewCard = ({ title, img, goTo, author, rating, publish, body }) => {
  return (
    <>
      <div className="card Blog_Card">
        <div className="row my-3">
          <div className="col-lg-1">
            <i className="Author-icon">
              <FontAwesomeIcon icon={faUser} />
            </i>
          </div>
          <div className="col">
            <p className="card-text">{author}</p>
          </div>
          <div className="col-lg-1">
            <i className="Calender-icon">
              <FontAwesomeIcon icon={faCalendar} />
            </i>
          </div>
          <div className="col">
            <p>
              {publish && <>{format(new Date(publish), "MMMM dd , yyyy")}</>}
            </p>
          </div>
        </div>
        <h4 className="card-title">{title}</h4>
        <img src={img} className="card-img-top img-fluid" alt={title} />

        <p className="card-text">Rating : {rating}⭐</p>

        <p className="card-desc">
          {body[0].children[0].text.slice(0, 250)}....
        </p>

        <p>{body[1].children[0].text.slice(0, 250)}....</p>

        <div className="card-body">
          <Link to={`/Review/${goTo}`}>
            <ButtonAni
              widht={"100px"}
              height={"40px"}
              text={"Read"}
              background={"#8659c2"}
              color={"#d9aef4"}
              borderRad={"18px"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
