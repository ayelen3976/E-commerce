import axios from 'axios';
import {GET_PRODUCTS} from './actiontypes';

 export default function GetProducts(){
    //const URL= "http://localhost:4000"
 return function (dispatch){
    return axios.get(`${URL}/products`)
    .then(res=>{
         dispatch({type: GET_PRODUCTS, payload: res.data})
        console.log("Data returned: ", res);
    })
}
}

 



