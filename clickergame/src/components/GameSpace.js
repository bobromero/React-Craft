import React, {useState, useEffect} from 'react';
import Rock from './Rock';
import Pickaxe from './Pickaxe';
import GoldenApple from './GoldenApple';
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
import upgradedPick from '../data/photos/Picks/Enchanted_Diamond_Pickaxe.gif';
import PickUpgrade from './PickUpgrade';





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
    const upgradedPickaxe = {
        damage: 32,
        img: upgradedPick
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
    const [currentStone, setcurrentStone] = useState(398);
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
    const [currentPickLevel, setCurrentPickLevel] = useState(0);
    const [numOfCurrentIronShops, setNumOfCurrentIronShops] = useState(0);
    const [numOfAutoMineShops, setNumOfAutoMineShops] = useState(0);
    const [numOfCurrentGoldShops, setNumOfGoldShops] = useState(0);
    const [numOfCurrentDiamondShops, setNumOfCurrentDiamondShops] = useState(0);
    //upgrade prices
    const [upgradeCost, setUpgradeCost] = useState(0);
    const [ironShopCost, setIronShopCost] = useState(10);
    const [clickShopCost, setClickShopCost] = useState(50);
    const [goldShopCost, setGoldShopCost] = useState(25);
    const [diamondShopCost, setDiamondShopCost] = useState(50);
    const [GaBoost, setGaBoost] =useState(1);
    const [upgrades, setUpgrades] = useState(-1);
    let ores = [EmeraldOreObj, DiamondOreObj, GoldOreObj, CoalOreObj, IronOreObj, StoneObj]
    let pickArray = [woodenPickaxe, stonePickaxe, ironPickaxe, goldPickaxe, diamondPickaxe, netheritePickaxe, upgradedPickaxe];


    

    if(health < 1){
        
        function addCount(){
            if(health < 1){
                switch(currentRock.img){
                    case DiamondOre:
                        setcurrentDiamond(currentDiamond + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case EmeraldOre:
                        setcurrentEmerald(currentEmerald + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case GoldOre:
                        setcurrentGold(currentGold + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case CoalOre:
                        setcurrentCoal(currentCoal + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    case IronOre:
                        setcurrentIron(currentIron + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                    default:
                        setcurrentStone(currentStone + Math.round(Math.random() * 4 + 2) * GaBoost);
                        setMined(mined + 1);
                        setCurrentRock(ores[Math.round(Math.random() * 5)]);
                        break;
                }
                
                setcurrentCoal(prevTime => prevTime + numOfCurrentIronShops  * 2 * GaBoost);
                setcurrentStone(prevTime => prevTime + numOfCurrentGoldShops * 25 * GaBoost);
                setcurrentEmerald(prevTime => prevTime + numOfCurrentDiamondShops * 8 * GaBoost);
            }
            
            changeRockHealth();
            
            
        }
        
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
    function IronAllSmelt(){
        if(currentIron > 0 && currentCoal > 0 && currentCoal-currentIron > 0){
            setcurrentCoal(currentCoal - currentIron);
            setcurrentIron(currentIron - currentIron);
            setcurrentIronMelted(currentIronMelted + currentIron);
            
        }
    }
    function GoldSmelt(){
        if(currentGold > 0 && currentCoal > 0){
            setcurrentCoal(currentCoal - 1);
            setcurrentGold(currentGold - 1);
            setcurrentGoldMelted(currentGoldMelted + 1);
        }
    }
    function GoldAllSmelt(){
        if(currentGold > 0 && currentCoal > 0 && currentCoal-currentGold > 0){
            setcurrentCoal(currentCoal - currentGold);
            setcurrentGold(currentGold - currentGold);
            setcurrentGoldMelted(currentGoldMelted + currentGold);
        }
    }
    function upgradePick(){
        
        if(currentStone >= upgradeCost && currentPickLevel < pickArray.length){
            setcurrentStone(currentStone - upgradeCost)
            setUpgradeCost(upgradeCost * 5 + 750)
            if(currentPickLevel === pickArray.length-1){
            
                setUpgradeCost(0)
            } 
            setCurrentPickLevel(currentPickLevel + 1);
            setCurrentPick(pickArray[currentPickLevel])
            setUpgrades(upgrades + 1)
            // pickArray array of picks use .img and .damage for each pick
        }
        
    }
    function handleClickIron() {
        if(currentIronMelted >= ironShopCost){
            setNumOfCurrentIronShops(numOfCurrentIronShops + 1)
            setcurrentIronMelted(currentIronMelted - ironShopCost);
            setIronShopCost(ironShopCost + 30);
        }
    }
    function handleClickClicks() {
        if(currentIronMelted >= clickShopCost){
            setNumOfAutoMineShops(numOfAutoMineShops + 1)
            setcurrentIronMelted(currentIronMelted - clickShopCost);
            setClickShopCost(clickShopCost * 2);
        }
    }
    function handleClickGold() {
        if(currentGoldMelted >= goldShopCost){
            setNumOfGoldShops(numOfCurrentGoldShops + 1)
            setcurrentGoldMelted(currentGoldMelted - goldShopCost);
            setGoldShopCost(goldShopCost + 50);
        }
    }
    function handleClickDiamond() {
        if(currentDiamond >= diamondShopCost){
            setNumOfCurrentDiamondShops(numOfCurrentDiamondShops + 1)
            setcurrentDiamond(currentDiamond - diamondShopCost);
            setDiamondShopCost(diamondShopCost + 100);
        }
    }

    function handleClickWin() {
        if(currentEmerald >= 500000){
            alert('you win');
        }
    }
    React.useEffect(() => {
        const timer = window.setInterval(() => {
            setcurrentEmerald(prevTime => prevTime + numOfCurrentDiamondShops * 2);
            setcurrentCoal(prevTime => prevTime + numOfCurrentIronShops  * 2);
            setcurrentStone(prevTime => prevTime + numOfCurrentGoldShops * 50);
            setHealth(health - numOfAutoMineShops)

        }, 500);
        return () => {
        window.clearInterval(timer);
        };
    });
    return(
        <div id='gameSpace' className="center">
            <h1>Total blocks Mined: {mined}</h1>
            <div className="top-box">
                <div className="center padding">
                    <Rock 
                        imgRock = {currentRock.img}
                    />
                    <h1>{health}</h1>
                    <button className="Mine" onClick={() => setHealth(health - currentPick.damage)}>MINE!</button>
                    <GoldenApple
                        mined={mined}
                        setGaBoost={setGaBoost}
                    />
                    <div className="padding">
                        <Pickaxe 
                        mined={mined}
                        imgPickaxe = {currentPick.img}
                        setCurrentPick={setCurrentPick}
                        GaBoost={GaBoost}
                        pickArray={pickArray}
                        upgradedPickaxe={upgradedPickaxe}
                        upgrades={upgrades}
                        />
                    </div>
                </div>
                <div className="padding">
                    <div id="resource-list-outer">
                        <ul className="resource-list">
                            <li><img src={StoneOre}></img>{currentStone} </li>
                            <li><img src={IronOre}></img>{currentIron} </li>
                            <li><img src={Iron}></img>{currentIronMelted} </li>
                            <li><img src={GoldOre}></img>{currentGold} </li>
                            <li><img src={Gold}></img>{currentGoldMelted} </li>
                            <li><img src={Diamond}></img>{currentDiamond} </li>
                            <li><img src={Emerald}></img>{currentEmerald} </li>
                            <li><img src={Coal}></img>{currentCoal} </li>
                        </ul>
                        <ul className="resource-list-smelt">
                            <li><button onClick={IronSmelt}>Smelt Iron</button></li>
                            <li><button onClick={IronAllSmelt}>Smelt All Iron</button></li>
                            <li><button onClick={GoldSmelt}>Smelt Gold</button></li>
                            <li><button onClick={GoldAllSmelt}>Smelt All Gold</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            

            <button onClick={upgradePick}>UPGRADE PICKAXE: {upgradeCost} Stone</button>
            {/* <div className="center">
                <h1>Upgrades</h1>
                <div className="upgrades">
                     <PickUpgrade/>
                     <PickUpgrade/>
                     <PickUpgrade/>
                     <PickUpgrade/>
                </div>
                   

            </div> */}
            <div className="center">
                <h1>Shops</h1>
                <div className="shop center">
                    <h3>Auto Clicker Shop Shops: {numOfAutoMineShops}</h3>
                    <button onClick={handleClickClicks}>Buy Clicker: {clickShopCost} Iron</button>
                    <p>Each shop rewards 1 click per second</p>
                </div>
                <div className="shop center">
                    <h3>Iron Shops: {numOfCurrentIronShops}</h3>
                    <button onClick={handleClickIron}>Buy Iron shop: {ironShopCost} Iron</button>
                    <p>Each shop rewards 2 Coal per click and second</p>
                </div>
                <div className="shop center">
                    <h3>Gold Shops: {numOfCurrentGoldShops}</h3>
                    <button onClick={handleClickGold}>Buy Gold shop: {goldShopCost} Gold</button>
                    <p>Each shop rewards 50 Stone per click and second</p>
                </div>
                <div className="shop center">
                    <h3>Diamond Shops: {numOfCurrentDiamondShops}</h3>
                    <button onClick={handleClickDiamond}>Buy Diamond shop: {diamondShopCost} Diamonds</button>
                    <p>Each shop rewards 2 emeralds per click and second</p>
                </div>
            </div>
            <div className="shop win">
                <img src={Villager} height="150px" width="100px"></img>
                <div></div>
                <button onClick={handleClickWin}>Win the Game: 500000 Emeralds</button>
            </div>
            
            
            
        </div>
    );
}

export default GameSpace;