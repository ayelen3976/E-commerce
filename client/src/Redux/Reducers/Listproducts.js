import {GET_PRODUCTS} from '../Actions/actiontypes';
const initialState = {};
export default function productReducer(state=initialState, action){
  switch(action.type){
    case GET_PRODUCTS:
        return{
          ...state,
          products: action.payload
        }
   
        default: 
        return state;
      }

}

