import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,  Button} from "react-bootstrap";
import axios from 'axios';
import Nav from './../Nav';
import ModalAdd from './AddModal'
import ModalEdit from './EditModal'
function CategoryForm() {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
  
    const [category, setCategory] = useState({ name: "", description:"" , img:""});
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState("");
  
    const handleClose = () => setShow(false);
    // const AddShow = () => setLgShow(true);//Por que no se usa?
  
    useEffect(() => {
          axios.get('/products/category')
          .then(res => {
              setCategories(res.data);
          })
          .catch(err => console.log(err.response.data));
    },[category]);
  
  //  ------------------Functions---------------------------
    function onChange(e) {
      var val = e.target.value;
      setCategory({
        ...category,
        [e.target.name]: val
      });
    }
  
  
    function Handleimage(e){
      var file = e.target.files[0]
      // const previmg = document.querySelector(".anyimg")// 
      if(file) {
        const reader = new FileReader()
        reader.addEventListener("load", function() {
          setCategory({ 
            ...category,
           img: this.result
         })
          // previmg.setAttribute("src", this.result)
        })
        reader.readAsDataURL(file)
      }
  
     }
  
    //  ------------------AGREGAR---------------------------
    const addCategory = (e) => {
      e.preventDefault();
     var cat = categories;
axios({ method: 'post', url: '/products/category',
        data: {name: category.name, description: category.description, img: category.img}
      }).then(() => {
          setCategory(cat);
          setCategory({ name: "", description: "" });
          setLgShow(false)}).catch(console.log)};
  //  ------------------DELETE---------------------------
    const deleteCategory = (id) => {
      const arrayFiltrado = categories.filter((item) => item.categoryID !== id);
      const url = `/products/category/${id}`
      axios.delete(url).then(() => {
          setCategories(arrayFiltrado);
        }).catch(console.log)
    };
   
   //  ------------------EDIT---------------------------
    const editar = (item) => {
      setCategory({ name: item.name, description: item.description, img:item.img });
      setId(item.categoryID);
      setShow(true);
    };
   const editCategory = (e) => {
      e.preventDefault();
      var val = {categoryID: category.categoryID, name: category.name, description: category.description, img:category.img};
      var cat = categories;
      const url = `/products/category/${id}`
      categories.map((pros, i) => {
        if (pros.categoryID === id) {
          cat.splice(i, 1, val);
          axios.put(url, {name: category.name, description: category.description, img: category.img})
          .then(() => {
            setId("");
            setCategory({ name: "", description: "", img:"" });
            setShow(false);
          }).catch(console.log)
        }
        return 0;})};
  
  
  //  ----------------Render-------------------------
    return (
      <div>
           <Nav/>
      <div className="container">
        
     {/* ------------------Button ADD-------------------------  */}
        <h1>Formulario de categoria</h1>
        <Button variant="warning"onClick={() => setLgShow(true)}>Añadir Categoria</Button>
        
  <ModalAdd
  show={lgShow}
  onHide={setLgShow}
  onChange={onChange} 
  addCategory={addCategory}
  Handleimage={Handleimage}
  categories={categories} setCategories={setCategories}
  setCategory ={setCategory} category={category}
  />
  <ModalEdit
  show={show}
  onChange={onChange} 
  Handleimage={Handleimage}
  editCategory ={editCategory}

  onHide={() => setShow(false)}
  handleClose={handleClose}
  categories={categories} setCategories={setCategories}
  setCategory ={setCategory} category={category}
/>
        {/* ----------------Table--------------------------    */}


        <Table striped bordered hover>
  <thead style={{ textAlign: "center" }}>
      <tr>
       <th style={{width: "10%"}}>Img</th>
        <th>Categorias</th>
        <th>Description</th> 
        <th>Editar</th>
        <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
     {categories.length === 0 ? (
      <tr><td colSpan="5" style={{ textAlign: "center" }}>sin productos</td></tr>
      ) : (
      categories.map((item) => (
      <tr key={item.id}>
      <td><img alt="pic" src={item.img} style={{width: "100%"}} /></td> 
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td><Button variant="warning" onClick={() => editar(item)}>Editar</Button></td>
      <td><Button variant="danger"  onClick={() => deleteCategory(item.categoryID)} > Eliminar </Button> </td>
       </tr>)))}
      </tbody>
      </Table>


  
      </div>
      </div>
    );
  }
  export default CategoryForm;