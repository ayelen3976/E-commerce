import React from 'react';
import { connect } from 'react-redux';


// import { AppBar, Typography, Toolbar, IconButton, Button } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
// import styles from './css/Nav.module.css'; //it work. are you here

function Nav({ totalItemsInCart }) {

    //variable de estilo
    // const { classes } = props;

    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-verde" >
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fontWhite"><i class="fas fa-bars"></i></span>
            </button>
            <img src="/images/logo_size.jpg" alt="" />
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active" handle>
                    <Link to='/products'>Ver Productos</Link>
                </li>
                <li class="nav-item">
                    <Link to='/category'>Ver Categorias</Link>
                </li>
                <li class="nav-item">
                    <Link to='/ProductForm'>+ Productos</Link>
                </li>
                <li class="nav-item">
                    <Link to='/CategoryForm'>+ Categorias</Link>
                </li>
                </ul>
                <SearchBar/>
                
                <Link to='/Checkout'>
                  <button className='Shopcart'><i class="fas fa-shopping-cart"></i><span>{totalItemsInCart}</span></button> 
                </Link>
            </div>
        </nav>


    )
}


const mapStateToProps = (state) => ({
    totalItemsInCart: Object.keys(state.shopP.cart).length
})


export default connect(mapStateToProps)(Nav);

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

