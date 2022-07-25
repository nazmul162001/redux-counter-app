import { createStore } from "redux";
import counterReducer from "./services/reducer/counterReducer";

const store = createStore(counterReducer)

export default store;