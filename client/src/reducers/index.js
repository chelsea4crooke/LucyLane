import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import contactReducer from './contactReducer';

export default combineReducers({
    item: itemReducer,
    contact: contactReducer
});


