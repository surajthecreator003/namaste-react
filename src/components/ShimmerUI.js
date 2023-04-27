const Shimmer=()=>{
    return (<div className="restaurant-list">
        {Array(15).fill("abc").map((x,index)=>{return(
            <div key={index} className="shimmer-card">
                
            </div>
        )
        })}
    </div>)
}

export default Shimmer;