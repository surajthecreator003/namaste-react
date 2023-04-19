import RestaurantCard from "./RestaurantCads";

import reslist from "../utils/mockdata";



const Body=()=>{
    return(
        <div className="Body">
            <div className="SearchBar">
                Search
            </div>
            <div className="RestaurantConatainer">
                {
                reslist.map(restaurant => <RestaurantCard key ={restaurant.data.id} resdata={restaurant}/>)
                }
                
                
            </div>

        </div>
    )
}

export default Body;