import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {addToShoppingCart, removeFromCart} from "../../Redux/Actions/Shopcart";
import { updateStock} from '../../Redux/Actions/Listproducts';
import './styles.css'


function ProductCard({id,name,description,price,image,stock,addNewItemToCart, updateStock}) { 

   const [sub_stock, setStock] = useState(stock)
   const [message, setmessage] = useState('not more stock')

   toast.configure()
   const notify=()=>{
    toast.warn('Product Add in the Cart Successfully!!', {position:toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
}
  const handleCartAddClick = () => {
    if(sub_stock !== 0) {
      setStock(sub_stock - 1)
    }
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

  return (
    <div class="card">
      <div className='upper-container'>
        <div className='image-container'>
          <img className='card-image' src={image} />
        </div>
      </div>
      <div className="card-text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">$ {price}</div>
          <div className="type"></div>
        </div>
        <div className="stat">
          <div className="value"></div>
          <div className="type">
            <Link className='link' to={"/products/" + id}>
              Ver
            </Link></div>
        </div>
        <div className="stat">
          <div className="value">
            <AddShoppingCartIcon className='shopIcon' onClick={handleCartAddClick} disabled={sub_stock === 0} />
          </div>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  addNewItemToCart: (itemToAdd) => dispatch(addToShoppingCart(itemToAdd)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  updateStock: (item, flag) => dispatch(updateStock(item, flag))

});



export default connect(null, mapDispatchToProps)(ProductCard);




