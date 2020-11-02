import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOrders ,editOrderState} from '../../Redux/Actions/orderActions';
import axios from 'axios';

//Componentes
import OrderDetails from './OrderDetails';




class OrderContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            orderDatax : []
        }
        this.seteo = this.seteo.bind(this)
    }

    seteo(){
        const url = `/order`
        axios.get(url)
        .then(res => {
           this.setState({
               orderDatax : res.data
           })
           this.props.getOrders(res.data)
        })
    }
    
    componentDidMount() {
        this.seteo()
    }    
    

    componentDidUpdate(prevProps,prevState,snapshoot){
      
        if(prevState.orderDatax !== this.state.orderDatax){
           console.log("Hola")
        }
    }

    render() {
        const { orderData } = this.props;
        console.log(orderData)
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
