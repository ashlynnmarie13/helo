//HOW DO I KNOW WHATS FROM REDUX VS REACT REDUX
import { createStore } from "redux";
import reducer from "./reducer";

//creating a store from your reducer.
export default createStore(reducer);
