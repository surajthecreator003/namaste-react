import React from "react";
import ReactDOM from "react-dom/client";

// const newLocal = "Namaste React ";
// const heading=React.createElement("h1",{class:"clr"},["helllllo Mfers"]);

// console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const root=ReactDOM.createRoot(document.getElementById("root"));





// const Headingjsx=React.createElement("h1",{class:"clr"},"React Element");
// console.log(Headingjsx);

// const Headingjsx1=()=> <h2 className="clr">React Component</h2>;
// console.log(Headingjsx1);

// const TrailReactelement=()=> React.createElement("h2",{class:"clr"},"React Element Returned by arrow Function");
// console.log(TrailReactelement);

// function Lol(){
// return React.createElement("h2",{class:"clr"},"React Element Returned by Normal  Function");
// }
// console.log(Lol);

// const a1=<h1 class="clr">helllo</h1>;


// const Jsxinsidereact=()=>React.createElement("div",{class:"clr"},"From insiide arrow function returning rect element will it be a functional component");
// console.log(Jsxinsidereact);//gets printed as js object

// const val="{using }";
// const elm= <h1>Lets {val} <Headingjsx1/> </h1>;

// const A2=()=><h1 className="clr">heyyy Non functional jsx element</h1>;
// const r=React.createElement("h1",{},<A2/>);
const stylecard={color:"#f0f0f0",};

const Header=()=>{
    return(
        <div className="header">

            
            <div classname="logocontainer">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>


            <div className="Navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard=()=>{
    return(
        <div style={{backgroundColor:"#f0f0f0"}} className="RestaurantCard">
           
           <img  className="restaurantlogo" src="https://b.zmtcdn.com/data/pictures/5/20637085/bae67f22a9acee3cdc5ce73b2fbdc373_o2_featured_v2.jpg?output-format=webp" />
           <h3>Hali mane Batuta</h3>
           <h4>Lacha Parathan</h4>
           <h4>4.5</h4>
           <h4>38 mins</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="Body">
            <div className="SearchBar">
                Search
            </div>
            <div className="RestaurantConatainer">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>

        </div>
    )
}

const Applayout=()=>{// TOP LEVEL COMPONENT
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>//APP LEVEL DIV 

)
    }

root.render(<Applayout />);
