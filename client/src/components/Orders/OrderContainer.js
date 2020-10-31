import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrders ,editOrderState} from '../../Redux/Actions/orderActions';

//Componentes
import OrderDetails from './OrderDetails';




class OrderContainer extends Component {

    componentDidMount() {
        this.props.getOrders();
    }

    componentDidUpdate(){
    //    this.props.getOrders()
    }

    render() {
        const { orderData } = this.props;
        // console.log(orderReducer)
        // console.log(this.props)
    
        return (
            <div >
                <OrderDetails editOrderState={editOrderState} orderArray={orderData} goTo={(path)=> this.props.history.push(path)} />
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
    getOrders,
    editOrderState
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderContainer)) ;
