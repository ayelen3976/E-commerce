import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrdersLine} from '../../Redux/Actions/orderActions';

//componentes
import Order from './Order';





class OrderContainer extends Component {


    componentDidMount() {
        this.props.getOrdersLine(parseInt(this.props.match.params.orderId));
    }
    
    render() {
        const { orderData } = this.props;
        
        console.log(orderData)
        return (
            <div>
                <Order orderArray={orderData}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderData: state.ordersP.orderLine,
    }
}

const mapDispatchToProps = {
    getOrdersLine
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderContainer)) ;
