import { GET_PRODUCTS ,GET_PRODUCTS_BY_ID } from '../Actions/actiontypes';
const initialState = {};
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
    default:
      return state;
  }

}


