//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'
import Catalogo from '../Components/Catalogo';
// import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux';
import GetProducts from '../Redux/Actions/Listproducts';   
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
        const { getProductsData } = this.props;
        getProductsData();
     }

    buscarProductos (){
        axios.get('/products')
            .then(res => {

                const productsData = res.data;
                //console.log(productsData)
                this.setState({
                    productsData
                })


                //console.log(this.state)
            })
            .catch((err) => {
                console.log(err)
            })
    } 
    
    render() {
        const {productsData} = this.props;

        return(
            <div>
                <Nav />
                    <Catalogo productsData={productsData}/>
                    {/* productsData={productsData} */}
                {/* <div style={this.divFlex}>
                    <Sidebar/>
                </div> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProductsData: () => dispatch(GetProducts())
    
    
    })

const mapStateToProps = (state) => ({
    productsData: state.productsP.products

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);