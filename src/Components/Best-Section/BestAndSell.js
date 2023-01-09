import React,{useState} from 'react';
import Data from "../Best-Section/BestandTestApi"
import BestCard from './BestCard';
import "../Best-Section/BestCard.css"

const BestAndSell = () => {
    const [bestsell,setBestsell] = useState(Data);
    return (
        <div>
            <div className='container'>
                <h3 className='my-5 boxtitle'>We Test . You Sell</h3>
                <div className='best-product'>
                    {
                        bestsell.map((val,idx)=>{
                            return(
                                <BestCard
                                key={idx}
                                title={val.title}
                                images={val.img}
                                backgroundcolor={val.backgroundColor}
                                color={val.color}
                                link={val.link}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BestAndSell;
