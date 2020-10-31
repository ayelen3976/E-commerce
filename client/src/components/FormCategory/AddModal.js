import React from 'react';
import {Modal, Button,Form} from 'react-bootstrap'
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
            <Modal.Title id="example-modal-sizes-title-lg">Agregar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
              <Form.Control
                type="text"
                placeholder="Ingrese categoría"
                name="name"
                onChange={props.onChange}
                value={props.category.name}
              />
              <br/>
  
                <Form.Control
                type="file"
                name="img"
                onChange={props.Handleimage}
              />  
            <br/>
             <Form.Control
                type="text"
                placeholder="Ingrese description"
                name="description"
                onChange={props.onChange}
                value={props.category.description}
              />
              <br/>
              <Button variant="warning" onClick={props.addCategory} >
                Añadir
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      
</div>
    )
}