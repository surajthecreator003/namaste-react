import {CDN_URL} from "../utils/config";

const RestaurantCard=(props)=>{
    const {resdata}=props;
    console.log("resentered");
    // console.log(resdata);

    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}=resdata?.data;
    
    return(
        <div style={{backgroundColor:"#f0f0f0"}} className="RestaurantCard">
           
           <img  className="restaurantlogo" src={CDN_URL+ cloudinaryImageId} />
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>Rs.{costForTwo/100}</h4>
           <h4>{deliveryTime} minutes</h4>
           
        </div>
    )
}

export default RestaurantCard