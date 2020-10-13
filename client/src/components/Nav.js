import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Nav(props) {

    //variable de estilo
    const { classes } = props;

    return (
        <AppBar className={classes.NavColor} position='static'>
            <Toolbar className= {classes.SearchBar} variant='dense'>
                <Typography variant='h6' component='p'>Green Shop</Typography>
                <Link to='/products'>Ver Productos</Link>
                <Link to='/category'>Ver Categorias</Link>
                <Link to='/ProductForm'>Crud Productos</Link>
                <Link to='/CategoryForm'>Crud Categorias</Link>
                <SearchBar/>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles({
    NavColor: {
        backgroundColor: '#8C9970'
    }
})(Nav);

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