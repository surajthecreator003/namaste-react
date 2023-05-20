import Body from "../Body";
import {render,waitFor} from "@testing-library/react";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import { RESTAURANT_DATA } from "../mocks/dummydata";
import "@testing-library/jest-dom";
import {fireEvent} from "@testing-library/react"


global.fetch=jest.fn(()=>{
  return Promise.resolve({json:()=>{return Promise.resolve(RESTAURANT_DATA)}})
});

test("shimmer test first",async ()=>{

  const body=render(<StaticRouter>
    <Provider store={store}><Body /></Provider>
    </StaticRouter>);

    console.log(body);
    const shimmer=body.getByTestId("shimmer"); 

    expect(shimmer.children.length).toBe(15) 

    await waitFor(()=>{expect(body.getByTestId("search-btn"))})

    const inputbox=body.getByTestId("input-box")
    fireEvent.change(inputbox,{target:{value:"food"}})

    const searchbtn=body.getByTestId("search-btn")
    fireEvent.click(searchbtn)

    const filter=body.getAllByTestId("rescards")
    expect(filter.length).toBe(3)
})