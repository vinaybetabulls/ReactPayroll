import { createStore } from "redux";
import changeState from "../reducers";


const store = createStore(changeState); // set 1
export default store;