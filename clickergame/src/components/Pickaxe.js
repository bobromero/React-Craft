import React, {useState} from 'react';

const Pickaxe = ({imgPickaxe, GaBoost, setCurrentPick, upgradedPickaxe, mined, pickArray, upgrades})=>{
    let temp = upgrades;
    React.useEffect(()=>{
        if (GaBoost > 1){
            setCurrentPick(upgradedPickaxe)
        }
        else if (GaBoost == 1 && mined > 1){
            setCurrentPick(pickArray[upgrades])
        }
    }, [GaBoost, mined])
    return(
    <div className="center">
        <img height="150px" width="150px" src={imgPickaxe}></img>

    </div>);
}


export default Pickaxe;