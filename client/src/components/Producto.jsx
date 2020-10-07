import React from 'react';
import ProductCard from './ProductCard';


export default function ProductCard ({ products, addProduct }) {

    return (
        <div className='producto'>
            {products.map(p => <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                img={p.image}
                addProduct={() => addProduct(p.id)}
            /> )}
        </div>
    );
};