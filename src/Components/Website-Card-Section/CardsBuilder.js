import React from 'react'

const CardsBuilder = (props) => {
  return (
    <>
      <div className="col-lg-3">
        <div class="card pt-3 ">
         
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
              <a href={props.siteLink} class="btn ">
                vist site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsBuilder