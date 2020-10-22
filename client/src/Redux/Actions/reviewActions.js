import axios from 'axios';
import {FIND_REVIEWS} from './actiontypes';

//Busca todas las reviews de un producto
export function getReviews() {
    const idProduct = 1
    const url = `products/${idProduct}/review`
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch({ type:FIND_REVIEWS, payload: res.data })
            })
    }
}