import axios from 'axios';
import {FIND_REVIEWS} from './actiontypes';

//Busca todas las reviews de un producto
export function getReviews(productId =1) {
    console.log("PRODUCTO ID EN AXIOS: " ,productId)
    const url = `products/${productId}/review`
    return async (dispatch) => {
        await axios.get(url)
            .then(res => {
                console.log(res)
                dispatch({ type:FIND_REVIEWS, payload: res.data })
            })
    }
}