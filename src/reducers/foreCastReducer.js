import * as types from '../actions/actionTypes';

const forecastReducer = (state = { data: null, status: null }, action) => {
    switch (action.type) {
    case types.FETCH_DATA_FULFILLED:
        return {
            ...state,
            data: action.payload,
            status: 'success'
        };
    case types.FETCH_DATA_REJECTED:
        return {
            ...state,
            status: 'failed'
        };
    default:
        return state;
    }
};
export default forecastReducer;
