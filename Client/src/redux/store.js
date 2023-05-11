import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;
