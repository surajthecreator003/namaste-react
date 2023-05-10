//prime number using reduce
// const a=[1,3,4,3,4,5,6 ,0,-1,8,9,9,6,7, 8,9];


// console.log(a.length);

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   }

// const o=a.filter((x)=>{
//     let sum=0;
//     if (x>0){
//         for(let i=1;i<=x;i++){
//             if(x%i==0){
//                 sum=sum+1;
//             }
//             else{
//                 continue;
//             }
//         }
//         if(sum==2){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else{
//         return false;
//     }
// });

// const o1=a.filter(
//     isPrime
// )

// console.log(o);
// console.log(o1);


// export const a;




// console.log(module);



//Accordion ButtonLogic
import React from "react";
import {useState} from "react";

const About1=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility ? <button onClick={()=>{setVisibility({about1:false,about2:false,about3:false})}}  className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility({about1:true,about2:false,about3:false})}} className="bg-yellow-500">Show</button> } {visibility && <p>Para - 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}

const About2=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility ? <button onClick={()=>{setVisibility({about1:false,about2:false,about3:false})}} className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility({about1:false,about2:true,about3:false})}} className="bg-yellow-500">Show</button> } {visibility && <p>Para - 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}

const About3=({visibility,setVisibility})=>{
    

    return <h1 className="border-4 border-indigo-500/100">{visibility ? <button onClick={()=>{setVisibility({about1:false,about2:false,about3:false})}} className="bg-yellow-500">Hide</button> : <button onClick={()=>{setVisibility({about1:false,about2:false,about3:true})}} className="bg-yellow-500">Show</button> } {visibility && <p>Para - 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> }</h1>
}


const Testing=()=>{


    const [visibility,setVisibility]=useState({about1:false,about2:false,about3:false});


   
    

    return <>
    <h1 className="font-bold ">Accordion Button Testing</h1>
    <About1 visibility={visibility.about1} setVisibility={setVisibility}/>
    <About2 visibility={visibility.about2} setVisibility={setVisibility}/>
    <About3 visibility={visibility.about3} setVisibility={setVisibility}/>
    </>
 }
 export default Testing;