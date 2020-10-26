import React, { useState } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Rating from '@material-ui/lab/Rating';
import axios from 'axios'


export default function InputReview(props) {
const {productId} = props
const [text, setText] = useState()
const [star, setStar]= useState()



    const guardarDescripcion = (e)=>{
        setText(e.target.value)
    }


    const guardarEstrellas = (e, v)=>{
        setStar(v)
    }


   const enviar = (e,id)=>{
       e.preventDefault()
       
       axios.post(`http://localhost:4000/products/${id}/review`,{
        "userId": "1",
        "description": text,
        "stars": star 
       })
   }


    
    return (
        <div>
            <Form>
                <Form.Group >
                    <Rating onChange={guardarEstrellas}/>
                    <Form.Control as="textarea" rows={3}  placeholder="¿Que te pareció este producto?" onChange={guardarDescripcion} />
                </Form.Group>
               
                <Button variant="outline-warning" type="submit" onClick={e=>{enviar(e,productId)}}>
                        Comentar
                </Button>
            </Form>
        </div>
    )
}