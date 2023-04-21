import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";


const root=ReactDOM.createRoot(document.getElementById("root"));



const stylecard={color:"#f0f0f0",};


const Applayout=()=>{// TOP LEVEL COMPONENT
    console.log(<Body/>)
    return (
    <div  className="app">
        <Header/>
        <Body/>
    </div>//APP LEVEL DIV 

)
    }

    

root.render(<Applayout />);
