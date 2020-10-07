import React from 'react';
//import product from '../../../api/src/models/Product';
import { producto } from '../../../api/src/models/Product';
import style from './Producto.module.css';

// Era con fetch?
function componentDidMount() {
    fetch({ producto })
        .then(response => response.json())
        .then(data => console.log(data));
}   

export default function Producto ({ name, precio, stock, descripcion }) {

    return (
      <div className={style.productCard}>
          <h5 className={style.titulo}> { name } </h5>
          <button onClick={addPrduct} className={style.btn1}> Añadir al carrito </button>
          <div className={style.infoProducto}>
              <figure> <img src={foto} alt={ product.name }/> </figure>
              <span className={style.precio}> { precio } </span>
              <span className={style.cantidad}> { stock } </span>
              <p className={style.descripcion}> { descripcion } </p>
          </div>
      </div>
    );
};