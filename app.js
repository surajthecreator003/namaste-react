import React from "react";
import ReactDOM from "react-dom/client";

// const newLocal = "Namaste React ";
// const heading=React.createElement("h1",{class:"clr"},["helllllo Mfers"]);

// console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const root=ReactDOM.createRoot(document.getElementById("root"));





const Headingjsx=React.createElement("h1",{class:"clr"},"React Element");
console.log(Headingjsx);

const Headingjsx1=()=> <h2 className="clr">React Component</h2>;
console.log(Headingjsx1);

const TrailReactelement=()=> React.createElement("h2",{class:"clr"},"React Element Returned by arrow Function");
console.log(TrailReactelement);

function Lol(){
return React.createElement("h2",{class:"clr"},"React Element Returned by Normal  Function");
}
console.log(Lol);

const a1=<h1>helllo</h1>;


const Jsxinsidereact=()=>React.createElement("div",{class:"clr"},"From insiide arrow function returning rect element will it be a functional component");
console.log(Jsxinsidereact);//gets printed as js object

const val="{using }";
const elm= <h1>Lets {val} <Headingjsx1/> </h1>;

const A2=()=>(<h1 className="clr">heyyy Non functional jsx element</h1>);
const r=React.createElement("h1",{},<A2/>);

root.render(<A2 />);
