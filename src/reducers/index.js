import { combineReducers } from 'redux';

import foreCastReducer from './foreCastReducer';
import itemsIsLoading from './loadingReducer';

export default combineReducers({ foreCast: foreCastReducer, itemsIsLoading });
