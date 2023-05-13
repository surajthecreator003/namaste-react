import {useSelector} from "react-redux";
import Cartcomponents from "./Cartcomponents";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";


const Cart=()=>{
    
    const cartitems=useSelector((store)=>{return store.cart.items});
    const dispatch=useDispatch();
    const clear=()=>{dispatch(clearCart())};
    return <><h1 className="font-bold border-2 border-red-400">Cart Items-{cartitems.length}</h1>
             <button className="font-bold bg-orange-500" onClick={clear}>Clear Cart😒</button>
              <div className="flex flex-wrap">{cartitems.map((z)=>{return <Cartcomponents resdata={z}/>})}</div>
            </>
}

export default Cart;
