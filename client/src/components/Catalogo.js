import { Grid } from '@material-ui/core';
import React from 'react';
import CategoryCard from './Category/CategoryCard';
import ProductCard from './Producto/ProductCard';


//Una lista de products cards
function Catalogo({ productsData, categoryBool }) {
    if (!categoryBool) {
        return (
            <div>

                <Grid container spacing={9} justify='center'>
                    { 
                    productsData?.map((producto, index) => {
                        // if(producto.stock>0){
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
                            //  )}  else {

                            //         return (
                            //          <ProductCard
                            //             key={producto.id}
                            //             id={producto.id}
                            //             name={producto.name} //en nuestra base de datos se llama name
                            //             description={producto.description}
                            //             price={producto.price}
                            //             image={producto.img}
                            //             stock={"00"}
                            //             deshabilitado={"true"}
                            //         />
                            //                 )
                            
                            //    }
                        }
                        
                    )}
                </Grid>

            </div>
        );
    }
    

    return (
        <div>

            <Grid container spacing={9} justify='center'>
                {productsData?.map((categoria, index) => {
                    return (
                        <CategoryCard
                            key={categoria.id}
                            id={categoria.categoryID}
                            name={categoria.name} //en nuestra base de datos se llama name
                            description={categoria.description}
                            image = {categoria.img}
                        />
                    )
                })}
            </Grid>

        </div>
    )


};


export default Catalogo;