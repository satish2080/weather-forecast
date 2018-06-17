import configureStore from 'redux-mock-store';
import expect from 'expect';

import { FETCH_DATA_FULFILLED, ITEMS_IS_LOADING } from './actionTypes';

import thunk from 'redux-thunk';
require('es6-promise').polyfill();
require('isomorphic-fetch');

import { fetchData, isloading } from './forecastActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should execute fetchData and return the required action type', () => {
    const store = mockStore({});
    return store.dispatch(fetchData('london'))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(FETCH_DATA_FULFILLED);
        });
});
it('should execute isLoading return the required action type', () => {
    const store = mockStore({});
    store.dispatch(isloading(true));
    const actions = store.getActions();
    expect(actions[0].type).toEqual(ITEMS_IS_LOADING);
});
