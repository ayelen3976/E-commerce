import React, { useEffect, useState } from "react";
// import shortid from "shortid";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Modal, Button} from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

function FormProducts() {
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);

  const [product, setProduct] = useState({ name: "", price: "" , description:"",category:[]});
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const AddClose = () => setLgShow(false);
  // const AddShow = () => setLgShow(true);//Por que no se usa?

  useEffect(()=> {
        axios.get('/products/include/category')
        .then(res => {
          // console.log(res.data)
            setProducts(res.data);
        })
        .catch(err => console.log(err.response.data));
  },[]);
  // },products);

//  ------------------Functions---------------------------
  function onChange(e) {
    var val = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: val
    });
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
      url: '/products',
      data: {
        name: product.name,
        price: product.price,
        description: product.description
      }
    })
      .then(() => {
        setProducts(pro);
        setProduct({ name: "", price: "", description: "" });
        setLgShow(false)
      })
      .catch(console.log)
  };

  //  ------------------DELETE---------------------------
  const deleteProduct = (id) => {
    const arrayFiltrado = products.filter((item) => item.id !== id);
    const url = `/products/${id}`
    axios.delete(url)
      .then(() => {
        setProducts(arrayFiltrado);
      })
      .catch(console.log)
  };


  //  ------------------EDIT---------------------------
  const editar = (item) => {
    setProduct({ name: item.name, price: item.price, description: item.description });
    setId(item.id);
    setShow(true);
  };

  const editProduct = (e) => {
    e.preventDefault();
    var val = {
      id: id,
      name: product.name,
      price: product.price,
      description: product.description
    };
    var pro = products;
    const url = `/products/${id}`
    products.map((pros, i) => {
      if (pros.id === id) {
        pro.splice(i, 1, val);
        axios.put(url, {
          name: product.name,
          price: product.price,
          description: product.description
        }).then(() => {
          setId("");
          setProduct({ name: "", price: "", description: "" });
          setShow(false);
        }).catch(console.log)
      }
      return 0;
    });


  };


//  ----------------Render-------------------------
  return (
    <div className="container">
        {/* ---------------------Modal from AGREGAR---------------------- */}
      <Modal
        size="lg"
        show={lgShow}
         onHide={AddClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">ADD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>CRUD APP</h1>
          <form>
            <input
              type="text"
              placeholder="Ingrese producto"
              name="name"
              onChange={onChange}
              value={product.name}
            />
            <input
              type="text"
              placeholder="Ingrese precio"
              name="price"
              onChange={onChange}
              value={product.price}
            />
           <input
              type="text"
              placeholder="Ingrese description"
              name="description"
              onChange={onChange}
              value={product.description}
            />
            <Button variant="primary" onClick={addProduct}>
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    {/* ---------------------Modal FORM EDITAR---------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifique su Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Ingrese modificacion name"
            name="name"
            onChange={onChange}
            value={product.name}
          />
          <input
            type="text"
            placeholder="Ingrese modificacion price"
            name="price"
            onChange={onChange}
            value={product.price}
          />
             <input
            type="text"
            placeholder="Ingrese modificacion description"
            name="description"
            onChange={onChange}
            value={product.description}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  
      {/* ------------------Button ADD-------------------------  */}
      <h1>CRUD APP</h1>
      <Button onClick={() => setLgShow(true)}>ADD</Button>
      <Link to = '/products'><Button>VOLVER</Button></Link>

      {/* ----------------Table--------------------------    */}
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Description</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                sin productos
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                {/* <td>{console.log(item.categories[0].name)}</td> */}
                <td>
                  <Button variant="primary" onClick={() => editar(item)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Button onClick={() => deleteProduct(item.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

    </div>
  );
}
export default FormProducts;