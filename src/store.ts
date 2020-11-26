import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReduce";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootStore = ReturnType<typeof rootReducer>;

export default store;
