// import React from "react"; as react 18 automatically imports react package
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useState}  from "react ";
import { CDN_URL } from "../utils/config";
import Shimmer from "./ShimmerUI";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";



const RestaurantsMenu=()=>{
    
    


    const {id}=useParams();
    const [restaurantMenu,restaurantMenuItems]=useFetchRestaurantData(id);//Custom Hook
    
    
    const dispatch=useDispatch();

    const addFoodItem=(x)=>{dispatch(addItem(x))};

    
  

    if( restaurantMenuItems.length===0 ){return <Shimmer/> }    

    return (<div className="flex flex-wrap bg-green-500">

        <div >
            <h2>Restaurant Id : {restaurantMenu.id}</h2>
            <h1>{restaurantMenu.name}</h1>
            <img  src={CDN_URL+restaurantMenu.cloudinaryImageId}/>
            <h1>{restaurantMenu.area}</h1>
            <h3>{restaurantMenu.city}</h3>
            <h2>{restaurantMenu.avgRating} Stars</h2>
            <h3>{restaurantMenu.costForTwoMessage}</h3>
        </div>

        {/* <div>
          <button onClick={()=>{dispatch(addItem("grapes"))}} className="bg-yellow-500"><span className="font-bold">Add item into cart🛒</span></button>
        </div> */}

        <div className="p-10">
            <h1 className="underline font-bold text-2xl">Menu :</h1> 
            <ul>
            {restaurantMenuItems.map((x,index) => <li key={index}>{x?.card?.info?.name} Price-Rs.{x?.card?.info?.price/100}-<button onClick={()=>addFoodItem(x)}><span className="bg-yellow-500">Add to Cart➕</span></button></li>)} 
            </ul>
                
            
        </div>

        </div>

    )
}

export default RestaurantsMenu;