import React from "react";


class ProfileClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            }
        }
        console.log("Child Constructor Called");
    }
    
    render(){
        console.log("Child Render Called");
        return <div>
                    <h1>Name:{this.state.userInfo.name}</h1>
                    <img src={this.state.userInfo.avatar_url} />
                       
        </div>;

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/surajthecreator003");
        const jsondata= await data.json();
        console.log(jsondata);
        this.setState({userInfo:jsondata})
        console.log("Child Component did mount called");

        this.timer=setInterval(()=>{console.log("oh yeah");},1000)
    }
    componentDidUpdate(){
        console.log("Component did update of child");
        
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component will unmount of child");
    }

        }
        
export default ProfileClassComponent;