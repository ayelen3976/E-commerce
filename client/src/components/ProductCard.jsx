import React from 'react';

export default function ProductCard (props) {

    return (
          <div className={style.productCard}>
              <h5 className={style.titulo}> { props.name } </h5>
              <button onClick={addProduct} className={style.btn1}> Añadir al carrito </button>
              <div className={style.infoProducto}>
                  <figure> <img src={foto} alt={ props.name }/> </figure>
                  <span className={style.precio}> { props.price } </span>
                  <p className={style.descripcion}> { props.description } </p>
                  <button onClick={props.addProduct}>Agregar</button>
              </div>
          </div>
    );
};