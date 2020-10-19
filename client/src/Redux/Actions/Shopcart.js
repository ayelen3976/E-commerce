import { SHOP_CART } from './actiontypes'
import { DELETE_SHOP_CART} from './actiontypes'
import axios from 'axios';

const URL = "http://localhost:4000"



/* 
[{idProducto : id,cantidad :123},{prod2,candidad399}], idUser map(producto => {   producto.idProducto   producto.cantidad })  
 export const addToShoppingCart  = (userId, newItemToAdd) => dispatch => { 
     console.log(newItemToAdd.id)   console.log(USER ID${userId})  
  axios({    
     method: 'post',   
      url: /user/${2}/cart,     
      data: {       id: newItemToAdd.id,     
      cantidad: 150,      
      direccion: "avenida 2",      
      telefono: 12312321,     
       email: "asdsad@ahdasd.com"     }   })};
  */
  

   export  const addToShoppingCart = (newItemToAdd) => ({
        type: SHOP_CART,
        item: newItemToAdd
   }) 

   export  const removeFromCart = (newItemToAdd) => ({
    type: DELETE_SHOP_CART,
    item: newItemToAdd
})
