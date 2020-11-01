import React from 'react';
import {Modal, Button, Container, Form} from 'react-bootstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
export default function ModalEdit(props){



  const animatedComponents = makeAnimated();

    //  ------------------EDIT---------------------------
 

return (
    <div>

    {/* ---------------------Modal FORM EDITAR---------------------- */}
    <Modal 
  {...props}
  
>
        <Modal.Header >
          <Modal.Title>Modifique su Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Ingrese modificacion name"
            name="name"
            onChange={props.onChange}
            value={props.product.name}
          />
          <br/>
          <Form.Control
            type="text"
            placeholder="Ingrese modificacion price"
            name="price"
            onChange={props.onChange}
            value={props.product.price}
          /> <br/>
             <Form.Control
            type="text"
            placeholder="Ingrese modificacion description"
            name="description"
            onChange={props.onChange}
            value={props.product.description}
          />
          <br/>

            <Form.Control
              type="text"
              placeholder="Ingrese modificacion stock"
              name="stock"
              onChange={props.onChange}
              value={props.product.stock}
            />
            <br/>
            <Form.Control
              style={{display: "-webkit-inline-box"}}
              type="file"
              name="img"
              onChange={props.Handleimage}
            />
          <br/>
          
          <Select 
          closeMenuOnSelect={false} 
          components={animatedComponents}
           isMulti 
            options={props.translate(props.category)} onChange={props.handleChangeCategory} />
          <br/> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cerrar
          </Button>
          <Button variant="outline-success"  onClick={props.editProduct}>
           Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>


</div>
    )
}