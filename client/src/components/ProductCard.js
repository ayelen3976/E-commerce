import React from 'react';

import { Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './css/ProductCard.module.css';

function ProductCard({id, name, description, price, classes, image ,stock, deshabilitado}) {
    
    if(deshabilitado=="true"){
        return (
            <Card className={classes.item} >
            
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <div className={classes.info} className={styles.productCard}>
                    <h6>{name}</h6>
                    <p>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <p>Sin stock</p>
                    
                    <div>
                        <Link to={'/products/' + id}><button><i class="fas fa-bars"></i></button></Link>
                        
                        <button><i class="fas fa-heart"></i></button>
                    </div>
                    
                </div>
            </CardContent>
        </Card>

        )
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
                        <Link to={'/products/' + id}><button><i class="fas fa-bars"></i></button></Link>
                        <Link to={'/products/' + id}><button><i class="fas fa-shopping-cart"></i></button> </Link>
                        <button><i class="fas fa-heart"></i></button>
                    </div>
                    
                </div>
            </CardContent>
        </Card>
    )
}


export default withStyles({
    
    item: {
        minHeight: '400px',
        maxWidth: '250px',
        textAlign:"center",
        margin: '3em',
        boxSizing: "border-box"
    },
    media: {
        minHeight: '250px',
        minWidth: '250px',
    },
    info:{
        alignContent: 'center',
        justifyItems: 'center'
    }
})(ProductCard);