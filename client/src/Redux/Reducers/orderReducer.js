import { GET_ORDERS ,GET_ORDERS_LINE ,EDIT_ORDER_STATE,FIND_ORDER_BY_PK} from '../Actions/actiontypes';
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
        case EDIT_ORDER_STATE:
            state.map(order =>{
                if(order.id === payload.orderId){
                    order.estado = payload.estado
                }
            })
            return state;     
        default:
            return state;
    }

}

export default reducer;