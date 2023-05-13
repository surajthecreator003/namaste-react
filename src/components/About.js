import React from "react";
import {Outlet} from "react-router-dom";
import ProfileClassComponent from "./ProfileClassComponent";
import ProfileFunctionalComponent from "./ProfileFunctionalComponent";
import {Link} from "react-router-dom";


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

    return(<div>
            <h1>About Me You Wanna Know Huh</h1>
            <h1>My Phone Number-<span className="font-bold">8249300520</span></h1>
            <h1 className="font-bold">Email:surajhustlermallick@gmail.com</h1>
           <Outlet />
           <Link to="profile"><button className="bg-yellow-400 font-bold border-2 border-yellow-800">Click To Load Profile Picture </button></Link>
           <br></br>
           <button onClick={()=>{this.setState({count:this.state.count+1})}} className="text-bold bg-lime-300 border-2 border-green-600 font-bold">Like Button</button>
           <p>Total Likes :{this.state.count}</p>
    </div>)
 }

 componentDidMount(){
    console.log("Parent Component did mount called");
}

}





export default About;