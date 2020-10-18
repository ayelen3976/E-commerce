import axios from 'axios';
import {GET_ORDERS} from './actiontypes';

export function getOrders() {
    const userId = 1;
    const url = `/order`
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch({ type: GET_ORDERS, payload: res.data })
            })
    }
}