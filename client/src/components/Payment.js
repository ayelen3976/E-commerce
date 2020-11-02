import React from 'react';
import {Modal , Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {postCart, putCart} from "../Redux/Actions/Shopcart";
import './css/Payment.css'
function Payment(props, postToMyOrder,   putToMyOrder) {



    const Handlebuy=()=>{
       props.postToMyOrder(props.products, props.usuario.id)
       props.putToMyOrder(props.products, props.usuario.id)
       props.onHide()
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Data </h4>
         <Form className='formmodal'>
    <div> 
    <input placeholder='email'  className='input1'/>

    </div>
    <div>
    <input placeholder='direction' className='input2'/>
    </div>
    <div>
    <input placeholder='phone' className='input3'/> 
    </div>
          
  
         </Form>
         
        </Modal.Body>
        <Modal.Footer>
    <Button className='Buttonbuy' onClick={Handlebuy}>Pay ${props.subTotal}</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const mapDispatchToProps = (dispatch) => ({
    

    postToMyOrder:(items,id)=> dispatch(postCart(items,id)),
    putToMyOrder:(items, id)=> dispatch(putCart(items,id)),
 

  });
  export default connect(null, mapDispatchToProps)(Payment) 
  