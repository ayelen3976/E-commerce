import React from 'react';

export default function ModalEdit(){

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifique su Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Ingrese modificacion name"
            name="name"
            onChange={onChange}
            value={product.name}
          />
          <br/>
          <Form.Control
            type="text"
            placeholder="Ingrese modificacion price"
            name="price"
            onChange={onChange}
            value={product.price}
          /> <br/>
             <Form.Control
            type="text"
            placeholder="Ingrese modificacion description"
            name="description"
            onChange={onChange}
            value={product.description}
          />
          <br/>

            <Form.Control
              type="text"
              placeholder="Ingrese modificacion stock"
              name="stock"
              onChange={onChange}
              value={product.stock}
            />
            <br/>
            <Form.Control
              type="file"
              name="img"
              onChange={Handleimage}
            />
            <br/>
          <Select 
          closeMenuOnSelect={false} 
          components={animatedComponents}
           isMulti 
            options={translate(category)} onChange={handleChangeCategory} />
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={editProduct}>
           Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    )
}