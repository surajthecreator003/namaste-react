// import React from "react"; as react 18 automatically imports react package
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useState}  from "react ";
import { CDN_URL } from "../utils/config";
import Shimmer from "./ShimmerUI";
import useFetchRestaurantData from "../utils/useFetchRestaurantData"



const RestaurantsMenu=()=>{
    
    


    const {id}=useParams();
    const [restaurantMenu,restaurantMenuItems]=useFetchRestaurantData(id);//Custom Hook
    
    
    
  

    if( restaurantMenuItems.length===0 ){return <Shimmer/> }    

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