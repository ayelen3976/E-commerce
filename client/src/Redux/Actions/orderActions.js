import axios from 'axios';
import {GET_ORDERS ,GET_ORDERS_LINE,EDIT_ORDER_STATE,FIND_ORDER_BY_PK} from './actiontypes';

export function getOrders() {
    const url = `/order`
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch({ type: GET_ORDERS, payload: res.data })
            })
    }
}


export function getOrdersLine(orderId){
    const url = `/order/${orderId}`
    return(dispatch) =>{
        axios.get(url)
            .then(res=>{
                dispatch({type: GET_ORDERS_LINE , payload:res.data.products})
            })
    }
}
// //MODIMIFAMOS EL ESTADO DE UNA ORDEN
export function editOrderState(estado, orderId) {
    const url = `/order/${orderId}`
    return (dispatch) => {
        axios.put(url, { estado })
            .then(res => {
                dispatch({ type: EDIT_ORDER_STATE, payload: { estado, orderId } })
                console.log(estado,orderId)
            })
    }
}

// //DEVUELVO UNA ORDEN EN PARTICULAR

export function searchOrderByPk(orderId) {
    const url = `/order/${orderId}`
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch({ type: FIND_ORDER_BY_PK, payload: response })
            })
    }

}
