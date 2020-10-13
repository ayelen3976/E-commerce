//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'

//Externos
import axios from 'axios';
import CategoryDetails from '../Components/CategoryDetails';


//ProductInfoContainer -> Toma la info del producto en particular y crea un detalle del mismo(Producto component)
class CategoryInfoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            description: "",
            image: ""
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        //console.log(id)
        //onsole.log(process.env.REACT_APP_URL_DATA_BASE)
        const url = `/products/category/${id}`
        axios.get(url)
            .then(res => {

                const categoryData = res.data;
                // console.log(categoryData)

                this.setState({
                    id: categoryData.categoryID,
                    name: categoryData.name,
                    description: categoryData.description,
                    // image: categoryData.img
                })

                // console.log(this.state)

            }).catch(console.log)
    }

    render() {

        const categoryData = this.state;

        return (
            <div>
                <Nav />
                <CategoryDetails 
                    name = {categoryData.name}
                    description = {categoryData.description}
                    image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThCt6rKO1mS369Te5YY58fbfqxuIc15Hk5-Q&usqp=CAU'
                />
            </div>
        )
    }
}

export default CategoryInfoContainer;