import axios from 'axios';
import {EDIT_USER ,DELETE_USER} from './actiontypes';

export function editUser(userId,data) {
    const url = `user/${userId}`
    return async (dispatch) => {
        await axios.put(url,data)
            .then(res => {
                console.log(res)
                dispatch({ type:EDIT_USER, payload: res.data })
            })
    }
}

export function deleteUser(userId) {
    const url = `user/${userId}`
    return async (dispatch) => {
        await axios.delete(url)
            .then(res => {
                console.log(res)
                dispatch({ type:DELETE_USER, payload: res.data })
            })
    }
}