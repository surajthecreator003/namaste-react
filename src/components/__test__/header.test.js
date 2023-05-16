import Header from "../../components/Header";
import {getAllByTestId, render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("header loading test",()=>{
const header=render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
console.log(header);
const logo=header.getAllByTestId("logo");
console.log(logo);

expect(logo[0].src).toBe("https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png");
});