import React, { useState, useEffect } from "react";
import {Table, Button, Modal} from "react-bootstrap";
import axios from 'axios';
import Select from 'react-select';
import { BsFillTrashFill } from "react-icons/bs";
import ModalAdd from './AddModal'
import ModalEdit from './EditModal'
import makeAnimated from 'react-select/animated';
import Nav from './../Nav/Nav';
 
const animatedComponents = makeAnimated();
export default function FormProduct() {

  //  ------------------Functions---------------------------
const [product, setProduct] = useState({ name: "", price: "", description:"" , stock:"",img:"",category:[]});
const [products, setProducts] = useState([]);
const [id, setId] = useState("");
const [category, setCategory] = useState([])
const [categoryID, setCategoryID] = useState()
const [optionSelect, setOptionSelect]=useState()
const [idDeleteCategoryP, setIdDeleteCategoryP]= useState()
//---------------------------------------------------------
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [categoryShow, setCategoryShow]= useState(false);
  const [modalId,setModalId]=useState();
  const [deleteCategoryShow, setDeleteCategoryShow]= useState(false);
  const handleClose = () => setShow(false);
  const handlerCloseCategory =() =>setCategoryShow(false);
  const handlerCloseDeleteCategoryShow= () =>setDeleteCategoryShow(false);
 

  function onChange (e){
    var val = e.target.value;
     setProduct({
      ...product,
      [e.target.name]: val}) }

// -------------Function with axios------------------------------
  useEffect(()=> {
    axios.get('http://localhost:4000/products/include/category').then(res => {
      setProducts(res.data)
    }).catch(err => console.log(err.response.data));
    axios.get('/products/category').then(response=>{ 
      setCategory(response.data)
    })},[product]);
const agregarCat = (id)=>{
let idProducto = id
let idCategoria = categoryID
axios.post(`http://localhost:4000/products/${idProducto}/category/${idCategoria}`);
}

const addProduct = (e) => {
e.preventDefault();
var pro = products;
axios({ method: 'post', url: '/products',
       data: {name: product.name, price: product.price, description:product.description, stock:product.stock, img:product.img}
      }).then(res => {
          setProducts(pro);
           setProduct({ name: "", price: "", description: "", stock:"",category:"" , img:""});
           setLgShow(false)
           agregarCat(res.data.id)
          }).catch(console.log)
        };
  const editar = (item) => {
  setProduct({ name: item.name, price: item.price, description: item.description, stock:item.stock, category:item.category,img:item.img });
  setId(item.id);
  setShow(true);
  };

const editProduct = (e) => {
    e.preventDefault();
    var val = {id: id, name: product.name, price: product.price, description: product.description, stock:product.stock, category: product.category,img:product.img
    };
    var pro =products;
    const url = `/products/${id}`
   products.map((pros, i) => {
      if (pros.id === id) {
        pro.splice(i, 1, val);
  axios.put(url, {name: product.name, price: product.price, description: product.description, stock: product.stock, category:product.category,img:product.img
        }).then(() => {
          setId("");
          setProduct({ name: "", price: "", description: "" ,stock:"", category:"",img:""});
          setShow(false);
        }).catch(console.log)
      }
      return 0;
    });};
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
    
//----------------------Add category------------------------
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
  function translate(arr){
    let newArr = []
    arr.forEach(obj =>{
      newArr.push({value:obj.categoryID, label:obj.name})
    })
    return newArr
  }
const handleChangeCategory = selectedOption =>{
    setCategoryID(selectedOption.value)} 

function Handleimage(e){
      var file = e.target.files[0]
      if(file) {const reader = new FileReader()
        reader.addEventListener("load", function() {
          setProduct({ 
         ...product,
         img: this.result
         })})
        reader.readAsDataURL(file)}}
  
 //  ----------------Render-------------------------
  return (
      <div> 
 <Nav/>
    {/* ---------------------Modal Category---------------------- */}
    <Modal show={categoryShow} onHide={handlerCloseCategory}>
      <Modal.Header >
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

<Modal  show={deleteCategoryShow} onHide={handlerCloseDeleteCategoryShow}>
        <Modal.Header >
          <Modal.Title>Elimina una Categoria de tu producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     <Select  closeMenuOnSelect={false} components={animatedComponents} options={optionSelect} onChange={handleChangeCategory}/>
    </Modal.Body>
        <Modal.Footer>
    <Button variant="secondary" onClick={handlerCloseDeleteCategoryShow}> Close</Button>
    <Button variant="danger" onClick={deleteCategories(idDeleteCategoryP,categoryID)} onClick={()=>{setDeleteCategoryShow(false)}} > Eliminar </Button>
        </Modal.Footer>
      </Modal>

    <div className="container">
      <h1> Formulario de productos</h1>
    <Button  variant="warning" onClick={() => setLgShow(true)}>Añadir producto</Button>
    {/* ----------------Table--------------------------    */}
   <ModalAdd
    show={lgShow}
    onChange={onChange} 
    agregarCat={agregarCat}
    addProduct={addProduct}
    Handleimage={Handleimage}
    handleChangeCategory ={handleChangeCategory }
    category={category} setCategory={setCategory}
    onHide={setLgShow}
    translate={translate}
    categoryID={categoryID} setCategoryID={setCategoryID}
    products={products} setProducts={setProducts}
    setProduct ={setProduct} product={product}
    />
   <ModalEdit
   show={show}
   onChange={onChange} 
   Handleimage={Handleimage}
   translate={translate}
   agregarCat={agregarCat}
   editProduct ={editProduct}
   handleChangeCategory ={handleChangeCategory }
   onHide={() => setCategoryShow(false)}
   handleClose={handleClose}
   category={category} setCategory={setCategory}
   products={products} setProducts={setProducts}
   setProduct ={setProduct} product={product}
    /> 

<Table striped bordered hover>
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
          </tr>
        </thead>
        <tbody>
     {products.length === 0 ? (
      <tr><td colSpan="8" style={{ textAlign: "center" }}>sin productos</td></tr>
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
       <td><Button variant="warning" onClick={() => editar(item)}>Editar</Button></td>
      <td><Button variant="danger" onClick={() => deleteProduct(item.id)}> Eliminar </Button> </td>
       </tr>)))}
      </tbody>
      </Table>
    </div>
    </div>
  );
}
