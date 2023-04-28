import {LOGO_URL} from "../utils/config";
import  { useState,useEffect } from "react";
import {Link} from "react-router-dom";


//Dummy Login Button Code Working
// const authenticateUser=()=>{return false;}
//{(authenticateUser())?(<button>Log In</button>):(<button>Log Out</button>)} 

const Title=()=>{
    return( 
    <a href ="/" className="logocontainer">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </a>
            )
    
}

const Header=()=>{
    const [isLogStatus,setIsLogStatus]=useState(true);

    useEffect(()=>{console.log("use effect of Header called")},[])

    return(
        <div className="header">

            <Title />
            


            <div className="Navitems">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">ContactUs</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                </ul>
                
            </div>

            
            {
               isLogStatus? <button onClick={()=>{setIsLogStatus(false)}}>Loggd In</button> : <button onClick={()=>{setIsLogStatus(true)}}>Log Out</button>
            }
                
            
            
        </div>
    )
}

export default Header;