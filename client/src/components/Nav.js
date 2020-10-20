import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Nav({ totalItemsInCart }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //variable de estilo
    // const { classes } = props;

    return (

        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-warning" >

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fontWhite"><i className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active" handle>
                        <Link to='/products'>Ver Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category'>Ver Categorias</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/ProductForm'>+ Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/CategoryForm'>+ Categorias</Link>
                    </li> */}
                </ul>
                <SearchBar/><div>
                    <PeopleAltIcon onClick={handleClick} style={{ color: "white", fontSize: 30, marginLeft: "550px" }} />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link style={{color: "black",textDecoration:"none"}}>Ingresar</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/register' style={{color: "black",textDecoration:"none"}}>Registrarse</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/ProductForm' style={{color: "black",textDecoration:"none"}}>Crud Productos</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/CategoryForm' style={{color: "black",textDecoration:"none"}}>Crud Categorias</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/admin/orders' style={{color: "black",textDecoration:"none"}}>Orders</Link></MenuItem>
                    </Menu>
                </div>
                <Link to='/Checkout'>
                    <ShoppingCartIcon style={{ color: "white", fontSize: 26, marginRight: "40px" }}><button><span>{totalItemsInCart}</span></button></ShoppingCartIcon>
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

