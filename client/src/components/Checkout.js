import React from 'react';
import { connect } from 'react-redux';
import {addToShoppingCart, removeFromCart,postCart, putCart} from "../Redux/Actions/Shopcart";
import './css/Checkout.css'
import {  Table} from 'react-bootstrap'
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import { updateStock} from '../Redux/Actions/Listproducts';




 function Checkout({ products, subTotal,  addNewItemToCart, removeItemFromCart,postToMyOrder,   putToMyOrder, updateStock, usuario}) {



  


  const handleCheckout = ()=>{
    if (!usuario){
      alert('registrate campeon')
    } else{
      postToMyOrder(products, usuario.id)
       putToMyOrder(products, usuario.id)
      alert('go to checkout payment')
    //  console.log(products, usuario.id ,'idUser ya estoy registrado jsjs')
    }
  
  }
   
  const sumarCantidad = (a) =>{
    
      addNewItemToCart(a) 
       updateStock(a,  "reduce")

  }
  const restarCantidad = (a) =>{
      removeItemFromCart(a)
       updateStock(a, "increase")
  }

  var total = 0
 products.map(i => total = products[i] + total) 

  return (
<div  >
<Nav/>
<div className="right">
  
<div> <h1 className='name-right'>Your Cart</h1> </div>
<div>

{products.map(({product, count})=>(  
<div className='items'>
<h5 className='productName'>{product.name}({count})<h5 className='productCount'>${product.price * count}</h5> </h5>


</div>
)
)}

</div>

<div className='itemsprice'>  
  <h4 className='Subtotal'>Subtotal: </h4> 
  <h4 className='subPrice'>${subTotal}</h4>
</div>
<div className='buttonNext'>
<Button    onClick={handleCheckout} block >NEXT </Button>
</div>
<div className='Cancel'>
<Link to='/products' style={{color: "black",textDecoration: 'none'}}><Button  style={{marginLeft:'10px'}} block>CANCEL</Button></Link>
</div>
</div>

<div>
<Grid item xs={6}>
{ products.map(({product, count})=>(  

    <div className='check' >  
    <Table >
    <tbody>
        <tr>
        
  
  <th className = 'card-body-img'>
    <img   style={{width: "100%"}} src={product.img} alt=''/>
    </th>
    <th>
     <h4>{product.name}</h4>
     <p>only stock:{product.stock}</p>
     </th>
     <th>
     <div className="contador">
  
  
    <Button className='count'  size="sm" style={{height: '10%', margin:'10px'}}  disabled={count <= 0} onClick={(e) => restarCantidad(product)}>-</Button>
    <span>{count}</span>
<Button className='count' size="sm" style={{height: '10%', margin:'10px'}} onClick={(e) => sumarCantidad(product)} disabled={product.stock <= 0}>+</Button> 
{
 console.log(product.stock, count)
 
}
    </div>
    </th>
    </tr>
    </tbody>
    </Table>
  
    </div>)
)}

</Grid>
  </div>





</div>
  );
}
const mapStateToProps = (state) =>{

  const usuario= state.auth.user.user;

  let subTotal = 0;
  const products = Object.keys(state.shopP.cart).map((key) => {
  const product = state.productsP.products.find((product) => parseInt(product.id) === parseInt(key));
  const count = state.shopP.cart[key];
  subTotal += product.price * count; 
  return {
  product,
  count,
};});
console.log(products, 'this')
  return { products, subTotal, usuario};
 
}

const mapDispatchToProps = (dispatch) => ({
    
    addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart( itemToAdd)),
    removeItemFromCart: ( item) => dispatch(removeFromCart(item)),
    postToMyOrder:(items,id)=> dispatch(postCart(items,id)),
    putToMyOrder:(items, id)=> dispatch(postCart(items,id)),
    updateStock:(item, flag)=> dispatch(updateStock(item, flag))

  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);