//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'
import Catalogo from '../Components/Catalogo';

//Externos
import axios from 'axios';


//ProductListContainer -> la pagina principal
class CategoryListContainer extends Component {

    state = {
        categoryData: []
    }

    componentDidMount() {
        axios.get('/products/category')
            .then(res => {

                const categoryData = res.data;
                console.log(categoryData)
                this.setState({
                    categoryData
                })
                console.log(this.state)
            })
            .catch(console.log)
    }

    render() {
        const {categoryData} = this.state;

        return(
            <div>
                <Nav />
                <Catalogo productsData={categoryData} categoryBool = {true}/>
            </div>
        )
    }
}

export default CategoryListContainer;