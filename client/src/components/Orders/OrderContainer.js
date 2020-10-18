import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrders} from '../../Redux/Actions/orderActions';

//Componentes
import OrderDetails from './OrderDetails';




class OrderContainer extends Component {


    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        const { orderData } = this.props;
        // console.log(orderReducer)
        console.log(this.props)
    
        return (
            <div>
                
                <OrderDetails orderArray={orderData} goTo={(path)=> this.props.history.push(path)} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderData: state.ordersP.orders,
    }
}

const mapDispatchToProps = {
    getOrders
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderContainer)) ;
