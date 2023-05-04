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
        this.state={
            count:0,
        }
        console.log("PARENT Constructor Called");
    }
 render(){
    console.log("PARENT render Called");

    return(<div><h1>About Me You Wanna Know Huh</h1>
           <ProfileClassComponent />
           
           <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click Me</button>
           <p>Count:{this.state.count}</p>
    </div>)
 }

 componentDidMount(){
    console.log("Parent Component did mount called");
}

}





export default About;