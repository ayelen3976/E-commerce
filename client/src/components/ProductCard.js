import React from 'react';

import { Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function ProductCard({id, name, description, price, classes, image ,stock}) {
    return (
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <div className={classes.info}>
                    <h6>{name}</h6>
                    <p>{description}</p>
                    <p>Price {price}$</p>
                    <p>Stock: {stock}</p>
                    <Link to={'/products/' + id}><button>Ver detalle</button></Link>
                    <Link to={'/products/' + id}><button>Añadir al carrito</button> </Link>
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