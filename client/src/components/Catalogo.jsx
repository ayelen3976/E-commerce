import React from 'react';
import ProductCard from './ProductCard';
import style from './css/Producto.module.css';

export default function Catalogo ({ productos, addProduct }) {
    return (
        <div>
            <h1>Bienvenidos</h1>
            <h2>Mirá nuestro catálogo de productos</h2>
            <div className={style.contentProducts}>
            {productos.map(p => <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                // img={p.img}
                addProduct={() => addProduct(p.id)}
                id={p.id}
            /> )}
            </div>
        </div>
    );
};
