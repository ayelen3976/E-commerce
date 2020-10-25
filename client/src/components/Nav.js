import React,{ useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Nav.css';
import {Button,  MenuItem, ClickAwayListener,Grow, Paper , Popper,  MenuList  }from '@material-ui/core';
import {Navbar} from 'react-bootstrap'
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import {logout} from '../Redux/Actions/auth'
import Login from './Login/index'
 function Nav({ items ,logout }){
  const [modalShow, setModalShow] = useState(false);


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }

    const [opened, setOpened] = React.useState(false);
    const anchorRefe = React.useRef(null);
  
    const handleTogglee = () => {
      setOpened((prevOpened) => !prevOpened);
    };
  
    const handleClosee = (event) => {
      if (anchorRefe.current && anchorRefe.current.contains(event.target)) {
        return;
      }
  
      setOpened(false);
    };
    const handleLogOut = (event) =>{
      event.preventDefault()
      logout()
    }
  
    function handleListKeyDownn(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpened(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpened = React.useRef(opened);
    React.useEffect(() => {
      if (prevOpened.current === true && opened === false) {
        anchorRefe.current.focus();
      }
  
      prevOpened.current = opened;
    }, [opened]);
  
 


  var total = 0
  Object.keys(items).map(i => total = items[i] + total) 

   return (
     <div > 
         <div>
    <Navbar   className='Nav' >
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <SearchBar/>
     <div className='Icons'>
     <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
        <PersonIcon/>
        </Button>
   
        <Button
          ref={anchorRefe}
          aria-controls={opened ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleTogglee}
        >
      <SupervisorAccountIcon/> 
        </Button>


    <Link to="/Checkout" style={{ color: "black", textDecoration: "none" }}>
   <ShoppingCartIcon/>
   {total}
   </Link>

    
   </div>
  </Navbar>
  
  </div>

 
<br></br>
  <div>
  <Login show={modalShow} onHide={() => setModalShow(false)} />   
     
  <div>
       
        <Popper open={opened} anchorEl={anchorRefe.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClosee}>
                  <MenuList autoFocusItem={opened} id="menu-list-grow" onKeyDown={handleListKeyDownn}>
                    <MenuItem onClick={handleClosee}>
                    <Link
                to="/ProductForm"
                style={{ color: "black", textDecoration: "none" }}
              >Product Add</Link>
              </MenuItem>

                    <MenuItem onClick={handleClosee}>
                    <Link
                to="/CategoryForm"
                style={{ color: "black", textDecoration: "none" }}
              >Category Add</Link>
              </MenuItem>
                    <MenuItem onClick={handleClosee}> <Link
                to="/admin/orders"
                style={{ color: "black", textDecoration: "none" }}
              >Orders </Link>
              </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>


      








    </div>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem  onClick={() => setModalShow(true)}>  Sign In</MenuItem>

                    <MenuItem onClick={handleClose}>  <Link to="/register" style={{ color: "black", textDecoration: "none" }}>Register</Link></MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
   <div  className='divoptions'>
       <ul>
        <li>Inicio</li>
       <li> <Link to="/products" style={{ color: "black", textDecoration: "none" }}> Productos </Link> </li>
      <li> <Link to="/category" style={{ color: "black", textDecoration: "none" }}>Categorias </Link> </li>
        <li>Productos Sin Gluten</li>
        <li>Como Comprar</li>
        <li>Quines Somos</li>
        <li>Sucursales</li>
        </ul>
     </div>
  </div>
  

   )
   
 }
 const mapStateToProps = (state) => ({
    items: state.shopP.cart
  });

  const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);