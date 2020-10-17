//Este componente muestra la info/detalle del producto en particular
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Producto.module.css';


function Producto({ name, price, image, description }) {
    //console.log(props.productos[match.params].id);
    return (
        <div> 
        <div className={styles.detailContent}>
            {/* <h1>Detalle Card</h1> */}
            <figure> <img src={image} alt={name} /> </figure>
            <div className={styles.infoContent}>
                <h5>{name}</h5>
                <span className={styles.price}>$ {price} </span>
                <p> {description} </p>
                <div className={styles.botonera}>
                    <Link to={'/products'}><button className={styles.buttons}> <i class="fas fa-bars"></i> </button></Link>
                    <Link to={'/products'}><button className={styles.buttons}> <i class="fas fa-shopping-cart"></i> </button></Link>
                    <button className={styles.buttons}> <i class="fas fa-heart"></i> </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Producto;