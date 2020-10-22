import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {addToShoppingCart, removeFromCart} from "../Redux/Actions/Shopcart";
import styles from "./css/ProductCard.module.css";

function ProductCard({id,name,description,price, classes,image,stock,addNewItemToCart}) { 

   const [sub_stock, setStock] = useState(stock)
   const [message, setmessage] = useState('not more stock')

   toast.configure()
   const notify=()=>{
    toast.warn('Product Add in the Cart Successfully!!', {position:toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
}
  const handleCartAddClick = () => {
    if(sub_stock !== 0) {
      setStock(sub_stock - 1)
    }
    console.log(sub_stock)

    addNewItemToCart({
      id,
      name,
      description,
      price,
      image,
      stock,

    });

    notify()
  };
  
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <div className={classes.info} className={styles.productCard}>
          <h6>{name}</h6>
          <p>{description}</p>
          <p className={styles.price}>${price}</p>
          <p  class="text-danger">stock: {sub_stock===0? message: sub_stock} </p>
           <div>
            <Link to={"/products/" + id}>
              <button>
                <i class="fas fa-bars"></i>
              </button>
            </Link>
            <button onClick={handleCartAddClick} disabled={sub_stock===0 }>
              <AddShoppingCartIcon/>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


const mapDispatchToProps = (dispatch) => ({
  addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart(itemToAdd)),
  removeFromCart: (item) => dispatch(removeFromCart(item))
});



export default connect(null, mapDispatchToProps)(withStyles({
    item: {
      minHeight: "400px",
      maxWidth: "250px",
      textAlign: "center",
      margin: "3em",
      boxSizing: "border-box",
    },
    media: {
      minHeight: "250px",
      minWidth: "250px",
    },
    info: {
      alignContent: "center",
      justifyItems: "center",
    },
  })(ProductCard));
