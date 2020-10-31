//Este componente muestra la info/detalle del producto en particular
import React from 'react';
import { Grid } from '@material-ui/core';

import ProductCard from '../Components/Producto/ProductCard';


function CategoryDetails({ products }) {
    //console.log(props.productos[match.params].id);
    return (
        <div>
                <Grid container spacing={9} justify='center'>

                    {products.map((producto) => {
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

export default CategoryDetails;