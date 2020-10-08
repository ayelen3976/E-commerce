import React from 'react';
import style from './css/ProductCard.module.css';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function ProductCard (props) {
    
    return (
          <div className={style.productCard}>
              <h1>Product Card</h1>
              <figure> <img src={ props.img } alt={ props.name }/> </figure>
              <div className={style.infoProducto}>
                <h5 className={style.titulo}> { props.name } </h5>
                <span className={style.precio}>$ { props.price } </span>
                <p className={style.descripcion}> { props.description } </p>
                <div>
                <Link to={'/producto/' + props.id}><button onClick={props.addProduct} className={style.btn1}> Ver detalle </button></Link>
                <Link to={'/producto/' + props.id}><button onClick={props.addProduct} className={style.btn1}> Añadir al carrito </button></Link>
                </div>
              </div>
          </div>
    );
};

