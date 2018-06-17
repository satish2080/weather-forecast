import { ITEMS_IS_LOADING } from '../actions/actionTypes';
import expect from 'expect';
import reducer from './loadingReducer';

describe('loadingReducer', () => {
    it('should handle ITEMS_IS_LOADING', () => {
        const startFetch = {
            type: ITEMS_IS_LOADING,
            loading: false
        };
        expect(reducer({ loading: false }, startFetch)).toEqual(false);
        startFetch.loading = true;
        expect(reducer({ loading: false }, startFetch)).toEqual(true);
    });
});
