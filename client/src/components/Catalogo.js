import { Grid } from '@material-ui/core';
import React from 'react';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';


//Una lista de products cards
function Catalogo({ productsData, categoryBool }) {
    if (!categoryBool) {
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
    }

    return (
        <div>

            <Grid container spacing={9} justify='center'>
                {productsData.map((categoria, index) => {
                    return (
                        <CategoryCard
                            key={categoria.id}
                            id={categoria.categoryID}
                            name={categoria.name} //en nuestra base de datos se llama name
                            description={categoria.description}
                        />
                    )
                })}
            </Grid>

        </div>
    )


};

export default Catalogo;