import React, {useState} from 'react';
import {Navbar} from 'react-bootstrap'
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Menu, MenuItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../../Redux/Actions/auth'
import Login from '../Login/index'
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar'

 function Nav({ items, logout, usuario }){
  const [modalShow, setModalShow] = useState(false);
  console.log(usuario)
  let history = useHistory();

 let clientVisible = true;
  let adminVisible = true;
  let currentVisible = true;
  if (usuario !== undefined && usuario.isAuthenticated) {    
      usuario.user.rol === 'Admin' ? adminVisible = false : adminVisible = true;
      usuario.user.rol === 'Client' ? clientVisible = false : clientVisible = true;
  }else {
    currentVisible =false;
  }
  var total = 0
  Object.keys(items).map(i => total = items[i] + total)

  return (


    <div>
      <div className='head'>
        <div className='head-title'>Moscow</div>
        <div className='head-sub-title'>Dietetica</div>
      </div>

      <Navbar className='Navbar' expand="lg" >

        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <SearchBar />



          <div className='Icons'>
            {/* ---------------------------------- */}
            <div className='Icon'>
              <Menu menuButton={<Button hidden={adminVisible} ><PersonIcon /> </Button>} >
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push("/profile")}>Mi perfil</MenuItem>
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push("/ProductForm")}>Productos</MenuItem>
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push('/CategoryForm')} >Categorias</MenuItem>
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push("/admin/orders")}> Ordenes </MenuItem>
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push("/users")}> Usuarios </MenuItem>
                <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
              </Menu>

            </div>
            <div className='Icon'>
              <Menu menuButton={<Button hidden={currentVisible}><PersonIcon /> </Button>} >
                <MenuItem onClick={() => setModalShow(true)}>Iniciar Sesión </MenuItem>
                <MenuItem style={{ color: "black", textDecoration: "none" }} onClick={() => history.push("/register")}> Registrarse</MenuItem>
              </Menu>

            </div>
            <div className='Icon'>
              <Menu menuButton={<Button hidden={clientVisible}><PersonIcon /> </Button>} >
                <MenuItem>Mi Perfil</MenuItem>
                <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
              </Menu>
            </div>
            {/* 
--------------------------------------- */}

            <Login show={modalShow} onHide={() => setModalShow(false)} />

            <div className='Icon'>
              <Button>
                <Link to="/Checkout" style={{ color: "black", textDecoration: "none" }}>
                  <ShoppingCartIcon />{total}</Link></Button>
            </div>


          </div>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className='NavbarTwo' expand="lg" >

        <div>
          <ul className='options'>
            <li><Link className='links' to="/">Inicio</Link></li>
            <li><Link className='links' to="/products" > Productos </Link> </li>
            <li><Link className='links' to="/category">Categorias </Link> </li>
            <li><Link  className='links'>Como Comprar</Link></li>
            <li><Link  className='links' to="/nosotros">Quines Somos</Link></li>
            <li><Link  className='links'>Sucursales</Link></li>
          </ul>
        </div>

      </Navbar>


    </div>

  )

}
const mapStateToProps = (state) => ({
  items: state.shopP.cart,
  usuario: state.auth
});

const mapDispatchToProps = {
  logout,
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);