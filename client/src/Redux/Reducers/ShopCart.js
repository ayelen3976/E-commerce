import  { SHOP_CART, DELETE_SHOP_CART, POST_ORDER, PUT_ORDER} from '../Actions/actiontypes';

export const initialState={

    cart: {}
}



export default function shopcartReducer(state=initialState, action){

    switch (action.type) {
        case  SHOP_CART :
        return{
            ...state,

            cart:{ ...state.cart, [action.item.id]: (state.cart[action.item.id] || 0) + 1 } 

        };
       case   DELETE_SHOP_CART : {
           const cart = { ...state.cart, [action.item.id]: state.cart[action.item.id] - 1 };
           if (cart[action.item.id] <= 0) {
               delete cart[action.item.id];
           }


        return{
            ...state,
           cart
        };

       }

       case POST_ORDER:{
        return{...state}
       }
       case PUT_ORDER:{
           return {...state}
       }
     default:
    return state;
                }}


              