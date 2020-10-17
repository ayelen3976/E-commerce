import React, { useEffect, useState } from "react";
// import shortid from "shortid";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Modal, Button} from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import Select from 'react-select';

function FormProducts() {
 


  const [product, setProduct] = useState({ name: "", price: "" , description:"", stock:"",img:"",category:[]});
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const [category, setCategory] = useState([])
  const [categoryID, setCategoryID] = useState()
  // const [productID, setProductID] = useState()


  // ------------controladores de modal----------------------
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const AddClose = () => setLgShow(false);
  // const AddShow = () => setLgShow(true);//Por que no se usa?

  useEffect(()=> {
        axios.get('/products/include/category')
        .then(res => {
           console.log(res.data)
            setProducts(res.data);
        })
        .catch(err => console.log(err.response.data));

        axios.get('/products/category')
        .then(response=>{
          setCategory(response.data)
        })
        
        
        
        
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

  
  function translate(arr){
      let newArr = []
      arr.forEach(obj =>{
        newArr.push({
          value:obj.categoryID,
          label:obj.name})
      })
      return newArr
  }
 
  const handleChangeCategory = selectedOption =>{
    setCategoryID(selectedOption.value)
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
      })
      
      .catch(console.log)
  };



  //----------------------agregar categoria al producto

  const agregarCat = (id)=>{
    
    let idProducto = id
    let idCategoria = categoryID
    console.log(idProducto + ' '+ idCategoria)
    axios.post(`http://localhost:4000/products/${idProducto}/category/${idCategoria}`)
  }

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
    setProduct({ name: item.name, price: item.price, description: item.description, stock:item.stock, category:item.category,img:item.img });
    setId(item.id);
    setShow(true);
  };

  const editProduct = (e) => {
    e.preventDefault();
    var val = {
      id: id,
      name: product.name,
      price: product.price,
      description: product.description,
      stock:product.stock,
      category: product.category,
      img:product.img
    };
    var pro = products;
    const url = `/products/${id}`
    products.map((pros, i) => {
      if (pros.id === id) {
        pro.splice(i, 1, val);
        axios.put(url, {
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
          category:product.category,
          img:product.img
        }).then(() => {
          setId("");
          setProduct({ name: "", price: "", description: "" ,stock:"", category:"",img:""});
          setShow(false);
        }).catch(console.log)
      }
      return 0;
    });


  };


//  ----------------Render-------------------------
  return (
    <div className="container">
      {console.log(categoryID)}
        {/* ---------------------Modal from AGREGAR---------------------- */}
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

            <input
              type="text"
              placeholder="Ingrese stock"
              name="stock"
              onChange={onChange}
              value={product.stock}
            />
            <input
              type="file"
              name="img"
              onChange={Handleimage}
            />
             <Select value={product.category} options={translate(category)} onChange={handleChangeCategory} />
            {console.log ('productCategory',)}
            <Button variant="primary" onClick={addProduct}>
              Añadir
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

            <input
              type="text"
              placeholder="Ingrese modificacion stock"
              name="stock"
              onChange={onChange}
              value={product.stock}
            />
            <input
              type="file"
              name="img"
              onChange={Handleimage}
            />

          <Select  options={translate(category)} onChange={handleChangeCategory} />
          
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
      
      <Button onClick={() => setLgShow(true)}>Añadir producto</Button>
      <Link to = '/products'><Button>Volver</Button></Link>

      {/* ----------------Table--------------------------    */}
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Categorias</th>
            <th style={{width: "10%"}}>Img</th>
            <th>Editar</th>
            <th>Eliminar</th>
          {/* <th> <Select options={options} /></th> */}
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
                <td>{item.stock}</td>
               
            <td> <Button className="BsPlusSquareFill"> {item.category}+ </Button> </td>
            <td><img alt="pic" src={item.img} style={{width: "100%"}} /></td>
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