import React, {useState, useEffect} from 'react';
import ButtonClick from './ButtonClick';
import Rock from './Rock';
import Pickaxe from './Pickaxe';
import brokenPick from '../data/photos/Picks/broken.png';
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
    const brokenPickaxe = {
        damage: 0,
        img: brokenPick
    }
    const woodenPickaxe = {
        damage: 1,
        img: WoodPick
    }
    const stonePickaxe = {
        damage: 2,
        img: StonePick
    }
    const ironPickaxe = {
        damage: 4,
        img: IronPick
    }
    const goldPickaxe = {
        damage: 8,
        img: GoldPick
    }
    const diamondPickaxe = {
        damage: 16,
        img: DiamondPick
    }
    const netheritePickaxe = {
        damage: 32,
        img: NetheritePick
    }
    const DiamondOreObj ={
        health: 32,
        img: DiamondOre
    }
    const EmeraldOreObj ={
        health: 32,
        img: EmeraldOre
    }
    const GoldOreObj ={
        health: 32,
        img: GoldOre
    }
    const CoalOreObj ={
        health: 8,
        img: CoalOre
    }
    const IronOreObj ={
        health: 10,
        img: IronOre
    }
    const StoneObj ={
        health: 5,
        img: StoneOre
    }
    //!delete health, replace with currentRock.health
    const [health, setHealth] = useState(4);
    const [mined, setMined] = useState(0);
    //mined is total blocks mined
    //!everything between this is for the counters 1/2
    const [currentStone, setcurrentStone] = useState(0);
    const [currentDiamond, setcurrentDiamond] = useState(0);
    const [currentEmerald, setcurrentEmerald] = useState(9999999999);
    const [currentCoal, setcurrentCoal] = useState(0);
    const [currentGold, setcurrentGold] = useState(0);
    const [currentIron, setcurrentIron] = useState(0);
    const [currentGoldMelted, setcurrentGoldMelted] = useState(0);
    const [currentIronMelted, setcurrentIronMelted] = useState(0);
    //!  2/2
    const [currentRock, setCurrentRock] = useState(StoneOre);
    //*current rock is rock displayed
    
    const [currentPick, setCurrentPick] = useState(brokenPickaxe);
    const [currentDamage, setCurrentDamage] = useState(2);
    const [upgradeCost, setUpgradeCost] = useState(0);
    const [currentPickLevel, setCurrentPickLevel] = useState(0);
    let ores = [DiamondOre, EmeraldOre, GoldOre, CoalOre, IronOre, StoneOre]
    let pickArray = [woodenPickaxe, stonePickaxe, ironPickaxe, goldPickaxe, diamondPickaxe, netheritePickaxe];
    useEffect(() => {
        
        if(health < 1){
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
        setCurrentDamage(currentPick.damage);
    })

    
    
    
    
    function IronSmelt(){
        if(currentIron > 0 && currentCoal > 0){
            setcurrentCoal(currentCoal - 1);
            setcurrentIron(currentIron - 1);
            setcurrentIronMelted(currentIronMelted + 1);
            console.log('hello');
        }
    }
    function GoldSmelt(){
        if(currentIron > 0 && currentCoal > 0){
            setcurrentCoal(currentCoal - 1);
            setcurrentGold(currentGold - 1);
            setcurrentGoldMelted(currentGoldMelted + 1);
            console.log('hello');
        }
    }

    function upgradePick(){
        if(currentEmerald >= upgradeCost){
            setUpgradeCost(upgradeCost * 2 + 500)
            setCurrentPickLevel(currentPickLevel + 1);
            setCurrentPick(pickArray[currentPickLevel])
            // pickArray array of picks use .img and .damage for each pick
            console.log(currentPickLevel)
        }
    }
    
    return(
        <div>
            <h1>{mined}</h1>
            <ul>
                <li>{currentStone}<img height="25px" width='25px' src={StoneOre}></img></li>
                <li>{currentIron}<img height="25px" width='25px' src={IronOre}></img><button onClick={IronSmelt}>Smelt Iron</button></li>
                <li>{currentIronMelted}<img height="25px" width='25px' src={Iron}></img></li>
                <li>{currentGold}<img height="25px" width='25px' src={GoldOre}></img><button onClick={GoldSmelt}>Smelt Gold</button></li>
                <li>{currentGoldMelted}<img height="25px" width='25px' src={Gold}></img></li>
                <li>{currentDiamond}<img height="25px" width='25px' src={Diamond}></img></li>
                <li>{currentEmerald}<img height="25px" width='25px' src={Emerald}></img></li>
                <li>{currentCoal}<img height="25px" width='25px' src={Coal}></img></li>
                
                
            </ul>
            

            <Rock 
                imgRock = {currentRock}
            />
            <h1>{health}</h1>
            <button onClick={() => setHealth(health - currentDamage)}>MINE!</button>
            <Pickaxe 
            imgPickaxe = {currentPick.img}
            />
            <button onClick={upgradePick}>UPGRADE PICKAXE: {upgradeCost} Emeralds</button>

        </div>
    );
}

export default GameSpace;