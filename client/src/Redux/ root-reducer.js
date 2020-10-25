import { combineReducers } from 'redux';
import productReducer from './Reducers/Listproducts'
import categoryReducer from './Reducers/Listcategory'
import shopcartReducer from './Reducers/ShopCart'
import orderReducer from './Reducers/orderReducer'
import reviewReducer from './Reducers/reviewReducer';
import buscarProducto from './Reducers/buscarProducto'
import promedioEstrellas from './Reducers/promedioEstrellas'



const rootReducer = combineReducers({
    productsP: productReducer,
    categoryP: categoryReducer,
    shopP:shopcartReducer ,
    ordersP: orderReducer,
    reviewsP: reviewReducer,
    busquedaP:buscarProducto,
    estrellasP:promedioEstrellas

    
  });
 export default rootReducer;