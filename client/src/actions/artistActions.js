import axios from 'axios';
import { ADD_ARTIST } from './types';

console.log("artistActions.js beginning");
export const addArtist = (artist) => dispatch => {
    axios
    .post('/api/artistforms', artist)
    .then(res => 
        dispatch({
            type: ADD_ARTIST,
            payload:res.data
        }))
        //this works
        console.log("artistActions.js beginning - - artist added");
}

