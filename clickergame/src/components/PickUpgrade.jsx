import React from 'react';
import black from '../data/photos/Upgrades/PickUpgrades/black_pick_upgrade.png'


const PickUpgrade=()=>{
    function click(){
        console.log('what do we do now')
    }
    return(
        <div className='type'>
            <a onClick={click}><img className="upgrade-image" src={black}></img></a>
        </div>
    );
}

export default PickUpgrade;