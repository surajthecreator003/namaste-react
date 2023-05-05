import {useState,useEffect} from "react";
import { MENU_ITEMS_URL } from "./config";

const useFetchRestaurantData=(id)=>{

    const [restaurantMenu,setRestaurantMenu]=useState({});
    const [restaurantMenuItems,setRestaurantMenuItems]=useState([]);
    
    async function getRestaurantsInfo(){
        const data=await fetch(MENU_ITEMS_URL+id);
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


    return [restaurantMenu,restaurantMenuItems];
}




export default useFetchRestaurantData;