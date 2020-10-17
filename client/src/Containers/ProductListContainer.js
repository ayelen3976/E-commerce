//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'
import Catalogo from '../Components/Catalogo';
// import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux';
import GetProducts from '../Redux/Actions/Listproducts';   
//Externos
// import axios from 'axios';



//ProductListContainer -> la pagina principal
class ProductListContainer extends Component {



    divFlex= {
        display:'flex'
    }

    componentDidMount() {
        const { getProductsData } = this.props;
        getProductsData();
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

const mapDispatchToProps = (dispatch) => ({//dispatch actions
    getProductsData: () => dispatch(GetProducts())
    
    
    })

const mapStateToProps = (state) => ({// setea el estado
    productsData: state.productsP.products

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);