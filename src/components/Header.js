import {LOGO_URL} from "../utils/config";

const Header=()=>{
    return(
        <div className="header">

            
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL} />
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

export default Header;