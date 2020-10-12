import { Grid } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';


//Una lista de products cards
function Catalogo({ productsData }) {

    return (
        <div>

            <Grid container spacing={9} justify='center'>
                {productsData.map((producto, index) => {
                    return (
                        <ProductCard
                            key={producto.id}
                            id={producto.id}
                            name={producto.name} //en nuestra base de datos se llama name
                            description={producto.description}
                            price={producto.price}
                            image={producto.img}
                            stock={producto.stock}
                        />
                    )
                })}
            </Grid>

        </div>
    );

};

export default Catalogo;