import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import { AppBar, Typography, Toolbar, IconButton, Button } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import style  from './css/Nav.module.css'; //it work. are you here
import { green } from '@material-ui/core/colors';

function Nav({ totalItemsInCart }) {

    //variable de estilo
    // const { classes } = props;

    return (

        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-warning" >
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fontWhite"><i className="fas fa-bars"></i></span>
            </button>
            {/* <img src="/images/logo_size.jpg" alt="" /> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active" handle>
                    <Link to='/products'>Ver Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to='/category'>Ver Categorias</Link>
                </li>
                <li className="nav-item">
                    <Link to='/ProductForm'>+ Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to='/CategoryForm'>+ Categorias</Link>
                </li>
                </ul>
                <SearchBar/>
                
                <Link to='/Checkout'>
                    <ShoppingCartIcon style={{color: "white",fontSize: 30}}><button><span>{totalItemsInCart}</span></button></ShoppingCartIcon> 
                </Link>
            </div>
        </nav>


    )
}


const mapStateToProps = (state) => ({
    totalItemsInCart: Object.keys(state.shopP.cart).lenght
})


export default connect(mapStateToProps)(Nav);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////



// import React from 'react';
// import { AppBar, Typography, Toolbar } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// function Nav(props) {

//     //variable de estilo
//     const { classes } = props;
    
//     return (
//         <AppBar className={classes.NavColor} position='fiexed'>
//                 <Toolbar variant='dense'>
//                     <Typography variant='h6' component='p'>Green Shop</Typography>
//                 </Toolbar>
//                 <div>
//                 <Typography variant='h6' component='p'>Categorias</Typography>
//                 <Typography variant='h6' component='p'>Productos</Typography>
//                 </div>
//                 <ShoppingCartIcon/>
//         </AppBar>
//     )
// }

// export default withStyles({
//     NavColor: {
//         backgroundColor: '#f7ad36',
//         height: '90px'
//     },
//     NavDiv : {

//     }
// })(Nav);

