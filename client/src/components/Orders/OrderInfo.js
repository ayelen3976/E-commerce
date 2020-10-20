import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrdersLine} from '../../Redux/Actions/orderActions';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

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
                <Button variant="warning" style={{marginLeft:'600px'}}><Link to='/admin/orders' style={{color:'white',textDecoration:'none'}}>Volver a Orders</Link></Button>
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
