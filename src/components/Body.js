import RestaurantCard from "./RestaurantCads";

import reslist from "../utils/mockdata";

import { useState } from "react";



const Body=()=>{
  console.log("body printed");
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


function filterData(searchText, restaurants) {
      const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
      );
    
      return filterData;
    }

const [listOfRestaurants,setListOfRestaurants]=useState(reslist);
const [searchText,setSearchText]=useState("");

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
            
            <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
              setSearchText(e.target.value);
            }}
            />
            <button className="search-input" onClick={()=>{//serch Logic Inside Button Working
              // const data=filterData(searchText,listOfRestaurants);//If you wanaa use outer function to filter data
              const data=listOfRestaurants.filter((x)=>{return x.data.name.includes(searchText)})
              setListOfRestaurants(data);
            }
            }>
             Search
            </button>
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