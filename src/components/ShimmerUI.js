const Shimmer=()=>{
    return (<div data-testid="shimmer" className="flex flex-wrap flex-row  ">
        {Array(15).fill("abc").map((x,index)=>{return(
            <div  key={index} className="w-52 h-52 bg-gray-400 m-5">
                
            </div>
        )
        })}
    </div>)
}

export default Shimmer;