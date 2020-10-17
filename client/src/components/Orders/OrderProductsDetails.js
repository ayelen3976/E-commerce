import React, { Component } from 'react';
//Componentes

import axios from 'axios';
import OrderDetails from './OrderDetails';

class OrderProdcutDetails extends Component {
    
    state = {
        ordersData : []
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = async () => {
        const userId = 1;
        const url = `/user/${userId}/cart`
        let res = await axios.get(url)
        let ordersData = res.data;
        console.log(res)
        this.setState({
            ordersData
        })
    }

    render() {
        const { ordersData } = this.state;
        console.log(ordersData)
        return (
            <div>
                <OrderDetails orderArray={ordersData}/>
            </div>
        )
    }
}

export default OrderProdcutDetails;