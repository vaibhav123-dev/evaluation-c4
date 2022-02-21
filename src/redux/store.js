import { createStore, applyMiddleware } from "redux";
import { addData } from "./action";
import thunk from "redux-thunk";

export const store = createStore(addData, applyMiddleware(thunk));
