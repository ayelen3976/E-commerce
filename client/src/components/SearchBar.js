import React, {useState} from 'react';
import './css/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { Form, Button} from 'react-bootstrap';
import buscarProducto from '../Redux/Actions/buscarProducto'



function SearchBar (props) {
    const [searchBar, setSearchBar]= useState('');
    const { buscarProducto} = props


    function alHacerClick (texto){
        buscarProducto(texto)
    }


    return (
        <Form inline>
        <input placeholder ='¿Que estás buscando?' className='InputSearch' onChange={e => setSearchBar(e.target.value)}/> 
         <Button variant="warning"  onClick={()=>{alHacerClick(searchBar)}}>
             <SearchIcon /> 
             </Button> 
         </Form>
        )

}




const mapDispatchToProps={
    buscarProducto
    
}




export default connect(null, mapDispatchToProps)(SearchBar);