import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import middleware from  './middleware';
import {history} from 'root/create-history';
import { connectRouter } from 'connected-react-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = void 0;
store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;

