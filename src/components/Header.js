import {LOGO_URL} from "../utils/config";
import  { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

//Dummy Login Button Code Working
// const authenticateUser=()=>{return false;}
//{(authenticateUser())?(<button>Log In</button>):(<button>Log Out</button>)} 

const Title=()=>{
    return( 
    <a href ="/" className="logocontainer">
                <img className="h-28 pt-2 ml-0" alt="logo" src={LOGO_URL} />
            </a>
            )
    
}

const Tick=()=>{
   const value= useOnline();
   if (value) {return <h1>❌</h1> }
   
   return <h1>✅</h1>
    
}

const Header=()=>{
    const [isLogStatus,setIsLogStatus]=useState(true);

    // useEffect(()=>{console.log("use effect of Header called")},[])

    return(
        <div className="flex justify-between bg-blue-50 shadow-lg">

            <Title />
            


            <div className="Navitems">
                <ul className="flex py-11 px-2">
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/About">About</Link></li>
                <li className="px-2"><Link to="/Contact">ContactUs</Link></li>
                <li className="px-2"><Link to="/Cart">Cart</Link></li>
                <li className="px-2"><Link to="/Instamart">InstaMart</Link></li>
                </ul>
                
            </div>

            <Tick className="px-2 py-11"/>

            
            {
               isLogStatus? <button onClick={()=>{setIsLogStatus(false)}}>Loggd In</button> : <button onClick={()=>{setIsLogStatus(true)}}>Log Out</button>
            }
                
            
            
        </div>
    )
}

export default Header;