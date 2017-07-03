import {history} from 'root/create-history';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';

const middleware = [
    thunk,
    routerMiddleware(history), // for dispatching history actions
];

middleware.push(
    createLogger()
);

export default middleware;

