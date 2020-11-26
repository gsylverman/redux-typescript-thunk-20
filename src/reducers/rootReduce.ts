import { combineReducers } from "redux";
import nrReducer from "./nrReducer";

const rootReducer = combineReducers({
	nr: nrReducer
});

export default rootReducer;
