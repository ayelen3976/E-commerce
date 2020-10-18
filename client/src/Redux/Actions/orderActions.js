import axios from 'axios';
import {GET_ORDERS ,GET_ORDERS_LINE} from './actiontypes';

export function getOrders() {
    const url = `/order`
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch({ type: GET_ORDERS, payload: res.data })
            })
    }
}

export function getOrdersLine(userId){
    const url = `/user/${userId}/cart`
    return(dispatch) =>{
        axios.get(url)
            .then(res=>{
                dispatch({type: GET_ORDERS_LINE , payload:res.data})
            })
    }
}
