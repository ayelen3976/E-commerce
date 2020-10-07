import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Producto from './components/Producto';
import {productos} from './data.js';
import { useState } from 'react';


function App() {

  const [prod, setProd] = useState([]);

  function onSearch(){

  }

  // Traer data del modelo producto
  function addProduct(producto) {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
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

  function onSearch(prod){
    setProd(oldProd => [...oldProd, prod]);
  }


  return (
    <div className="App">
      <header>
        <Nav onSearch={onSearch}/>
      </header>
      <main>
         {/* <Producto producto={ product }/> */}
         <Producto products={addProduct} productos={productos}/>
      </main>
    </div>
  );
}

export default App;
