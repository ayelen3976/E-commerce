//Este componente muestra la info/detalle del producto en particular
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import styles from './css/Producto.module.css';
import {addToShoppingCart} from "../Redux/Actions/Shopcart";
import Rating from '@material-ui/lab/Rating';
import axios from 'axios'



import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import promedioEstrellas from '../Redux/Actions/promedioEstrellas';

function Producto({id, name, price, image, description , stock,addNewItemToCart,promedio,promedioEstrellas}) {
    //console.log(props.productos[match.params].id);

    
    const handleCartAddClick = () => {
        addNewItemToCart({
            id,
            name,
            description,
            price,
            image,
            stock,
        });
    };
   
     
    const calificacion= async (idproduct)=>{
        const url = `/products/${idproduct}/review`
        await axios.get(url)
            .then((res)=>{
                console.log(res)
                promedioEstrellas(res.data)

        })
    }





        
useEffect(()=>{
    calificacion(id)
},[])


//--------------------------------------------
    if(stock > 1){

        return (
            <div> 
            <div className={styles.detailContent}>
                {/* <h1>Detalle Card</h1> */}
                <figure> <img src={image} alt={name} /> </figure>
                <div className={styles.infoContent}>
                    <h5>{name}</h5>
                    <span className={styles.price}>$ {price} </span>
                    <p> {description} </p>
                    <p> Stock: {stock}</p>
                    <Rating value={promedio} readOnly size="large" style={{margin:"0 auto"}} />
                    <div className={styles.botonera}>
                        <Link to={'/products'}><button className={styles.buttons}> <i class="fas fa-bars"></i> </button></Link>
                        <button onClick={handleCartAddClick} className={styles.buttons}>  <AddShoppingCartIcon /></button>   
                    </div>
                </div>
            </div>
            </div>
        );
    }else{
        return (
            <div> 
            <div className={styles.detailContent}>
                {/* <h1>Detalle Card</h1> */}
                <figure> <img src={image} alt={name} /> </figure>
                <div className={styles.infoContent}>
                    <h5>{name}</h5>
                    <span className={styles.price}>$ {price} </span>
                    <p> {description} </p>
                    <p> Stock: No Disponible</p>
                    <Rating value={promedio} readOnly size="large" style={{margin:"0 auto"}}/>

                    <div className={styles.botonera}>
                        <Link to={'/products'}><button className={styles.buttons}> <i class="fas fa-bars"></i> </button></Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
};


const mapStateToProps = (state)=>{
    return {
        promedio:state.estrellasP.numero
    }
}



const mapDispatchToProps = (dispatch) => ({
    addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart(itemToAdd)),
    promedioEstrellas: (com) => dispatch(promedioEstrellas(com))
  });





export default connect(mapStateToProps,mapDispatchToProps)(Producto);