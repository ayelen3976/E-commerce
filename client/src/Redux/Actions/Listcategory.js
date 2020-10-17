import axios from 'axios';
import {GET_CATEGORY} from './actiontypes';

 export default function Getcategory(){
   //  const URL= "http://localhost:4000"
 return function (dispatch){
    return axios.get(`/products/category`)
    .then(res=>{
         dispatch({type: GET_CATEGORY, payload: res.data})
        console.log("Data returned: ", res);
    })
}
}
 