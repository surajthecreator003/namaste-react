import React from "react";


class ProfileClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log("Child Constructor Called");
    }
    
    render(){
        console.log("Child Render Called");
        return <div><h1>Profile getting rendered inside Outlet of About ...using ClassBased Component</h1>
                    <h1>Name:{this.props.name}</h1>
                    <h1>Count: {this.state.count }</h1>
                    <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click for class based Count</button>
                    
        </div>;

    }
    componentDidMount(){
        console.log(" Child Component did mount entered");
    }

        }
        
export default ProfileClassComponent;