import Header from "../../components/Header";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";


//test for Header Logo Loading
test("header loading test",()=>{
const header=render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
console.log(header);
const logo=header.getAllByTestId("logo");
console.log(logo);

expect(logo[0].src).toBe("https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png");
});




//test for online status loading
test("for online Logo Loading",()=>{
    const online=render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>)
    const checkonline=online.getAllByTestId("onlinecheck");
    console.log(checkonline);

    expect(checkonline[0].innerHTML).toBe('✅')
})




//cart should have 0 items on loading of screen
test("checking cart items",()=>{
    const cart=render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    const checkcart=cart.getByTestId("cartcheck");
    console.log(checkcart);
    
    expect(checkcart.innerHTML).toBe("Checkout 🛒0")

})