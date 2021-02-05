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
import Villager from '../data/photos/villager.png';




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
        health: 24,
        img: DiamondOre
    }
    const EmeraldOreObj ={
        health: 32,
        img: EmeraldOre
    }
    const GoldOreObj ={
        health: 16,
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
    const throwaway ={
        health: 1,
        img: StoneOre
    }
    const [health, setHealth] = useState(0);
    const [mined, setMined] = useState(-1);
    //mined is total blocks mined
    //!everything between this is for the counters 1/2
    const [currentStone, setcurrentStone] = useState(-1);
    const [currentDiamond, setcurrentDiamond] = useState(0);
    const [currentEmerald, setcurrentEmerald] = useState(0);
    const [currentCoal, setcurrentCoal] = useState(0);
    const [currentGold, setcurrentGold] = useState(0);
    const [currentIron, setcurrentIron] = useState(0);
    const [currentGoldMelted, setcurrentGoldMelted] = useState(0);
    const [currentIronMelted, setcurrentIronMelted] = useState(0);
    //!  2/2
    //!I don't understand how to use this properly
    const [currentRock, setCurrentRock] = useState(throwaway);
    //*current rock is rock displayed
    
    const [currentPick, setCurrentPick] = useState(brokenPickaxe);
    const [currentDamage, setCurrentDamage] = useState(2);
    const [currentPickLevel, setCurrentPickLevel] = useState(0);
    const [numOfCurrentIronShops, setNumOfCurrentIronShops] = useState(0);
    const [numOfCurrentGoldShops, setNumOfGoldShops] = useState(0);
    const [numOfCurrentDiamondShops, setNumOfCurrentDiamondShops] = useState(0);
    //upgrade prices
    const [upgradeCost, setUpgradeCost] = useState(0);
    const [ironShopCost, setIronShopCost] = useState(10);
    const [goldShopCost, setGoldShopCost] = useState(25);
    const [diamondShopCost, setDiamondShopCost] = useState(50);
    let ores = [EmeraldOreObj, DiamondOreObj, GoldOreObj, CoalOreObj, IronOreObj, StoneObj]
    let pickArray = [woodenPickaxe, stonePickaxe, ironPickaxe, goldPickaxe, diamondPickaxe, netheritePickaxe];


    

    if(health < 1){
        
        function addCount(){
            if(health < 1){
                switch(currentRock.img){
                    case DiamondOre:
                        setcurrentDiamond(currentDiamond + 1);
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case EmeraldOre:
                        setcurrentEmerald(currentEmerald + 1);
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case GoldOre:
                        setcurrentGold(currentGold + 1);
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case CoalOre:
                        setcurrentCoal(currentCoal + 1);
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case IronOre:
                        setcurrentIron(currentIron + 1);
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    default:
                        setcurrentStone(currentStone + 1);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                }
                
                
            }
            else{
            
            }
            changeRockHealth();
            
            
        }
        setCurrentDamage(currentPick.damage);
        addCount()
    }
    useEffect(() => {
        
        setHealth(currentRock.health);
    }, [mined])
    function changeRockHealth(){
        setHealth(currentRock.health);
    }
    function IronSmelt(){
        if(currentIron > 0 && currentCoal > 0){
            setcurrentCoal(currentCoal - 1);
            setcurrentIron(currentIron - 1);
            setcurrentIronMelted(currentIronMelted + 1);
            
        }
    }
    function GoldSmelt(){
        if(currentGold > 0 && currentCoal > 0){
            setcurrentCoal(currentCoal - 1);
            setcurrentGold(currentGold - 1);
            setcurrentGoldMelted(currentGoldMelted + 1);
        }
    }
    function upgradePick(){
        
        if(currentStone >= upgradeCost && currentPickLevel < pickArray.length){
            setcurrentStone(currentStone - upgradeCost)
            setUpgradeCost(upgradeCost * 3 + 500)
            if(currentPickLevel === pickArray.length-1){
            
                setUpgradeCost(0)
            } 
            setCurrentPickLevel(currentPickLevel + 1);
            setCurrentPick(pickArray[currentPickLevel])
            // pickArray array of picks use .img and .damage for each pick
        }
        
    }
    function handleClickIron() {
        if(currentIronMelted >= ironShopCost){
            setNumOfCurrentIronShops(numOfCurrentIronShops + 1)
            setcurrentIronMelted(currentIronMelted - ironShopCost);
            setIronShopCost(ironShopCost * 2);
        }
    }
    function handleClickGold() {
        if(currentGoldMelted >= goldShopCost){
            setNumOfGoldShops(numOfCurrentGoldShops + 1)
            setcurrentGoldMelted(currentGoldMelted - goldShopCost);
            setGoldShopCost(goldShopCost * 2);
        }
    }
    function handleClickDiamond() {
        if(currentDiamond >= diamondShopCost){
            setNumOfCurrentDiamondShops(numOfCurrentDiamondShops + 1)
            setcurrentDiamond(currentDiamond - diamondShopCost);
            setDiamondShopCost(diamondShopCost * 2);
        }
    }
    function handleClickWin() {
        if(currentEmerald >= 1000){
            alert('you win');
        }
    }



    React.useEffect(() => {
        console.log('help')
        const timer = window.setInterval(() => {
            setcurrentEmerald(prevTime => prevTime + numOfCurrentDiamondShops * 2);
            setcurrentCoal(prevTime => prevTime + numOfCurrentIronShops  * 2);
            setcurrentStone(prevTime => prevTime + numOfCurrentGoldShops * 50);

        }, 500);
        return () => {
        window.clearInterval(timer);
        };
    });
    




    return(
        <div id='gameSpace' className="center">
            <h1>Total blocks Mined: {mined}</h1>
            <div id="resource-list-outer">
                <ul className="resource-list">
                    <li>{currentStone}<img height="25px" width='25px' src={StoneOre}></img></li>
                    <li>{currentIron}<img height="25px" width='25px' src={IronOre}></img><button onClick={IronSmelt}>Smelt Iron</button></li>
                    <li>{currentIronMelted}<img height="25px" width='25px' src={Iron}></img></li>
                    <li>{currentGold}<img height="25px" width='25px' src={GoldOre}></img><button onClick={GoldSmelt}>Smelt Gold</button></li>
                    <li>{currentGoldMelted}<img height="25px" width='25px' src={Gold}></img></li>
                    <li>{currentDiamond}<img height="25px" width='25px' src={Diamond}></img></li>
                    <li>{currentEmerald}<img height="25px" width='25px' src={Emerald}></img></li>
                    <li>{currentCoal}<img height="25px" width='25px' src={Coal}></img></li>
                    
                    
                </ul>
            </div>

            <Rock 
                imgRock = {currentRock.img}
            />
            <h1>{health}</h1>
            <button  onClick={() => setHealth(health - currentPick.damage)}>MINE!</button>
            <Pickaxe 
            imgPickaxe = {currentPick.img}
            />
            <button onClick={upgradePick}>UPGRADE PICKAXE: {upgradeCost} Stone</button>
            <div className="center">
                <h1>Shops</h1>
                <div className="shop center">
                    <h3>Iron Shops: {numOfCurrentIronShops}</h3>
                    <button onClick={handleClickIron}>Buy Iron shop: {ironShopCost} Iron</button>
                    <p>Each shop rewards 2 Coal each second you don't click</p>
                </div>

                <div className="shop center">
                    <h3>Gold Shops: {numOfCurrentGoldShops}</h3>
                    <button onClick={handleClickGold}>Buy Gold shop: {goldShopCost} Gold</button>
                    <p>Each shop rewards 50 Stone each second you don't click</p>
                </div>
                <div className="shop center">
                    <h3>Diamond Shops: {numOfCurrentDiamondShops}</h3>
                    <button onClick={handleClickDiamond}>Buy Diamond shop: {diamondShopCost} Diamonds</button>
                    <p>Each shop rewards 2 emeralds each second you don't click</p>
                </div>
            </div>
            <div>
                <img src={Villager} height="150px" width="100px"></img>
                <div></div>
                <button onClick={handleClickWin}>Win the Game: 1000 Emeralds</button>
            </div>
            
            
            
        </div>
    );
}

export default GameSpace;