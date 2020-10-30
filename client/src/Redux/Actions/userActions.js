import axios from 'axios';
import {GET_USERS ,EDIT_USER_STATE} from './actiontypes';

//Busca todas las reviews de un producto
export function getUsers() {
    const url = `user`
    return async (dispatch) => {
        await axios.get(url)
            .then(res => {
                console.log(res)
                dispatch({ type:GET_USERS, payload: res.data })
            })
    }
}

export function editUserState(userId) {
    const url = `auth/promote/${userId}`
    return async (dispatch) => {
        await axios.post(url)
            .then(res => {
                console.log(res)
                dispatch({ type:EDIT_USER_STATE, payload: res.data })
            })
    }
}

export function deleteUser(userId) {
    const url = `/user/${userId}`
    return async (dispatch) => {
        await axios.delete(url)
    //         .then(res => {
    //             console.log(res)
    //             dispatch({ type:EDIT_USER_STATE, payload: res.data })
    //         })
    }
}