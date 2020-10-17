import React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import {ShopcartTotal} from '../Redux/Reducers/ShopCart'; 

 function Checkout() {
    return(
        <div>
        <Nav /> 
        <div > 
     {/*    <div className='summary'>
        <div><p>Subtotal:{ totalItemsInCart }</p> </div>
        </div>
        */}
        <span>holaa</span>
        </div> 
        </div>
    )
}
const mapStateToProps = (state) => ({
    totalItemsInCart: ShopcartTotal(state.shopP.cart)
})
export default connect(mapStateToProps)(Checkout);