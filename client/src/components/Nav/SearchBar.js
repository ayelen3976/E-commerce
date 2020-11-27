import React, {useState} from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { Form} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import buscarProducto from '../../Redux/Actions/buscarProducto'



function SearchBar (props) {
    const [searchBar, setSearchBar]= useState('');
    const { buscarProducto} = props


    function alHacerClick (texto){
        buscarProducto(texto)
    }


    return (

         <Form className='SearchBar'>
         <input className='Input' placeholder ='Search...'  onChange={e => setSearchBar(e.target.value)} />
         <Button  onClick={()=>{alHacerClick(searchBar)}}>
             <SearchIcon /> 
             </Button> 
       </Form>
        )

}




const mapDispatchToProps={
    buscarProducto

}




export default connect(null, mapDispatchToProps)(SearchBar);