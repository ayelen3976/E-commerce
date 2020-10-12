//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../components/Nav'
import Catalogo from '../components/Catalogo';
import Sidebar from '../components/Sidebar'

//Externos
import axios from 'axios';


//ProductListContainer -> la pagina principal
class ProductListContainer extends Component {

    state = {
        productsData: []
    }

    divFlex= {
        display:'flex'
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
                <div style={this.divFlex}>
                    <Sidebar/>
                    <Catalogo productsData={productsData}/>
                </div>
            </div>
        )
    }
}

export default ProductListContainer;