import React from 'react';
import style from './css/ProductCard.module.css';

export default function ProductCard (props) {

    return (
          <div className={style.productCard}>
              <figure> <img src={ props.img } alt={ props.name }/> </figure>
              <div className={style.infoProducto}>
                <h5 className={style.titulo}> { props.name } </h5>
                <span className={style.precio}>$ { props.price } </span>
                <p className={style.descripcion}> { props.description } </p>
                {/* <button onClick={props.addProduct}>Agregar</button> */}
                <button onClick={props.addProduct} className={style.btn1}> Añadir al carrito </button>
              </div>
          </div>
    );
};