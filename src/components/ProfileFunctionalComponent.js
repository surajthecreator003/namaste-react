import React from "react";
import {useState} from "react";
import {useEffect} from "react";




const ProfileFunctionalComponent=(props)=>{



   const [count,setCount]=useState(0);

   useEffect(()=>{const timer=setInterval(()=>{console.log("inside Useffect callback function")},1000 ) ;
                  return ()=>{clearInterval(timer);console.log("Component unmount")}
               }
                  ,[])

   return <div>
      <h1>Profile getting rendered inside About ...using Functional Component.. also using outlet in app.js</h1>
      <h1> Name:{props.name}</h1>
      <h1>Likes: {count}</h1>
      <button classname="bg-green-500" onClick={()=>{setCount(count+1);}}> click fot Like</button>
      </div>
}

export default ProfileFunctionalComponent;