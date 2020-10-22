import { SHOP_CART, DELETE_SHOP_CART, POST_ORDER, PUT_ORDER} from './actiontypes'
import axios from 'axios';

const URL = "http://localhost:4000/"



export function postCart(totalData,userId){
  return (dispatch)=> {
       totalData.forEach((p)=>{
        return axios({method:"post",url:`/user/${userId}/cart`,

        data:{cantidad:p.count, id:p.product.id, telefono:123123, direccion:"mirave2"}})
        .then((res)=>{
          console.log("Finished");
          dispatch({type:POST_ORDER})})
        .catch((err)=>{console.log(err)}) 
      })



  }
}

export function putCart(datatotal, userId){
  return (dispatch) => {
    datatotal.forEach((a)=>{
      return axios.put( `/user/${userId}/cart`,{
      cantidad:a.count, 
      productId:a.product.id}
     ).then((res)=>{
        console.log("neeaaar");
        dispatch({type:PUT_ORDER})})
      .catch((err)=>{console.log(err)}) 
      })
   }
}



   export  const addToShoppingCart = (newItemToAdd) => ({
        type: SHOP_CART,
        item: newItemToAdd
   }) 



   export  const removeFromCart = (newItemToAdd) => ({
    type: DELETE_SHOP_CART,
    item: newItemToAdd
})