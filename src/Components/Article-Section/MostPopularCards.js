import React from 'react';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ButtonAni from '../button-animation/Button-ani';
import "./MostpopularCard.css"

const MostPopularCards = ({title,description,img,viewscount,currentslug}) => {
    return (
        <div>
             <div class="item-prdt" style={{'marginTop':'50px'}}>
        <div class="row item-prdt">
            <div class="col-md-3 item-prdt">
                <div class="card-sl item-prdt">
                    <div class="card-image">
                        <img
                            src={img}/>
                    </div>

                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-heading">
                        {title}
                    </div>
                    <div class="card-text">
                        {description}...
                    </div>
                    <div class="card-text">
                    <FiEye/> <span className="vie ">{viewscount}k views</span>
                    </div>
                    <div  className="mstpp">
                    <Link
                      to={`/Blog/${currentslug}`}
                     
                    >
                      <ButtonAni widht={'100px'} height={'50px'} text={'Read'} 
                      background={'#d9aef4'} color={'#8659c2'}  borderRad={'50px'} />
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>  
        </div>
        </div>
    );
}

export default MostPopularCards;
