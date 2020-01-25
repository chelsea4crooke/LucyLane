import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import contactReducer from './contactReducer';
import artistReducer from './artistReducer';

export default combineReducers({
    item: itemReducer,
    artist: artistReducer,
    contact: contactReducer
});


