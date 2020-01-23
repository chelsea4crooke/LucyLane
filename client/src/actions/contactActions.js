import axios from 'axios';
import { ADD_CONTACT } from './types';


export const addContact = (contact) => dispatch => {
    axios
    .post('/api/forms', contact)
    .then(res => 
        dispatch({
            type: ADD_CONTACT,
            payload:res.data
        }))
        //this works
        console.log("contact added");
}

