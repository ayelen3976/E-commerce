import { GET_ORDERS } from '../Actions/actiontypes';
const initialState = [];

function reducer(state = initialState, {type , payload}) {

    if (type === GET_ORDERS) {
        return {
            ...state,
            orders: payload
          }
    }

    return state;
}

export default reducer;