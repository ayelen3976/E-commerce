import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { product } from '../../api/src/models/Product';


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

function App() {
  return (
    <div className="App">
      <main>
         {/* <Producto producto={ product }/> */}
         <Producto products={addProduct}/>
      </main>
    </div>
  );
}

export default App;
