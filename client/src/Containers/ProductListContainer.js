//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'
import Catalogo from '../Components/Catalogo';

//Externos
import axios from 'axios';


//ProductListContainer -> la pagina principal
class ProductListContainer extends Component {

    state = {
        productsData: []
    }

    componentDidMount() {
        axios.get('/products')
            .then(res => {

                const productsData = res.data;
                //console.log(productsData)
                this.setState({
                    productsData
                })
                //console.log(this.state)
            }).catch(console.log)
    }

    render() {
        const {productsData} = this.state;

        return(
            <div>
                <Nav />
                <Catalogo productsData={productsData}/>
            </div>
        )
    }
}

export default ProductListContainer;