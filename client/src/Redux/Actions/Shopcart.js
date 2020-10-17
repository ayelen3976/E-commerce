import { SHOP_CART } from '../consts/actionTypes'

export default function agregarAlCarrito(newData,id) {
    const URL= "http://localhost:4000"
    return function (dispatch) {
        return  axios({
            method: 'POST',
            url: `${URL}/users/${id}/cart`,
            data: {
                product: newData
            }
        }).then(res => {
            dispatch({
                type: SHOP_CART ,
                payload: res.data
            })
        })      
        .catch((err) => {
            console.log(err)
        })
    }
}