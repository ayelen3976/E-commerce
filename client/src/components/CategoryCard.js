import React from 'react';

import { Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// function CategoryCard({ id, name, description ,classes, image}) {
function CategoryCard({ id, name, description ,classes,image}) {
    // console.log(image)
    return (
        <Card className={classes.item}>
            {/* cambiar la imagen en la base de datos */}
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <div className={classes.info}>
                    <h6>{name}</h6>
                    <p>{description}</p>
                    <Link to={'/category/' + id}><button>Ver Productos</button></Link>
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
})(CategoryCard);