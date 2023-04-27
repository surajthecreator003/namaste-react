import {LOGO_URL} from "../utils/config";
import  { useState,useEffect } from "react";


//Dummy Login Button Code Working
// const authenticateUser=()=>{return false;}
//{(authenticateUser())?(<button>Log In</button>):(<button>Log Out</button>)} 



const Header=()=>{
    const [isLogStatus,setIsLogStatus]=useState(true);

    useEffect(()=>{console.log("use effect of Header called")},[])

    return(
        <div className="header">

            
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL} />
            </div>


            <div className="Navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

            
            {
               isLogStatus? <button onClick={()=>{setIsLogStatus(false)}}>Loggd In</button> : <button onClick={()=>{setIsLogStatus(true)}}>Log Out</button>
            }
                
            
            
        </div>
    )
}

export default Header;