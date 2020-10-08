import React from 'react';
import style from './css/ProductCard.module.css';
import {Link} from 'react-router-dom';

export default function DetalleCard ({prodFilter}) {

    return (
          <div className={style.productCard}>
              <figure> <img src={ prodFilter.img } alt={ prodFilter.name }/> </figure>
              <div className={style.infoProducto}>
                <h5 className={style.titulo}> { prodFilter.name }</h5>
                <span className={style.precio}>$ { prodFilter.prod.price }</span>
                <p className={style.descripcion}> { prodFilter.prod.description }</p>
                {/* <Link to={`/producto/${props.id}`}><button onClick={props.addProduct} className={style.btn1}> Ver detalle </button></Link> */}
                <Link to={`/producto/${prodFilter.id}`}><button onClick={prodFilter.prod.addProduct} className={style.btn1}> Añadir al carrito </button></Link>
              </div>
          </div>
    );
};