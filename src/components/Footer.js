import React from 'react'
import {useContext} from "react";
import Userdata from "../utils/UseContext.js";

const Footer = () => {
  
  return (
    <div><h1>This Site is developed by {useContext(Userdata).name} {useContext(Userdata).title}</h1>
         
    </div>
  )
}

export default Footer;


//usethis below line to implement and  check  whether Userdata.Consumer wether works or Noe
//<h1> And Also by <Userdata.Consumer>{(value)=>{return <p>{value.name} {value.title}</p>}}</Userdata.Consumer></h1>
