import { SHOP_CART } from '../Actions/actiontypes';

export const initialState={
    cart: [],
    user: null,
}
export const ShopcartTotal=(shop)=>
shop?.reduce((amount, item) => item.price + amount, 0)

export default function shopcartReducer(state=initialState, action){
    console.log(action);
    switch (action.type) {
        case  SHOP_CART :
        return{
            ...state,
            cart: [...state.cart, action.item],
        };

     default:
    return state;
                }   }
                


              