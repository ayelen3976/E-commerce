import React,{ useState }  from 'react';
import {  Button } from 'react-bootstrap'
import Nav from './Nav';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {addToShoppingCart, removeFromCart} from "../Redux/Actions/Shopcart";


function Checkout({ products, subTotal,  addNewItemToCart, removeItemFromCart}) {
    

    console.log(products);
   
    const sumarCantidad = (product) =>{
        addNewItemToCart( 1, product) 
    }
    const restarCantidad = (product) =>{
        removeItemFromCart(1, product)
    }
    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={20}>
                <div className='summary'>
                    <div><p>Subtotal:{subTotal}</p> </div>
                </div>
                <div>
              <h1>PRODUCTS</h1>
              <div>
           {products.map(({ product, count }) => (
              <p key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>stock:{product.stock}</p>
                <Button disabled={count <= 0} onClick={(e) => restarCantidad(product)}>-</Button>
                <span>{count}</span>
                <Button onClick={(e) => sumarCantidad(product)}>+</Button>
               </p>
            ))}
               
        </div>

     </div>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    let subTotal = 0;
    const products = Object.keys(state.shopP.cart)
        .map((key) => {
            const product = state.productsP.products.find((product) => parseInt(product.id) === parseInt(key));
            const count = state.shopP.cart[key];
            subTotal += product.price * count;

            return {
                product,
                count,
            };
        });

    return { products, subTotal };
};
const mapDispatchToProps = (dispatch) => ({
    
    addNewItemToCart: (id, itemToAdd) => dispatch(addToShoppingCart(id, itemToAdd)),
    removeItemFromCart: (id, item) => dispatch(removeFromCart(id, item)),
  });
  


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
