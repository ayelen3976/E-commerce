import axios from 'axios';
import { GET_PRODUCTS ,GET_PRODUCTS_BY_ID, STOCK } from './actiontypes';

export default function GetProducts() {
   //  const URL= "http://localhost:4000"
   return  async (dispatch)=> {
      await axios.get('/products')
         .then(res => {
            dispatch({ type: GET_PRODUCTS, payload: res.data })
            // console.log("Data returned: ", res);
         })
         .catch(err => {
            console.log({ message: "ERROR EN AXIOS", error: err })
         })
   }
}

export  function GetProductsById(productId) {
   //  const URL= "http://localhost:4000"
   return  async (dispatch)=> {
      await axios.get(`/products/${productId}`)
         .then(res => {
            dispatch({ type: GET_PRODUCTS_BY_ID, payload: res.data })
            // console.log("Data returned: ", res);
         })
         .catch(err => {
            console.log({ message: "ERROR EN AXIOS", error: err })
         })
   }
}

export function updateStock(item, flag){
   return {
      type:STOCK,
      payload: item, flag
   }
    
}


 



