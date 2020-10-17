//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'
import Catalogo from '../Components/Catalogo';
import { connect } from 'react-redux';
import GetCategory from '../Redux/Actions/Listcategory';  
//Externos
import axios from 'axios';


//ProductListContainer -> la pagina principal
class CategoryListContainer extends Component {

    state = {
        categoryData: []
    }

    componentDidMount() {
        const { getCategoryData } = this.props;
        getCategoryData();
    }

    render() {
        const {categoryData} = this.props;

        return(
            <div>
                <Nav />
                <Catalogo productsData={categoryData} categoryBool = {true}/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    getCategoryData: () => dispatch(GetCategory())
    
    
    })

const mapStateToProps = (state) => ({
    categoryData: state.categoryP.category

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);