import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,} from "react-router-dom";
import {RouterProvider,} from "react-router-dom";
import {Outlet} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantsMenu from "./components/RestaurantsMenu";



const root=ReactDOM.createRoot(document.getElementById("root"));



const stylecard={color:"#f0f0f0",};


const Applayout=()=>{// TOP LEVEL COMPONENT
   
    return (
    <div  className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>//APP LEVEL DIV 

)
    }

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<Error/>,
        children:[{
            path:"/about",
            element:<About />,
            errorElement:<Error/>,
    },{
            path:"/contact",
            element:<Contact />,
            errorElement:<Error/>,
},{
            path:"/",
            element:<Body />,
            errorElement:<Error/>,
},{
            path:"/restaurant/:id",
            element:<RestaurantsMenu/>,
            errorElement: <Error/> ,
},],
},
{       
        path:"/about",
        element:<About />,
        errorElement:<Error/>,
}]
);   
    


    

root.render(<RouterProvider router={approuter} />);
