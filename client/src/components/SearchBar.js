import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, Button} from 'react-bootstrap';
import buscarProducto from '../Redux/Actions/buscarProducto'



function SearchBar (props) {
    const [searchBar, setSearchBar]= useState('');
    const [prod,setProd] = useState()
    const {prods, buscarProducto,products} = props


    function alHacerClick (texto){
        buscarProducto(texto)
    }


    return (
        <Form inline>
                    <FormControl type="text" placeholder="¿Que estas buscando?" className="mr-sm-2" onChange={e => setSearchBar(e.target.value)}/>
                    <Button variant="outline-success"  onClick={()=>{alHacerClick(searchBar)
                    console.log(prods)}} ><i class="fas fa-search"></i></Button>
        </Form>
    )

}




const mapDispatchToProps={
    buscarProducto
    
}




export default connect(null, mapDispatchToProps)(SearchBar);