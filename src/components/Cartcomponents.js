import {CDN_URL} from "../utils/config";

const Cartcomponents=(props)=>{
    const {resdata}=props;
    // console.log("resetaurant card entered");
    console.log(resdata);

    const{imageId,name,price}=resdata?.card?.info;
    
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-purple-50" >
           
           <img  className="restaurantlogo" src={CDN_URL+ imageId} />
           <h3 className="font-bold text-2xl">{name}</h3>
           <h4>Price-Rs.{price/100}</h4>

           
        </div>
    )
}

export default Cartcomponents;