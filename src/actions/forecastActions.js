import get from '../utils/api';
import * as types from './actionTypes';
export const fetchData = (place) => (dispatch) => {
    return get(place)
        .then((response) => {
            if (response.status && response.status !== 200) {
                dispatch({ type: types.FETCH_DATA_REJECTED, payload: response }); // Error handling
                dispatch({ type: types.ITEMS_IS_LOADING, loading: false });
            } else {
                dispatch({ type: types.FETCH_DATA_FULFILLED, payload: response });
                dispatch({ type: types.ITEMS_IS_LOADING, loading: false });
            }
        })
        .catch((err) => {
            dispatch({ type: types.FETCH_DATA_REJECTED, payload: err }); // Error handling
            dispatch({ type: types.ITEMS_IS_LOADING, loading: false });
        });
};

export const isloading = (value) => (dispatch) => {
    dispatch({ type: types.ITEMS_IS_LOADING, loading: value });
};
