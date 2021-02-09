import React, {useEffect, useState} from 'react';
import Ga from '../data/photos/Ga.webp';




let left = Math.round(Math.random() * 60) + 10
let top = Math.round(Math.random() * 60) + 10
let temp = 100;
const GoldenApple = ({mined, setGaBoost}) => {
    
    var x = document.getElementById("myDIV");

    useEffect(()=>{
        left = Math.round(Math.random() * 60) + 10
        top = Math.round(Math.random() * 60) + 10
        if(mined%250 === 0 && mined > 0){
            x.style.display = "block";
        }
        else{
        }
        if(temp == mined){
            setGaBoost(1)
        }
    },[mined])

    function click1() {
        temp = mined + 50
        setGaBoost(5)
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        console.log(temp)
    }
    const style ={
    
        position: 'absolute',
        top: `${top}vh`,
        left: `${left}vw`,
    }

    return(
    <div >
        <a id='myDIV' onClick={click1}><img  style={style} src={Ga}></img></a>
    </div>
    );
}

export default GoldenApple;