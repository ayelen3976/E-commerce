import React from "react";

import { Card, CardMedia, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "./css/ProductCard.module.css";
import { connect } from "react-redux";
import {addToShoppingCart, removeFromCart} from "../Redux/Actions/Shopcart";

function ProductCard({
  id,
  name,
  description,
  price,
  classes,
  image,
  stock,
  deshabilitado,
  addNewItemToCart,
  
}) {
  const handleCartAddClick = () => {
    addNewItemToCart({
      id,
      name,
      description,
      price,
      image,
      stock,
    });
  };
  if (deshabilitado == "true") {
    return (
      <Card className={classes.item}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <div className={classes.info} className={styles.productCard}>
            <h6>{name}</h6>
            <p>{description}</p>
            <p className={styles.price}>${price}</p>
            <p>Sin stock</p>

            <div>
              <Link to={"/products/" + id}>
                <button>
                  <i class="fas fa-bars"></i>
                </button>
              </Link>

              <button onClick={handleCartAddClick}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <div className={classes.info} className={styles.productCard}>
          <h6>{name}</h6>
          <p>{description}</p>
          <p className={styles.price}>${price}</p>
          <p>Stock: {stock}</p>

          <div>
            <Link to={"/products/" + id}>
              <button>
                <i class="fas fa-bars"></i>
              </button>
            </Link>
            <Link to={"/products/" + id}>
              <button>
                <i class="fas fa-shopping-cart"></i>
              </button>{" "}
            </Link>
            <button onClick={handleCartAddClick}>
              <i class="fas fa-heart"></i>
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
