import React from "react";
import {useState} from "react";
import {useContext} from "react";
import Userdata from "../utils/UseContext";


//Implemented basic Accordion Button and Updated Accordion Logic from basic Accordion to Controlled Accordion 
const About1=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility === "about1" ? <button onClick={()=>{setVisibility("")}}  className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility("about1")}} className="bg-yellow-500">Show</button> } {visibility==="about1"  && <p>Para - 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}

const About2=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility === "about2" ? <button onClick={()=>{setVisibility("")}}  className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility("about2")}} className="bg-yellow-500">Show</button> } {visibility==="about2"  && <p>Para - 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}

const About3=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility === "about3" ? <button onClick={()=>{setVisibility("")}}  className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility("about3")}} className="bg-yellow-500">Show</button> } {visibility==="about3"  && <p>Para - 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}


const Testing=()=>{
    // const a=useContext(Userdata);

    const [inputText,setInputText]=useState("");
    const [visibility,setVisibility]=useState("");
    const a=useContext(Userdata);
    console.log(a);

    return <>
    <h1 className="font-bold ">Accordion Button Testing:</h1>
    <About1 visibility={visibility} setVisibility={setVisibility}/>
    <About2 visibility={visibility} setVisibility={setVisibility}/>
    <About3 visibility={visibility} setVisibility={setVisibility}/>
    <br></br><br></br>
    <p className="font-bold">Context Testing:</p>
    <p>Put some value here to change footer and Test how Context API Works:</p>
    <input className="border-indigo-500/100 border-2" type="text" placeholder="put what you want to change" name="inputvar" value={inputText} onChange={(e)=>{setInputText(e.target.value);a.setDataValues({title:e.target.value})}}></input>
    <br></br>
    <br></br>
    </>
 }
 export default Testing;