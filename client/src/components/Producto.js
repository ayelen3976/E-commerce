//Este componente muestra la info/detalle del producto en particular
import React from 'react';
import { Link } from 'react-router-dom';


function Producto({ name, price, image, description }) {
    //console.log(props.productos[match.params].id);
    return (
        <div>
            <h1>Detalle Card</h1>
            <figure> <img src={image} alt={name} /> </figure>
            <div>
                <h5> {name} </h5>
                <span >$ {price} </span>
                <p> {description} </p>
                <div>
                    <Link to={'/products'}><button > Ver detalle </button></Link>
                    <Link to={'/products'}><button > Añadir al carrito </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Producto;