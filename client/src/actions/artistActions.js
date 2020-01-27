import axios from 'axios';
import { ADD_ARTIST } from './types';

console.log("artistActions.js beginning");
export const addArtist = (artist) => dispatch => {
    axios
    .post('/api/artistsforms', artist)
    .then(res => 
        dispatch({
            type: ADD_ARTIST,
            payload:res.data
        }))
        //this works
        console.log("artistActions.js beginning - - artist added");
}

