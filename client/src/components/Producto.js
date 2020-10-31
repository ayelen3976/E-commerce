//Este componente muestra la info/detalle del producto en particular
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import styles from './css/Producto.module.css';
import {addToShoppingCart} from "../Redux/Actions/Shopcart";
import { updateStock} from '../Redux/Actions/Listproducts';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import promedioEstrellas from '../Redux/Actions/promedioEstrellas';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

function Producto({id, name, price, image, description , stock ,addNewItemToCart, updateStock, promedio, promedioEstrellas}) {
    //console.log(props.productos[match.params].id);
    const [sub_stock, setStock] = useState(stock)


    toast.configure()
    const notify=()=>{
     toast.warn('Product Add in the Cart Successfully!!', {position:toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
 }
    const handleCartAddClick = () => {
        if(sub_stock !== 0) {
          setStock(sub_stock - 1)
        }
        console.log(sub_stock)
        updateStock({
          sub_stock, 
          id,
          name,
          description,
          price,
          image,
        },'reduce');
        addNewItemToCart({
          id,
          name,
          description,
          price,
          image,
        });
        notify()
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

 return (
            <div> 
            <div className={styles.detailContent}>
                {/* <h1>Detalle Card</h1> */}
                <figure> <img src={image} alt={name} /> </figure>
                <div className={styles.infoContent}>
                    <h5>{name}</h5>
                    <span className={styles.price}>$ {price} </span>
                    <p> {description} </p>
                    <Rating value={promedio} readOnly size="large" style={{margin:"0 auto"}} />
                    <div className={styles.botonera}>
                        <Link to={'/products'}><button className={styles.buttons}> <i class="fas fa-bars"></i> </button></Link>
                        <button onClick={handleCartAddClick} className={styles.buttons}>  <AddShoppingCartIcon /></button>   
                    </div>
                </div>
            </div>
            </div>
        );
    
};


const mapStateToProps = (state)=>{
    return {
        promedio:state.estrellasP.numero
    }
}



const mapDispatchToProps = (dispatch) => ({
    addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart(itemToAdd)),
    updateStock:(item, flag)=> dispatch(updateStock(item, flag)),
    promedioEstrellas: (com) => dispatch(promedioEstrellas(com))
  });





export default connect(mapStateToProps,mapDispatchToProps)(Producto);