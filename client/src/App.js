import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Producto from './components/Producto';
import ProductCard from './components/ProductCard';
import {productos} from './data.js';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import DetalleCard from './components/DetalleCard';
// import axios from "axios";


function App() {

  const [prod, setProd] = useState([]);

  // Traer data del modelo producto
  function addProduct(producto) {
    fetch('http://localhost:3000/products')
        .then((data) => {
          const producto = {
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image
          }
        });
  }   

  function onSearch(prodSearch){
    fetch('http://localhost:3000/products')
        .then((data) => {
          if(data !== undefined){
            const producto = {
              id: data.id,
              name: data.name,
              description: data.description,
              price: data.price,
              image: data.image
            };
            setProd(oldProd => [...oldProd, prodSearch]);
          } else {
            alert("Producto no encontrado");
          }
        
        });
  }

  // function onSearch(prodSearch){
  //   setProd(oldProd => [...oldProd, prodSearch]);
  // }

  function onFilter(productoId) {
    let producto = prod.filter(p => p.id === parseInt(productoId));
    if(producto.length > 0) {
        return producto[0];
    } else {
        return null;
    }
  }

  function handleChange(event) {    
    setProd({value: event.target.value});  
  }

  return (
    <div className="App">
        <Route 
          path='/'
          render = {() => <Nav onSearch={onSearch} /> }
        />
        
        <Route
          exact
          path='/producto'
          //render={() => <Producto addProduct={addProduct}/>}   ------->  ÉSTE SERÍA EL POSTA
          render={() => <Producto addProduct={addProduct} productos={productos}/>}  // --> TOMA DATOS DE DATA.JS
        />

        <Route
          path='/producto/:id'
          render={() => <DetalleCard addProduct={addProduct} productos={productos}/>}
        />

        <Route 
          exact
          path='/'
          render= {() => <Catalogo addProduct={addProduct} productos={productos}/>}
        />
    </div>
  );
}

export default App;