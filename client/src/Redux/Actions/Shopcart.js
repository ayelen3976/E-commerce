import { SHOP_CART } from './actiontypes'
import { DELETE_SHOP_CART} from './actiontypes'
import axios from 'axios';

const URL = "http://localhost:4000"



export const addToShoppingCart  = (userId, newItemToAdd) => dispatch => {

	axios
		.post(`/user/${userId}/cart`, {
    })
		.then(res =>
			dispatch({
                type: SHOP_CART,
                item: newItemToAdd,
			})
		)
};
  

  /*  export  const addToShoppingCart = (newItemToAdd) => ({
        type: SHOP_CART,
        item: newItemToAdd
   }) */

   export  const removeFromCart = (newItemToAdd) => ({
    type: DELETE_SHOP_CART,
    item: newItemToAdd
})
