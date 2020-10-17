import { SHOP_CART } from './actiontypes'
/* const URL= "http://localhost:4000"
export const Shopcart= userId => dispatch => {
	axios
		.post(`${URL}/user/${userId}/cart`)
        .then(res =>
            dispatch({
                type: SHOP_CART,
                payload: res.data
            })
        )

    };
    */

    // We are getting the newItemToAdd from the mapDispatchToProps in ProductCard.js file
   export  const addToShoppingCart = (newItemToAdd) => ({
        type: SHOP_CART,
        item: newItemToAdd
   })