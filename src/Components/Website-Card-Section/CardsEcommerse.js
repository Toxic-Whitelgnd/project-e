import React from "react";
import ButtonAni from '../button-animation/Button-ani';

const CardsEcommerse = (props) => {
  return (
    <>
      <div className="col-lg-3 position-relative">
        <div class="card pt-5 ">
          <div className="topBadge">{props.badge}</div>
          <div className="row">
            <div className="col-lg-4 ml-2">
              <img
                src={props.logo}
                className="card-img-custom img-fluid"
                alt="..."
                height="65px"
              />
            </div>
            <div className="col-lg-8">
              <h5 class="card-title">{props.title}</h5>
              <h6>Rating:{props.rating}</h6>
              <a href={props.reviewLink}>Read Full Review</a>
            </div>
          </div>

          <div class="card-body ">
            <p class="card-text">
              {props.desc.slice(0,55)}...
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <a href={props.siteLink}>
              <ButtonAni widht={'95px'} height={'45px'} text={'Visit Site'} 
                      background={'#7e57c2'} color={'#000'} hoverbackground={'#8659c2'} hovercolor={'d9aef4'} borderRad={'15px'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsEcommerse;
