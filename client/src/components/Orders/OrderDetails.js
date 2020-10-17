import React from 'react'

//Externas
import { Grid } from '@material-ui/core';

//Componentes
import Order from './Order';


function OrderDetails({orderArray , boolArray}) {
    if(!boolArray){
        return (
            <Grid container direction="column" justify="center" alignItems="center" >
               {
                   orderArray.map(order =>{
                    //    console.log((order.products)[0])
                       return(
                            <Order key={order.id} id={order.id} userId={order.userId} estado={order.estado}  booleanOrder={false}/>
                       )
                   })
               }
            </Grid>
        )
    }else {
        return (
            <Grid container direction="column" justify="center" alignItems="center" >
               {
                   orderArray.map(order =>{
                    //    console.log((order.products)[0])
                       return(
                            <Order 
                                key={order.id} 
                                id={order.id} 
                                orderId={order.orderId} 
                                productId={order.productId}
                                cantidad={order.cantidad}
                                precio={order.precio}   
                                booleanOrder = { true }
                            />
                       )
                   })
               }
            </Grid>
        )
    }
}

export default OrderDetails;
