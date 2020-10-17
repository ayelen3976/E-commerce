import React from 'react';

import Nav from './Nav';
import { connect } from 'react-redux';
import { ShopcartTotal } from '../Redux/Reducers/ShopCart';

import Grid from '@material-ui/core/Grid';



function Checkout({ totalItemsInCart }) {
   
    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={20}>
                <div className='summary'>
                    <div><p>Subtotal:{totalItemsInCart}</p> </div>
                </div>
        </Grid>
    )
}
const mapStateToProps = (state) => ({
    totalItemsInCart: ShopcartTotal(state.shopP.cart)
}) 
export default connect(mapStateToProps)(Checkout);
