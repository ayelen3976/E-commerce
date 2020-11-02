import React, {useState} from 'react';
import { connect } from 'react-redux';
import {postCart} from "../Redux/Actions/Shopcart";

import {Modal , Button, Form} from 'react-bootstrap';
import './css/Payment.css'

function Payment(props) {

  const [detail, setDetail] = useState({ telefono: 0, direccion: '' })

  function onChange(e) {
    var val = e.target.value;
    console.log(val)
    setDetail({
      ...detail,
      [e.target.name]: val
    })

  }

  const Handlebuy = () => {
    // console.log(detail)
    props.postCart(props.products, props.usuario.id, detail.telefono, detail.direccion)
    //  props.putToMyOrder(props.products, props.usuario.id)
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
        <h4>Payment Details </h4>
        <Form className='formmodal'>
          {/*     <div> 
      <p>Email:</p>
    <input placeholder='email'  className='input1'/>

    </div> */}
          <div>
            <p>Direction:</p>
            <input name='direccion' placeholder='direction' className='input2' onChange={onChange} />
          </div>
          <div>
            <p>Phone:</p>
            <input name='telefono' placeholder='phone' className='input3' onChange={onChange} />
          </div>


        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button className='Buttonbuy' onClick={Handlebuy}>Pay ${props.subTotal}</Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = {

  postCart,
  // putToMyOrder: (items, id, direccion, telefono) => dispatch(putCart(items, id, direccion, telefono)),

};
export default connect(null, mapDispatchToProps)(Payment)
