//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav'

//Externos
import axios from 'axios';
import Producto from '../Components/Producto';


//ProductInfoContainer -> Toma la info del producto en particular y crea un detalle del mismo(Producto component)
class ProductInfoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            description: "",
            image: "",
            price: ""
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        //console.log(id)
        //onsole.log(process.env.REACT_APP_URL_DATA_BASE)
        const url = `/products/${id}`
        axios.get(url)
            .then(res => {

                const productsData = res.data;
                //console.log(productsData)

                this.setState({
                    id: productsData.id,
                    name: productsData.name,
                    description: productsData.description,
                    price: productsData.price,
                    image: productsData.img,
                    stock: productsData.stock
                })

                //console.log(this.state)

            }).catch(console.log)
    }

    render() {

        const product = this.state;

        return (
            <div>
                <Nav />
                <Producto
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    stock={product.stock}
                />
            </div>
        )
    }
}

export default ProductInfoContainer;