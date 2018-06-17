import { compose, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import reducer from './reducers';

let middleware;

if (process.env.NODE_ENV === 'prod') {
    middleware = applyMiddleware(thunk);
} else {
    middleware = applyMiddleware(thunk, createLogger());
}
let store = compose(createStore)(reducer, middleware);

export default store;
