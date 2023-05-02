// import React from "react"; as react 18 automatically imports react package
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useState}  from "react ";
import { CDN_URL } from "../utils/config";
import Shimmer from "./ShimmerUI";



const RestaurantsMenu=()=>{
    
    const {id}=useParams();
    
    const [restaurantMenu,setRestaurantMenu]=useState({});
    const [restaurantMenuItems,setRestaurantMenuItems]=useState([]);
    
    
    
    


    async function getRestaurantsInfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9122238&lng=77.5923219&restaurantId="+id);
        const jsondata= await data.json();

        
        
        
        //Main Logic To destructure Swiggy Menu Items Data
        const menuArray=   await jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const moveInsideMenuArray=  await menuArray?.map((x)=>{return x?.card?.card?.itemCards});

       
        const storingMenu=[];
        for(let i=0;i<moveInsideMenuArray.length;i++){
                    if(moveInsideMenuArray[i]){
                         for(let j=0;j<moveInsideMenuArray[i].length;j++){
                                if(moveInsideMenuArray[i][j]){
                                     storingMenu.push(moveInsideMenuArray[i][j]);
                                }
                                else{
                                 continue;
                                }
                        }
                    }  
                    else{
                        continue;
                    }      
                }

        console.log(menuArray);
        console.log(moveInsideMenuArray);
        console.log(storingMenu);


        setRestaurantMenu(jsondata?.data?.cards[0].card?.card?.info);
        setRestaurantMenuItems(storingMenu);
        
    }

    
   
    

    useEffect(()=>{
     getRestaurantsInfo();
        },[]);


    

    if(restaurantMenuItems.length===0){return <Shimmer/> }    

    return (<div className="Menu">

        <div>
            <h2>Restaurant Id : {restaurantMenu.id}</h2>
            <h1>{restaurantMenu.name}</h1>
            <img  src={CDN_URL+restaurantMenu.cloudinaryImageId}/>
            <h1>{restaurantMenu.area}</h1>
            <h3>{restaurantMenu.city}</h3>
            <h2>{restaurantMenu.avgRating} Stars</h2>
            <h3>{restaurantMenu.costForTwoMessage}</h3>
        </div>

        <div>
            <h1>Menu :</h1> 
            <ul>
            {restaurantMenuItems.map((x,index) => <li key={index}>{x?.card?.info?.name} Price-Rs.{x?.card?.info?.price/100}</li>)} 
            </ul>
                
            
        </div>

        </div>

    )
}

export default RestaurantsMenu;