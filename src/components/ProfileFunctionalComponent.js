import React from "react";
import {useState} from "react";
import {useEffect} from "react";




const ProfileFunctionalComponent=(props)=>{



   let [count,setCount]=useState(0);

   useEffect(()=>{const timer=setInterval(()=>{console.log("inside Useffect callback function")},1000 ) ;
                  return ()=>{clearInterval(timer);console.log("Component unmount")}
               }
                  ,[])

   return <div>
      <h1>Profile getting rendered inside Outlet of About ...using Functional Component</h1>
      <h1> Name:{props.name}</h1>
      <h1>Likes: {count}</h1>
      <button onClick={()=>{setCount(count+1);}}>functional profile click</button>
      </div>
}

export default ProfileFunctionalComponent;