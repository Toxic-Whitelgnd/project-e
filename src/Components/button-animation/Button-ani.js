import React from 'react';
import { motion } from "framer-motion"
import "../button-animation/Button-ani.css"

const ButtonAni = ({text , widht, height , background , color , hoverbackground , hovercolor , borderRad}) => {
    function textchangecolor (){
            document.getElementById('boxx').style.background = `${hoverbackground}`;
            document.getElementById('boxx').style.color = `${hovercolor}`;
    }
    const textchangecolorout = () =>{
        document.getElementById('boxx').style.background = `${background}`;
        document.getElementById('boxx').style.color =  `${color}`;
    }
    return (
        <div>
            
            <motion.div
                className="box"
                id='boxx'
                style={{width: `${widht}`, height: `${height}`,
                background:`${background}`,color:`${color}`,borderRadius:`${borderRad}`}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                // onMouseEnter ={textchangecolor()}
                // onMouseLeave = {textchangecolorout()}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >{text}</motion.div>
        </div>
    );
}

export default ButtonAni;
