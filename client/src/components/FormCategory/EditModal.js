import React from 'react';
import {Modal, Button,Form} from 'react-bootstrap'

export default function ModalEdit(props){
 

return (
    <div>

    {/* ---------------------Modal FORM EDITAR---------------------- */}
    <Modal 
    {...props}>
          <Modal.Header closeButton>
            <Modal.Title>Modifique su Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Ingrese modificacion name"
              name="name"
              onChange={props.onChange}
              value={props.category.name}
            />
            <br/>
               <Form.Control
              type="text"
              placeholder="Ingrese modificacion description"
              name="description"
              onChange={props.onChange}
              value={props.category.description}
            />
              <Form.Control
            style={{display: "-webkit-inline-box"}} 
              type="file"
              name="img"
              onChange={props.Handleimage}
            />
            <br/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={props.editCategory}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

</div>
    )
}