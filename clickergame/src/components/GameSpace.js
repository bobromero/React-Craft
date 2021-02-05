import React, {useState, useEffect} from 'react';
import ButtonClick from './ButtonClick';
import Rock from './Rock';
import Pickaxe from './Pickaxe';
import WoodPick from '../data/photos/Picks/Wooden_Pickaxe.png';
import StonePick from '../data/photos/Picks/Stone_Pickaxe.webp';
import IronPick from '../data/photos/Picks/Iron_Pickaxe.webp';
import GoldPick from '../data/photos/Picks/Golden_Pickaxe.webp';
import DiamondPick from '../data/photos/Picks/Diamond_Pickaxe.png';
import NetheritePick from '../data/photos/Picks/Netherite_Pickaxe.png';
import StoneOre from '../data/photos/Rocks/Stone.png';
import DiamondOre from '../data/photos/Rocks/DiamondOre.webp';
import EmeraldOre from '../data/photos/Rocks/EmeraldOre.webp';
import CoalOre from '../data/photos/Rocks/CoalOre.webp';
import GoldOre from '../data/photos/Rocks/GoldOre.webp';
import IronOre from '../data/photos/Rocks/IronOre.webp';
import Diamond from '../data/photos/ingots/Diamond.png';
import Emerald from '../data/photos/ingots/Emerald.webp';
import Coal from '../data/photos/ingots/Coal.webp';
import Gold from '../data/photos/ingots/Gold.webp';
import Iron from '../data/photos/ingots/Iron.webp';




const GameSpace = () => {
    const [health, setHealth] = useState(5);
    const [mined, setMined] = useState(0);
    const [currentStone, setcurrentStone] = useState(0);
    const [currentDiamond, setcurrentDiamond] = useState(0);
    const [currentEmerald, setcurrentEmerald] = useState(0);
    const [currentCoal, setcurrentCoal] = useState(0);
    const [currentGold, setcurrentGold] = useState(0);
    const [currentIron, setcurrentIron] = useState(0);
    const [currentRock, setCurrentRock] = useState(StoneOre);
    const [currentGoldMelted, setcurrentGoldMelted] = useState(0);
    const [currentIronMelted, setcurrentIronMelted] = useState(0);
    let ores = [DiamondOre, EmeraldOre, GoldOre, CoalOre, IronOre, StoneOre]
    let currentPick = '';
    let pickType = 'diamond';
    useEffect(() => {
        
        if(health === 0){
            switch(currentRock){
                case DiamondOre:
                    setcurrentDiamond(currentDiamond + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
                case EmeraldOre:
                    setcurrentEmerald(currentEmerald + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
                case GoldOre:
                    setcurrentGold(currentGold + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
                case CoalOre:
                    setcurrentCoal(currentCoal + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
                case IronOre:
                    setcurrentIron(currentIron + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
                default:
                    setcurrentStone(currentStone + 1);
                    setMined(mined + 1);
                    setHealth(5);
                    setCurrentRock(ores[Math.round(Math.random() * (5-0) + 0)]);
                    break;
            }
            console.log(currentRock);
            
        }
    })

    
    
    switch(pickType){
        case 'stone':
            currentPick = StonePick;
            break;
        case 'iron':
            currentPick = IronPick;
            break;
        case 'gold':
            currentPick = GoldPick;
            break;
        case 'diamond':
            currentPick = DiamondPick;
            break;
        case 'netherite':
            currentPick = NetheritePick;
            break;
        default:
            currentPick = WoodPick;

    }
    
    return(
        <div>
            <h1>{mined}</h1>
            <ul>
                <li>{currentStone}<img height="25px" width='25px' src={StoneOre}></img></li>
                <li>{currentDiamond}<img height="25px" width='25px' src={Diamond}></img></li>
                <li>{currentEmerald}<img height="25px" width='25px' src={Emerald}></img></li>
                <li>{currentCoal}<img height="25px" width='25px' src={Coal}></img></li>
                <li>{currentGold}<img height="25px" width='25px' src={GoldOre}></img></li>
                <li>{currentGoldMelted}<img height="25px" width='25px' src={Gold}></img></li>
                <li>{currentIron}<img height="25px" width='25px' src={IronOre}></img></li>
                <li>{currentIronMelted}<img height="25px" width='25px' src={Iron}></img></li>
            </ul>

            <Rock 
                imgRock = {currentRock}
            />
            <h1>{health}</h1>
            <button onClick={() => setHealth(health-1)}>MINE!</button>
            <Pickaxe
            imgPickaxe = {currentPick}
            />
        </div>
    );
}

export default GameSpace;