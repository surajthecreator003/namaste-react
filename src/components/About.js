import React from "react";
// import {Outlet} from "react-router-dom";
import ProfileClassComponent from "./ProfileClassComponent";
import ProfileFunctionalComponent from "./ProfileFunctionalComponent";

// const About=()=>{
//     return (<div><h1>About What huh</h1>
//            <ProfileClassComponent name="Suaraj"/>
//            <ProfileFunctionalComponent  name="Suraj"/>
//     </div>)
// }


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("PARENT Constructor Called");
    }
 render(){
    console.log("PARENT render Called");

    return(<div><h1>About What huh</h1>
    <ProfileClassComponent name="Suaraj"/>
    <ProfileClassComponent name="Suaraj"/>
    </div>)
 }

 componentDidMount(){
    console.log(" Parent Component did mount entered");
}

}





export default About;