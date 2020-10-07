import React from 'react';
import ProductCard from './ProductCard';
import style from './css/Producto.module.css';

export default function Producto ({ productos, addProduct }) {

    return (
        <div className={style.contentProducts}>
            {productos.map(p => <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                // img={p.img}
                addProduct={() => addProduct(p.id)}
            /> )}
        </div>
    );
};