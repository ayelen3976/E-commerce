import React, { useEffect, useState } from "react";
// import shortid from "shortid";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Modal, Button, Form} from "react-bootstrap";
import axios from 'axios';
import Nav from '../Components/Nav/Nav'

function CategoryForm() {
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);

  const [product, setProduct] = useState({ name: "", description:"" ,img:""});
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const AddClose = () => setLgShow(false);
  // const AddShow = () => setLgShow(true);//Por que no se usa?

  useEffect(() => {
        axios.get('/products/category')
        .then(res => {
            setProducts(res.data);
        })
        .catch(err => console.log(err.response.data));
  },[product]);

//  ------------------Functions---------------------------
  function onChange(e) {
    var val = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: val
    });
  }


  function Handleimage(e){
    var file = e.target.files[0]
    // const previmg = document.querySelector(".anyimg")// 
    if(file) {
      const reader = new FileReader()
      reader.addEventListener("load", function() {
        setProduct({ 
          ...product,
         img: this.result
       })
        // previmg.setAttribute("src", this.result)
      })
      reader.readAsDataURL(file)
    }

   }

  //  ------------------AGREGAR---------------------------
  const addProduct = (e) => {
    e.preventDefault();
    // var val = {
    //   // id: shortid.generate(),
    //   name: product.name,
    //   price: product.price,
    //   description: product.description
    // };
    var pro = products;
    // pro.push(val);
    axios({
      method: 'post',
      url: '/products/category',
      data: {
        name: product.name,
        description: product.description,
        img: product.img
      }
    })
      .then(() => {
        setProducts(pro);
        setProduct({ name: "", description: "" });
        setLgShow(false)
      })
      .catch(console.log)
  };

  //  ------------------DELETE---------------------------
  const deleteProduct = (id) => {
    const arrayFiltrado = products.filter((item) => item.categoryID !== id);
    const url = `/products/category/${id}`
    axios.delete(url)
      .then(() => {
        setProducts(arrayFiltrado);
      })
      .catch(console.log)
  };


  //  ------------------EDIT---------------------------
  const editar = (item) => {
    setProduct({ name: item.name, description: item.description });
    setId(item.categoryID);
    setShow(true);
  };

  const editProduct = (e) => {
    e.preventDefault();
    var val = {
      categoryID: product.categoryID,
      name: product.name,
      description: product.description
    };
    var pro = products;
    const url = `/products/category/${id}`
    products.map((pros, i) => {
      if (pros.categoryID === id) {
        pro.splice(i, 1, val);
        axios.put(url, {
          name: product.name,
          description: product.description
        }).then(() => {
          setId("");
          setProduct({ name: "", description: "" });
          setShow(false);
        }).catch(console.log)
      }
      return 0;
    });


  };


//  ----------------Render-------------------------
  return (
    <div> <Nav/>
    <div className="container">
        {/* ---------------------Modal from AGREGAR---------------------- */}
      <Modal
        size="lg"
        show={lgShow}
         onHide={AddClose}
        aria-labelledby="example-modal-sizes-title-lg"
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
              onChange={onChange}
              value={product.name}
            />
            <br/>

              <Form.Control
              type="file"
              name="img"
              onChange={Handleimage}
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
            <Button variant="warning" onClick={addProduct} >
              Añadir
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    {/* ---------------------Modal FORM EDITAR---------------------- */}
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
            placeholder="Ingrese modificacion description"
            name="description"
            onChange={onChange}
            value={product.description}
          />
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={editProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  
      {/* ------------------Button ADD-------------------------  */}
      <h1>Formulario de categoria</h1>
      <Button variant="warning"onClick={() => setLgShow(true)}>Añadir</Button>
      

      {/* ----------------Table--------------------------    */}
      <Table responsive="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Description</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                sin productos
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.categoryID}>
                <td><img alt="pic" src={item.img} style={{width: "10%"}} /></td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning" onClick={() => editar(item)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Button  variant="danger" onClick={() => deleteProduct(item.categoryID)} >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

    </div>
    </div>
  );
}
export default CategoryForm;