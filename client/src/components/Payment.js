import React, {useState} from 'react';
import { connect } from 'react-redux';
import {postCart} from "../Redux/Actions/Shopcart";

//Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {Modal} from 'react-bootstrap';


//Extras
import axios from 'axios'

//Primero se debe pasar al loadStripe la public key otorgada por stripe en su pagina
const stripePromise = loadStripe('pk_test_51HirpyAgyVHXmwthtYAHNseQRhcu353sW1HbQfom5o2Q2vQl0E8OPQPkkmXIKxiAebK3OxoOLGhjC1zfMXdFgyaf002ZVBQwnx')

const CheckoutForm = ({usuario , products,subTotal , postCart}) => {
  const [detail, setDetail] = useState({ telefono: 0, direccion: '' })
  const stripe = useStripe() //Me da la conexion a stripe
  const elements = useElements() //nos permite acceder a los elementos de stripe / componentes

  const onChange = (e) => {
    var val = e.target.value;
    console.log(val)
    setDetail({
      ...detail,
      [e.target.name]: val
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario)
    postCart(products, usuario, detail.telefono, detail.direccion)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) // Caputramos el elemento
    })
    
    if(!error){
      const {id} = paymentMethod;

      const {data} =  await axios.post('/order/checkout', {
        id,
        amount: (subTotal * 100)
      })

      console.log(data)

    }
  }

  
  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <div>
        <p>Direction:</p>
        <input name='direccion' placeholder='direction' onChange={(e) =>onChange(e)} />
      </div>
      <div>
        <p>Phone:</p>
        <input name='telefono' placeholder='phone' onChange={(e) =>onChange(e)} />
      </div>
      <div className='form-group'>
        <CardElement className='form-control' />
      </div>
      <h3 className='text-center my-2'>Price: $100</h3>
      <button className='btn btn-success'>
        Buy
    </button>
    </form>
  )

}

function Payment(props) {
  return (
    <Elements stripe={stripePromise}>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <CheckoutForm postCart={postCart} usuario={props.usuario.id} products={props.products} subTotal={props.subTotal}/>
          </div>
        </div>
      </div>
    </Elements>
  );
}

const mapDispatchToProps = {
  postCart,
};
export default connect(null, mapDispatchToProps)(Payment)


























































































