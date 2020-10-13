//Este componente muestra la info/detalle del producto en particular
import React from 'react';
import { Link } from 'react-router-dom';


function CategoryDetails({ name, image, description }) {
    //console.log(props.productos[match.params].id);
    return (
        <div>
            <h1>Detalle Category</h1>
            <figure> <img src={image} alt={name} /> </figure>
            <div>
                <h5>{name} </h5>
                <p>{description} </p>
                <div>
                    <Link to={'/category'}><button > Volver </button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;