// import React from 'react'

// import { Grid } from '@material-ui/core';

// function Order({id,userId,estado}){

//   return (
//     <div>
//        <Grid container  direction="row" justify="center" alignItems="center" spacing={24}>
//               <p> Order ID: {id} </p>
//               <p> User ID: {userId} </p>
//               <p> Estado De Orden: {estado} </p>
//         </Grid>
//     </div>
//   )
// }

// export default Order;

///PRUEBA

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    minWidth: '800px',
    minHeight: '100px'
    }
}));

export default function Order({id,userId,estado,booleanOrder,orderId,productId,cantidad,precio}) {
  const classes = useStyles();
  if(booleanOrder=== false){

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm container>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    ESTADO: {estado}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    USER ID: {userId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ORDER ID: {id}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <Link to={`/admin/order/${id}`} >Ver detalle de orden</Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                {/* <Typography variant="subtitle1">$19.00</Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm container>
              <Grid item xs container direction="raw" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Lista de ordenes
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    PRODUCTO ID: {productId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ORDER ID: {orderId}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    CANTIDAD: {cantidad}
                  </Typography>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    PRECIO: ${precio}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                {/* <Typography variant="subtitle1">$19.00</Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}