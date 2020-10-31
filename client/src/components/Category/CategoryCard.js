import React from 'react';
import { Link } from 'react-router-dom';
import '../Producto/styles.css'


function CategoryCard({ id, name, description ,image}) {

    return (
        <div class="card">
            <div className='upper-container'>
                <div className='image-container'>
                    <img className='card-image' src={image} />
                </div>
            </div>
            <div class="card-text">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div class="category-card-stats">
                <div class="stat">
                    <Link className='link' to={'/category/' + id}>Ver Productos</Link> 
                </div>
            </div>
        </div>
    )
}


export default CategoryCard;