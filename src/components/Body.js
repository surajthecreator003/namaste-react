import RestaurantCard from "./RestaurantCards";

import reslist from "../utils/mockdata";

// import reslist2 from "../utils/fakemockdata";

import { useState,useEffect } from "react";

import Shimmer from "./ShimmerUI";

import {Link} from "react-router-dom";

import useOnline from "../utils/useOnline";


const Body=()=>{
  // console.log("body printed");
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


// function filterData(searchText, restaurants) {
//       const filterData = restaurants.filter((restaurant) =>
//         restaurant.data.name.includes(searchText)
//       );
    
//       return filterData;
//     }




const [allRestaurants,setAllRestaurants]=useState([]);//list of restaurants data
const [filteredRestaurants,setFilteredRestaurants]=useState([]);//filtered restaurant data 
const [searchText,setSearchText]=useState("");//for search text



useEffect(()=>{getRestaurants();console.log("use effect of body called")},[]);



async function getRestaurants(){
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9122238&lng=77.5923219&page_type=DESKTOP_WEB_LISTING");//put swiggy api link here
       const jsondata = await data.json();
       
       //console.log(data);
       setAllRestaurants(jsondata.data.cards[2].data.data.cards);
       setFilteredRestaurants(jsondata.data.cards[2].data.data.cards);
       
}

const statusValue=useOnline();
if(statusValue){
  return <h1>🔴 You are Offline Please turn on your internet and try again</h1>
}
// else{
//   return <h1>🟢You are Online</h1>
// }



console.log("Body Entered");
// console.log(allRestaurants);
console.log(filteredRestaurants);

//Early Exit Code
// if(filteredRestaurants.length===0){
//   return <h1>No Restaurants Found</h1>
// }


   
return (filteredRestaurants.length===0)?(<Shimmer />):(
       

        
        <div className="Body">
          
            <div className="Filter">
                <button className="filter-btn" onClick={()=>{

                    let filterList=allRestaurants.filter((x)=>{return x.data.avgRating>4});
                    setFilteredRestaurants(filterList);
                }}>Top Rated Restaurant </ button>
            </div>



            
            <div className="search-container" >
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
              const data=allRestaurants.filter((x)=>{return x.data.name.toLowerCase().includes(searchText.toLowerCase())})
              setFilteredRestaurants(data);
            }
            }>
             Search
            </button>
            </div>



            <div className="RestaurantConatainer">
                {
                filteredRestaurants.map(restaurant => <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> <RestaurantCard key ={restaurant.data.id} resdata={restaurant}/> </Link>)
                }
            </div>

            

        </div>
    )
}

export default Body;