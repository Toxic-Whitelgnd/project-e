import React from 'react';
import { motion } from "framer-motion"

const BestCard = ({images , title , backgroundcolor , color ,link}) => {
    return (
        <div>
            {/* <div className='best-product'> */}
                {/* 1 */}
                <a href={link}>
                <motion.div className='item-prdt' 
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <div className='box-pdt-1' style={{background:`${backgroundcolor}`,color:`${color}`}}>
                         <span className='text fs-6 mb-1'>Best:</span>
                         <span className='text-wrap fs-4'>{title}</span>
                         <img className='box-pdt-img' src={images} alt='..' width={300} height={227}/>
                    </div>
                </motion.div>
                </a>
                {/* </div> */}
        </div>
    );
}

export default BestCard;
