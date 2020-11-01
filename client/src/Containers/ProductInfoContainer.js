//Only React
import React, { Component } from 'react';

//Componentes
import Nav from '../Components/Nav/Nav'
import ReviewList from '../Components/Review/ReviewList';
import InputReview from '../Components/Review/inputReview'
import styles from '../Components/css/Producto.module.css';

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
            price: "",
            reviews : [],
        }
    }

    async obtenerProducto(){
        const { match } = this.props;
        const id = match.params.id;
        const url = `/products/${id}`
        await axios.get(url)
            .then(res => {
                const productsData = res.data;
                this.setState({
                    id: productsData.id,
                    name: productsData.name,
                    description: productsData.description,
                    price: productsData.price,
                    image: productsData.img,
                    stock: productsData.stock
                })
            }).catch(console.log)
    }

    obtenerReviews(){
        const { match } = this.props; // params de la pagina
        const id = match.params.id;
        const url = `/products/${id}/review`
       axios.get(url)
            .then(res => {
                const reviews = res.data;
                console.log(res.data)
                this.setState({
                    reviews
                })
            }).catch(console.log)
    }

    componentDidMount() {
        this.obtenerProducto()
        this.obtenerReviews()
    }

    render() {

        const product = this.state;
        return (
            <div className={styles.padre}>
                <Nav />
                <Producto
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    stock={product.stock}
                    reviews={product.reviews}
                />
                {/* Componente Promedio */}
                <div className={styles.listaReviews}>
                     <ReviewList reviewData={product.reviews}/>
                </div>
              
                <div className={styles.contenedor}>
               
                <InputReview productId={product.id}/>
                 
                </div>
                
            </div>
        )
    }
}

export default ProductInfoContainer;