import { GET_ORDERS ,GET_ORDERS_LINE } from '../Actions/actiontypes';
const initialState = [];

function reducer(state = initialState, {type , payload}) {
    switch (type) {
        case GET_ORDERS: return {
            ...state,
            orders: payload
          }
        case GET_ORDERS_LINE: return {
            ...state,
            orderLine: payload
        }     
        default:
            return state;
    }

}

export default reducer;