import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const blogCard = ({ title, img, goTo, author }) => {
  return (
    <>
      
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-2 gy-3  Blog_Card ">
          <div className="card">
            <img src={img} className="card-img-top img-fluid" alt={title} />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">Author : {author}</p>
              <Link to={`/Blog/${goTo}`}>
                  <ButtonAni widht={'100px'} height={'40px'} text={'Read'} 
                      background={'#8659c2'} color={'#d9aef4'}  borderRad={'18px'} />
              </Link>
              
            </div>
          </div>
        </div>
      
    </>
  );
};

export default blogCard;
