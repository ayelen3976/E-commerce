import React from 'react';
//import product from '../../../api/src/models/Product';

export default function Producto ({ name, precio, stock, descripcion }) {
    return (
      <div className="Producto">
          <h5 className="titulo">{name}</h5>
          <button onClick={addPrduct} className="btn1">Añadir al carrito</button>
          <div className="infoProducto">
              <figure> <img src={foto} alt={product.name}/> </figure>
              <span className="precio">{precio}</span>
              <span className="cantidad">{stock}</span>
              <p className="descripcion">{descripcion}</p>
          </div>
      </div>
    );
};