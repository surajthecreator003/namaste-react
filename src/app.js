import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,} from "react-router-dom";
import {RouterProvider,} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {useContext} from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Cart from "./components/Cart";
import ProfileFunctionalComponent from "./components/ProfileFunctionalComponent";
import ProfileClassComponent from "./components/ProfileClassComponent";
import {lazy} from "react";
import {Suspense} from "react";
import Shimmer from "./components/ShimmerUI";
import Testing from "./components/Testing";
import Userdata from "./utils/UseContext";



const root=ReactDOM.createRoot(document.getElementById("root"));

const InstaMart=lazy(()=>{return import("./components/InstaMart")});

const About=lazy(()=>{return import("./components/About")})

const stylecard={color:"#f0f0f0",};


const Applayout=()=>{// TOP LEVEL COMPONENT
   
    return (
    
        <Userdata.Provider value={{name:"Suraj",title:"Mallick ©️"}}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Userdata.Provider>
    

)
    }

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<Error/>,
        children:[{
            path:"/about",
            element:<Suspense fallback={<Shimmer />}><About/></Suspense>,
            errorElement:<Error/>,
            children:[{
                path:"profile",
                element:<ProfileClassComponent />,
                errorElement:<Error/>,
            },
            ]
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
},
{
            path:"/Cart",
            element:<Cart/>,
            errorElement: <Error/> ,
},
{
            path:"/Instamart",
            element:<Suspense fallback={<Shimmer />}><InstaMart/></Suspense>,
            errorElement: <Error/> ,
},
{       
            path:"/testing",
            element:<Suspense fallback={<Shimmer />}><Testing/></Suspense>,
            errorElement:<Error/>,
}
],
},
]
);   
    


    

root.render(<RouterProvider router={approuter} />);
