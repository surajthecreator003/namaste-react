import {useState,useEffect} from "react";

const useOnline=()=>{
    const[status,setStatus]=useState(false);

    const onlineHandler=()=>{setStatus(false)};
    
    const offlinehandler=()=>{setStatus(true)};

    useEffect(()=>{window.addEventListener("online",onlineHandler);

                   window.addEventListener("offline",offlinehandler);

                   }
                   ,[])
    return status

}

export default useOnline;