import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ title, img, goTo, author , rating }) => {
  return (
    <>
      
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-2 gy-3  Blog_Card ">
          <div className="card">
            <img src={img} className="card-img-top img-fluid" alt={title} />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">Author : {author}</p>
              <p className="card-text">Rating ⭐: {rating}</p>
              <Link to={`/Review/${goTo}`} className="btn btn-primary">
                know more
              </Link>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ReviewCard;
