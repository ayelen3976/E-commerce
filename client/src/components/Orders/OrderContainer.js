import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrders ,editOrderState} from '../../Redux/Actions/orderActions';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Componentes
import OrderDetails from './OrderDetails';




class OrderContainer extends Component {


    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        const { orderData } = this.props;
        // console.log(orderReducer)
        // console.log(this.props)
    
        return (
            <div>
                <OrderDetails editOrderState={editOrderState} orderArray={orderData} goTo={(path)=> this.props.history.push(path)} />
                {/* MINTIENDO LA UBICACION DEL BOTON */}
                <Button variant="warning" style={{marginLeft:'600px'}}><Link to='/products' style={{color:'white',textDecoration:'none'}}>Volver a Home</Link></Button>
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
