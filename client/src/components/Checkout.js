import React from 'react';
import { connect } from 'react-redux';
import {addToShoppingCart, removeFromCart} from "../Redux/Actions/Shopcart";
import './css/Checkout.css'
import {Card, Button, Table} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid  } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function Checkout({ products, subTotal,  addNewItemToCart, removeItemFromCart}) {
  const classes = useStyles();

  console.log(products);
   
  const sumarCantidad = (product) =>{
      addNewItemToCart( product) 
  }
  const restarCantidad = (product) =>{
      removeItemFromCart(product)
  }
  // const createOrderOnline = (userId,idProducto,cantidad) => {
  //   createOrderOnline(userId = 1,idProducto, cantidad=subTotal)
  // }
  return (
<div >

 <div className='right'>
   
    <Paper className={classes.paper}> 
    <thbody >
    <h1 className='summary'>SUMMARY</h1> 
    <tr>
    <td><h4>SUBTOTAL:</h4> </td>
  
     <td><h4>${subTotal}</h4></td>
    </tr> 

         <tr >
         <td><h4>SHIPPING</h4></td>

         <td><h4>FREE</h4></td>
        </tr> 
    <tr>
  
     </tr> 
  
    </thbody > 
    <h1 className='shipping'></h1>
    <h1>TOTAL:  ${subTotal}</h1>
</Paper>
<div className='confirm'>
  <Button  size="lg" variant="outline-warning" >NEXT </Button>
  <Button size="lg"  variant="outline-warning" style={{marginLeft:'10px'}}><Link to='/products' style={{color: "#ffc107",textDecoration: 'none'}}>CANCEL</Link></Button>
  </div>
  </div>

<div>
<h1 className='shop-cart'>Shopping Cart</h1>
  <Grid item xs={6}>
{ products.map(({product, count})=>(   
    <div className='Card'>
     <Card key={product.id}>
     {/* <Card.Header>{product.name}</Card.Header> */}
    <Card.Body>
    <Table >
    <tbody>
        <tr>
        
  
  <th className = 'card-body-img'>
    <img   style={{width: "100%"}} src={product.img} alt=''/>
    </th>
    <th>
     <h4>{product.name}</h4>
     <h5>{product.description}</h5>
     <h4>${product.price}</h4>
     </th>
     <th>
     <div className="contador">
    <span>{count}</span>
    <Button  size="sm" style={{height: '10%'}}  variant="warning"  disabled={count <= 0} onClick={(e) => restarCantidad(product)}>-</Button>
    <Button size="sm" style={{height: '10%'}}  variant="warning" onClick={(e) => sumarCantidad(product)}>+</Button>
    </div>
    </th>
    </tr>
    </tbody>
    </Table>
    </Card.Body>
    </Card>
    </div>)
)}


  </Grid>
  </div>





</div>
  );
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
    
    addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart( itemToAdd)),
    removeItemFromCart: ( item) => dispatch(removeFromCart(item)),
    // createOrderOnline: (userId,idProducto,cantidad) =>dispatchEvent(createOrder(userId,idProducto,cantidad))
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);