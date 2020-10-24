import React from 'react';
import { connect } from 'react-redux';
import {addToShoppingCart, removeFromCart,postCart, putCart} from "../Redux/Actions/Shopcart";
import './css/Checkout.css'
import { Button, Table} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import { updateStock} from '../Redux/Actions/Listproducts';


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

 function Checkout({ products, subTotal,  addNewItemToCart, removeItemFromCart,postToMyOrder,   putToMyOrder, updateStock}) {
  const classes = useStyles();




  const handleCheckout = ()=>{
    postToMyOrder(products, '1')
    putToMyOrder(products, '1')
   console.log(products, 'nowput')
  }
   
  const sumarCantidad = (a) =>{
    
      addNewItemToCart(a) 
       updateStock(a,  "reduce")

  }
  const restarCantidad = (a) =>{
      removeItemFromCart(a)
       updateStock(a, "increase")
  }

  return (
<div >
<Nav/>
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
  <Button  size="lg" variant="outline-warning"onClick={handleCheckout} >NEXT </Button>
  <Button size="lg"  variant="outline-warning" style={{marginLeft:'10px'}}><Link to='/products' style={{color: "#ffc107",textDecoration: 'none'}}>CANCEL</Link></Button>
  </div>
  </div>

<div>
<h1 className='shop-cart'>Shopping Cart</h1>
  <Grid item xs={6}>
{ products.map(({product, count})=>(  

    <div className='Card'>  
     <Paper className={classes.paper} key={product.id}>

   
     <Paper className={classes.paper}> 
    <Table >
    <tbody>
        <tr>
        
  
  <th className = 'card-body-img'>
    <img   style={{width: "100%"}} src={product.img} alt=''/>
    </th>
    <th>
     <h4>{product.name}</h4>
     <p>stock:{product.stock}</p>
     <h5>{product.description}</h5>
     <h4>${product.price}</h4>
     </th>
     <th>
     <div className="contador">
    <span>{count}</span>
    <Button  size="sm" style={{height: '10%'}}  variant="warning"  disabled={count <= 0} onClick={(e) => restarCantidad(product)}>-</Button>
<Button size="sm" style={{height: '10%'}}  variant="warning" onClick={(e) => sumarCantidad(product)} disabled={product.stock <= 0}>+</Button> 
{
 console.log(product.stock, count)
 
}
    </div>
    </th>
    </tr>
    </tbody>
    </Table>
    </Paper>
    </Paper>
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
console.log(products)
    return { products, subTotal };
};
const mapDispatchToProps = (dispatch) => ({
    
    addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart( itemToAdd)),
    removeItemFromCart: ( item) => dispatch(removeFromCart(item)),
    postToMyOrder:(items,id)=> dispatch(postCart(items,id)),
    putToMyOrder:(items, id)=> dispatch(putCart(items,id)),
    updateStock:(item, flag)=> dispatch(updateStock(item, flag))

  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);