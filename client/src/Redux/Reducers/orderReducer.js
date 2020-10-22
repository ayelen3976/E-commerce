import { GET_ORDERS ,GET_ORDERS_LINE ,EDIT_ORDER_STATE,FIND_ORDER_BY_PK} from '../Actions/actiontypes';
const initialState = [];


function orderReducer(state = initialState, {type , payload}) {
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
            state.orders.map(order =>{
                if(order.id === payload.orderId){
                    order.estado = payload.estado
                }
            })
            return state;
            // ...state,
            // cart: { ...state.cart, [action.item.id]: (state.cart[action.item.id] || 0) + 1 } 
            // return {...state,
            //     orders: {...state.orders,[payload.id]: (state.orders[payload.id])}
            // }     
        default:
            return state;
    }

}

export default orderReducer;