import RestaurantCard from "./RestaurantCads";

import reslist from "../utils/mockdata";

import { useState } from "react";



const Body=()=>{
let listOfRestaurantscommonJS=[{
    "data": {   
      "id": "240179",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "onhkq8nwfxrje79dfhe9",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      
      "costForTwo": 30000,
      "deliveryTime": 17,
      "avgRating": "4.2",

  },
},
{
    "data": {   
      "id": "240178",
      "name": "KFC",
      "cloudinaryImageId": "onhkq8nwfxrje79dfhe9",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      
      "costForTwo": 30000,
      "deliveryTime": 17,
      "avgRating": "3.0",

  },
},{
    "data": {   
      "id": "240180",
      "name": "Macd",
      "cloudinaryImageId": "onhkq8nwfxrje79dfhe9",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      
      "costForTwo": 30000,
      "deliveryTime": 17,
      "avgRating": "4.2",

  },
},
    ];

let [listOfRestaurants,setListOfRestaurants]=useState(reslist);
    return(
        <div className="Body">
            <div className="Filter">
                <button className="filter-btn" onClick={()=>{

                    let filterList=listOfRestaurants.filter((x)=>{return x.data.avgRating>4.2});
                    setListOfRestaurants(filterList);
                    
                //    listOfRestaurants= listOfRestaurants.filter((x)=>{return x.data.avgRating>4});
                //    console.log(listOfRestaurants);
                }}>Top Rated Restaurant </ button>

            </div>
            <div className="RestaurantConatainer">
                {
                listOfRestaurants.map(restaurant => <RestaurantCard key ={restaurant.data.id} resdata={restaurant}/>)
                }
                
                
            </div>

        </div>
    )
}

export default Body;