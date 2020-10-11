import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './fotos/logo_size.jpg'

export default function Navvbar() {
  return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand >  <Link to="/"> <img src={logo} alt="" width="100px" height='100px'/> </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link >Inicio</Nav.Link>
      <Nav.Link >Compra mayorista</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item >Frutos secos</NavDropdown.Item>
        <NavDropdown.Item >Especias</NavDropdown.Item>
        <NavDropdown.Item >Vegetales</NavDropdown.Item>
        <NavDropdown.Item >Lacteos</NavDropdown.Item>
        <NavDropdown.Item >Leches vegetales</NavDropdown.Item>
        <NavDropdown.Item >Sin T.A.C.</NavDropdown.Item>
        <NavDropdown.Item >Legumbres</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Nosotros</NavDropdown.Item>
        <NavDropdown.Item >Contacto</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="¿Que estas buscando?" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}
