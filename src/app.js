import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error"



const root=ReactDOM.createRoot(document.getElementById("root"));



const stylecard={color:"#f0f0f0",};


const Applayout=()=>{// TOP LEVEL COMPONENT
   
    return (
    <div  className="app">
        <Header/>
        <Body/>
    </div>//APP LEVEL DIV 

)
    }

const approuter=createBrowserRouter([{
path:"/",
element:<Applayout />,
errorElement:<Error/>,
},{
    path:"/about",
    element:<About />,
    errorElement:<Error/>,
}]);   
    


    

root.render(<RouterProvider router={approuter} />);
