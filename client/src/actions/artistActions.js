import axios from 'axios';
import { ADD_ARTIST } from './types';


export const addArtist = (artist) => dispatch => {
    axios
    .post('/api/artistforms', artist)
    .then(res => 
        dispatch({
            type: ADD_ARTIST,
            payload:res.data
        }))
        //this works
        console.log("artist added");
}

