import { GET_PRODUCTS ,GET_PRODUCTS_BY_ID, STOCK } from '../Actions/actiontypes';
const initialState = {};


function UpdatedStore(allProducts, actionpayload, flag){


  const newStock = (stock) =>  { 

    if (flag === 'reduce') {
      return stock > 0 ? stock - 1 : stock
    } else {
         return stock + 1
    }
}

return allProducts?.map(item => {
   if (item.id === actionpayload.id) {
          return {
               ...item,

               stock: newStock(item.stock) 
          }
   }
   else 
       return item 
})

}
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCTS_BY_ID: 
      return {
        ...state,
        producto: action.payload
      }
      case STOCK: 
      console.log(action);
      return {...state,  products: UpdatedStore(state.products, action.payload, action.flag)}

    default:
      return state;
  }

}


