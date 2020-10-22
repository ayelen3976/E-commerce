import { FIND_REVIEWS} from '../Actions/actiontypes';
const initialState = [];

function reviewReducer(state = initialState, {type , payload}) {
    switch (type) {
        case FIND_REVIEWS: return {
            ...state,
            reviews: payload
          }  
        default:
            return state;
    }

}

export default reviewReducer;