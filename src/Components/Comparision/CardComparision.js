import React from 'react'
import ButtonAni from "../button-animation/Button-ani";
const CardComparision = (props) => {
  return (
    <div>
      <div className="col-lg-4">
        <div class="card pt-3 ">
         
          <div className="row">
            <div className="col-lg-4 ml-2">
              <img
                src={props.image}
                className="card-img-custom img-fluid"
                alt="..."
                height="65px"
              />
            </div>
            <div className="col-lg-8">
              <h5 class="card-title">{props.title}</h5>
              <h6>Rating:{props.rating}</h6>
              <a href={props.fullreview}>Read Full Review</a>
            </div>
          </div>

          <div class="card-body ">
            
            <div className="d-flex justify-content-center align-items-center">
            <a href={props.website}>
              <ButtonAni widht={'95px'} height={'45px'} text={'Visit site'} 
                      background={'#7e57c2'} color={'#000'} hoverbackground={'#8659c2'} hovercolor={'d9aef4'} borderRad={'15px'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComparision
