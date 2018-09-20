import { createStore, applyMiddleware, combineReducers } from "redux";
import commitments from "./modules/commitments";

// const createStoreWithMiddleware = applyMiddleware()(createStore); // apply logger to redux

const reducer = combineReducers({
  commitments
});

const configureStore = initialState => createStore(reducer, initialState);
export default configureStore;
