import React from 'react';


 export default function ModalAdd (){

    const addProduct = (e) => {
        e.preventDefault();
        var pro = products;
        axios({
          method: 'post',
          url: '/products',
          data: {
            name: product.name,
            price: product.price,
            description: product.description,
            stock: product.stock,
            img:product.img
            
          }
        })
          .then(res => {
            
            setProducts(pro);
            setProduct({ name: "", price: "", description: "", stock:"",category:"" , img:""});
            setLgShow(false)
           agregarCat(res.data.id)
           window.location.href = '/ProductForm'
          })
          
          .catch(console.log)
      };

    return(
        <Modal
        size="lg"
        show={lgShow}
        onHide={AddClose}
        aria-labelledby="example-modal-sizes-title-lg"
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
              onChange={onChange}
              value={product.name}
            />
            <br/>
            <Form.Control
              type="text"
              placeholder="Ingrese precio"
              name="price"
              onChange={onChange}
              value={product.price}
            />
            <br/>
           <Form.Control
              type="text"
              placeholder="Ingrese description"
              name="description"
              onChange={onChange}
              value={product.description}
            />
            <br/>

            <Form.Control
              type="text"
              placeholder="Ingrese stock"
              name="stock"
              onChange={onChange}
              value={product.stock}
            />
            <br/>
            <input
              type="file"
              name="img"
              onChange={Handleimage}
            />
            <br/>
             <Select value={product.category} options={translate(category)} onChange={handleChangeCategory} />
            <br/>
            <Button variant="warning" onClick={addProduct}>
              Añadir
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
}