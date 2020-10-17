import React from 'react'
import { Link } from 'react-router-dom';
//Externas
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Componentes
import Order from './Order';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function OrderDetails({orderArray , boolArray}) {
    const classes = useStyles();
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
               <Link to='/admin/'>
                    <Button variant="contained" color="primary">Volver al menu</Button>
                </Link>
            </Grid>
        )
    }else {
        return (
            <Grid container direction="column" justify="center" alignItems="center" >
               {
                   orderArray.map(order =>{
                    //    console.log((order.products)[0])
                       return (
                           <Order
                               key={order.id}
                               id={order.id}
                               orderId={order.orderId}
                               productId={order.productId}
                               cantidad={order.cantidad}
                               precio={order.precio}
                               booleanOrder={true}
                           />
                       )
                   })
                }
                <div className={classes.root}>
                <Link to='/admin/orders'>
                    <Button variant="contained" color="primary">Volver a ordenes</Button>
                </Link>
                </div>
            </Grid>
        )
    }
}

export default OrderDetails;
