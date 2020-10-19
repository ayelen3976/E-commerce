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
        // <AppBar className={classes.NavColor} position='static'>
        //     <Toolbar className= {classes.SearchBar} variant='dense'>
        //         <Typography variant='h6' component='p'>Green Shop</Typography>
        //         <Link to='/products'>Ver Productos</Link>
        //         <Link to='/category'>Ver Categorias</Link>
        //         <Link to='/ProductForm'>Crud Productos</Link>
        //         <Link to='/CategoryForm'>Crud Categorias</Link>
        //         <SearchBar/>
        //     </Toolbar>
        // </AppBar>

        
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
    totalItemsInCart: Object.keys(state.shopP.cart).lenght
})

// export default withStyles({
//     NavColor: {
//         backgroundColor: '#82ae46'
//     }
// })(Nav);

export default connect(mapStateToProps)(Nav);

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import logo from '../images/logo_size.jpg'
// import SearchBar from './SearchBar';

// export default function Navvbar() {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Navbar.Brand >  <Link to="/products"> <img src={logo} alt="" width="100px" height='100px' /> </Link></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link >Inicio </Nav.Link>
//                     <Nav.Link >Compra mayorista</Nav.Link>
//                     <NavDropdown title="Productos" id="basic-nav-dropdown">
//                         <NavDropdown.Item >Frutos secos</NavDropdown.Item>
//                         <NavDropdown.Item >Especias</NavDropdown.Item>
//                         <NavDropdown.Item >Vegetales</NavDropdown.Item>
//                         <NavDropdown.Item >Lacteos</NavDropdown.Item>
//                         <NavDropdown.Item >Leches vegetales</NavDropdown.Item>
//                         <NavDropdown.Item >Sin T.A.C.</NavDropdown.Item>
//                         <NavDropdown.Item >Legumbres</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <Nav.Link><Link to="/ProductForm">Formulario Producto</Link></Nav.Link>
//                         <Nav.Link><Link to="/CategoryForm">Formulario Categorias</Link></Nav.Link>
//                     </NavDropdown>
//                 </Nav>
//                 <SearchBar />
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }