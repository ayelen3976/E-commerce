import React, { useEffect, useState } from "react";
import {withRouter} from 'react-router-dom';
// import shortid from "shortid";


import {Table, Modal, Button, Form} from "react-bootstrap";
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { BsFillTrashFill } from "react-icons/bs";
import Nav from '../Components/Nav/Nav'

function FormProducts() {
  
  const animatedComponents = makeAnimated();
 


  const [product, setProduct] = useState({ name: "", price: "" , description:"", stock:"",img:"",category:[]});
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const [category, setCategory] = useState([])
  const [categoryID, setCategoryID] = useState()
  const [optionSelect, setOptionSelect]=useState()
  const [idDeleteCategoryP, setIdDeleteCategoryP]= useState()
  // const [productID, setProductID] = useState()


  // ------------controladores de modal----------------------
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [categoryShow, setCategoryShow]= useState(false);
  const [modalId,setModalId]=useState();
  const [deleteCategoryShow, setDeleteCategoryShow]= useState(false);
  const handleClose = () => setShow(false);
  const AddClose = () => setLgShow(false);
  const handlerCloseCategory =() =>setCategoryShow(false);
  const handlerCloseDeleteCategoryShow= () =>setDeleteCategoryShow(false);

  // const AddShow = () => setLgShow(true);//Por que no se usa?

  const obtenerProductos = () =>{
    
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
    
  }

  useEffect(()=> {
    obtenerProductos()
  },products);
  // },products);

//  ------------------Functions---------------------------

  function megaFuncionDeAyeOne(categorias,prod){
    //agarrar el itemCategories , iterar y traducir a al select
    setIdDeleteCategoryP(prod)
    let nombreCategorias=[]
    categorias.map(cat=>{
      nombreCategorias.push({
        value:cat.categoryID,
        label: cat.name
      })
    })

    setOptionSelect(nombreCategorias)
    
    //pasar categorias al select
    //Pasarle esas opciones al modal
    //mostrar el modal
    setDeleteCategoryShow(true)
  }



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
      //  window.location.href = '/ProductForm'
      })
      
      .catch(console.log)
  };



  //----------------------agregar categoria al producto

  const agregarCat = (id)=>{
    
    let idProducto = id
    let idCategoria = categoryID
    console.log(idProducto + ' '+ idCategoria)
    axios.post(`http://localhost:4000/products/${idProducto}/category/${idCategoria}`);
    
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

  const deleteCategories= (id,categoryID) =>{
    const url=`/products/${id}/category/${categoryID}`
    axios.delete(url)
   
  }


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
    <div>  <Nav/>
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
            <Button variant="warning" onClick={addProduct }>
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
      {/* ------------------Modal Category-------------------------  */}

      <Modal show={categoryShow} onHide={handlerCloseCategory}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Select  options={translate(category)} onChange={handleChangeCategory} />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerCloseCategory}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={agregarCat(modalId)} onClick={()=>{setCategoryShow(false)}}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>

     {/* ------------------Modal Eliminar Categoria deproducto-------------------------  */}

     <Modal show={deleteCategoryShow} onHide={handlerCloseDeleteCategoryShow}>
        <Modal.Header closeButton>
          <Modal.Title>Elimina una Categoria de tu producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Select 
          closeMenuOnSelect={false} 
          components={animatedComponents}
           options={optionSelect} 
           isMulti 
           onChange={handleChangeCategory}/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerCloseDeleteCategoryShow}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteCategories(idDeleteCategoryP,categoryID)} onClick={()=>{setDeleteCategoryShow(false)}} >
            Eliminar 
          </Button>
        </Modal.Footer>
      </Modal>


  
      {/* ------------------Button ADD-------------------------  */}
      <h1> Formulario de productos</h1>
      
      <Button  variant="warning" onClick={() => setLgShow(true)}>Añadir producto</Button>
      

      {/* ----------------Table--------------------------    */}
      <Table responsive="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th style={{width: "10%"}}>Img</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Categorias</th> 
            <th>Editar</th>
            <th>Eliminar</th>
          {/* <th> <Select options={options} /></th> */}
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                sin productos
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.id}>
              <td><img alt="pic" src={item.img} style={{width: "100%"}} /></td> 
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
            <td> <Button className="BsPlusSquareFill" variant="warning" onClick={() =>{setCategoryShow(true) 
              setModalId(item.id)}}> + </Button>  <Button  variant="danger"> <BsFillTrashFill onClick={()=> megaFuncionDeAyeOne(item.categories,item.id)} />  </Button>   </td>
                {/* <td>{console.log(item.categories[0].name)}</td> */}
                <td>
                  <Button variant="warning" onClick={() => editar(item)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteProduct(item.id)}  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

    </div>
 </div> );
}
export default withRouter(FormProducts);