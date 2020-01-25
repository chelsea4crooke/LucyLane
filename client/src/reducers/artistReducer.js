import { ADD_ARTIST } from '../actions/types';
const initialState ={
    artists: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ARTIST:
            return{
                ...state,
                artists: [action.payload, ...state.artists]
            };
        default:
            return state;
    }
}