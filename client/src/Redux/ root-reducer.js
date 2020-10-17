import { combineReducers } from 'redux';
import productReducer from './Reducers/Listproducts'
import categoryReducer from './Reducers/Listcategory'
const rootReducer = combineReducers({
    productsP: productReducer,
    categoryP: categoryReducer
  });
 export default rootReducer;