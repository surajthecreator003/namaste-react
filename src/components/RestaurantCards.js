import {CDN_URL} from "../utils/config";

const RestaurantCard=(props)=>{
    const {resdata}=props;
    // console.log("resetaurant card entered");
    // console.log(resdata);

    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}=resdata?.data;
    
    return(
        <div data-testid="rescards" className="w-56 p-2 m-2 shadow-lg bg-purple-50" >
           
           <img  className="restaurantlogo" src={CDN_URL+ cloudinaryImageId} />
           <h3 className="font-bold text-2xl">{name}</h3>
           <h4 className="overflow-hidden">{cuisines.join(",")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>Rs.{costForTwo/100}</h4>
           <h4>{deliveryTime} minutes</h4>
           
        </div>
    )
}

export default RestaurantCard