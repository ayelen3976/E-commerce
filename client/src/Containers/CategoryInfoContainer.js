//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav/Nav'

//Externos
import axios from 'axios';
import CategoryDetails from '../Components/CategoryDetails';


//ProductInfoContainer -> Toma la info del producto en particular y crea un detalle del mismo(Producto component)
class CategoryInfoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            prodctsByCategory: []
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        //console.log(id)
        //onsole.log(process.env.REACT_APP_URL_DATA_BASE)
        const url = `/products/category/filter/${id}`
        axios.get(url)
            .then(res => {

                const categoryData = res.data;
                // console.log(categoryData[0].products)
                // console.log(categoryData)

                this.setState({
                    prodctsByCategory: categoryData[0].products
                    // image: categoryData.img
                })

                //console.log(this.state)
            }).catch(console.log)
    }

    render() {

        const categoryData = this.state.prodctsByCategory;
        // console.log(categoryData.prodctsByCategory)

        return (
            <div>
                <Nav />
                <CategoryDetails products={categoryData}/>
            </div>
        )
    }
}

export default CategoryInfoContainer;