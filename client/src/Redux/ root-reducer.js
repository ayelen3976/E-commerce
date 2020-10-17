import { combineReducers } from 'redux';
import productReducer from './Reducers/Listproducts'
import categoryReducer from './Reducers/Listcategory'
import shopcartReducer from './Reducers/ShopCart'
const rootReducer = combineReducers({
    productsP: productReducer,
    categoryP: categoryReducer,
    shopP:shopcartReducer 
  });
 export default rootReducer;