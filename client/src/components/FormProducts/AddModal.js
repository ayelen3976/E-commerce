import React from 'react';
import {Modal, Button, Container, Form} from 'react-bootstrap'
import Select from 'react-select';
export default function ModalAdd(props){
 

  //  ------------------AGREGAR---------------------------


return (
    <div>
<Modal
 {...props}
size="lg"

aria-labelledby="example-modal-sizes-title-lg"
centered

>
<Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Crear nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
      
          <Form>
            <Form.Control
              type="text"
              placeholder="Ingrese producto"
              name="name"
              onChange={props.onChange}
              value={props.product.name}
            />
            <br/>
            <Form.Control
              type="text"
              placeholder="Ingrese precio"
              name="price"
              onChange={props.onChange}
              value={props.product.price}
            />
            <br/>
           <Form.Control
              type="text"
              placeholder="Ingrese description"
              name="description"
              onChange={props.onChange}
              value={props.product.description}
            />
            <br/>

            <Form.Control
              type="text"
              placeholder="Ingrese stock"
              name="stock"
              onChange={props.onChange}
              value={props.product.stock}
            />
            <br/>
            <input
              type="file"
              name="img"
              onChange={props.Handleimage}
            />
            <br/>
            {/* fala el translate en el select */}
           <Select options={props.translate(props.category)} onChange={props.handleChangeCategory} /> 
            <br/>
            <Button variant="warning" onClick={props.addProduct}>
              Añadir
            </Button>
          </Form>
        </Modal.Body>
</Modal>
    
</div>
    )
}
