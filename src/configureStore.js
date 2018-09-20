import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import commitments from './modules/commitments';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    commitments
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
