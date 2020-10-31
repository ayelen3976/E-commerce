//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav/Nav'
import Catalogo from '../Components/Catalogo';
// import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux';
import GetProducts from '../Redux/Actions/Listproducts';   
//Externos
// import axios from 'axios';



//ProductListContainer -> la pagina principal
class ProductListContainer extends Component {


    componentDidMount() {
        const { getProductsData } = this.props;
        getProductsData();
     }

    
    
    render() {
        const {productsData,producto} = this.props;
        console.log(producto)

        if(producto.productes.length === 0 ){
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
        }else{
                return(
                    <div>
                        <Nav />
                            <Catalogo productsData={producto.productes}/>
                            {/* productsData={productsData} */}
                        {/* <div style={this.divFlex}>
                            <Sidebar/>
                        </div> */}
                    </div>
                )
            
        }


    }
}

const mapDispatchToProps = (dispatch) => ({//dispatch actions
    getProductsData: () => dispatch(GetProducts())
    
    
    })

const mapStateToProps = (state) => ({// setea el estado
    productsData: state.productsP.products,
    producto:state.busquedaP

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);