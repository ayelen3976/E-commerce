import React from 'react';
import ProductCard from './ProductCard';
import Catalogo from './Catalogo';
import style from './css/Producto.module.css';

export default function Producto ({ productos, addProduct }) {
    return (
        <div>
            {productos.map(p => <Catalogo
                key={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                // img={p.img}
                addProduct={() => addProduct(p.id)}
                id={p.id}
            /> )}
        </div>
    );
};



//EL POSTA SERÍA ÉSTE:

// export default function Producto ({ addProduct }) {

//     return (
//         <div className={style.contentProducts}>
//             {addProduct.map(p => <ProductCard
//                 key={p.id}
//                 name={p.name}
//                 price={p.price}
//                 description={p.description}
//                 // img={p.img}
//                 addProduct={() => addProduct(p.id)}
//                 id={p.id}
//             /> )}
//         </div>
//     );
// };
