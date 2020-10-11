import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { productos } from "../data.js";

const dataP = productos;


export default function Crud() {

  const [data, setData] = useState(dataP);
  const [modalEditar, setModalEditar] = useState(false); //falso para que permanezca cerrado
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [productoSelecionado, setproductoSelecionado] = useState({
    id: "",
    name: "",
    price: "",
    description: ""
  }); //para controlar que producto esta selecionado

  /* FUNCIONES PARA MANEJAR LOS EDITS */

  const selecionarProducto = (producto, caso) => {  //recibe CASO porque es la misma para edit y para eliminar
    setproductoSelecionado(producto);
    (caso === "Editar") ? setModalEditar(true):setModalEliminar(true)
  }

  const handleChange = e => { //esta captura los cambios de los input
    const { name, value } = e.target;
    setproductoSelecionado((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(productoSelecionado)
  }


  const editar=()=>{ //esta agarra los cambios de los productos
   var dataNueva = data;
   dataNueva.map(producto=>{
     if(producto.id === productoSelecionado.id){
       producto.name = productoSelecionado.name;
       producto.price = productoSelecionado.price;
       producto.description = productoSelecionado.description;
     }
   });
   setData(dataNueva);
   setModalEditar(false);
  }

  const eliminar = () => { //elimina un producto je //NO FUNCIONA
  setData( data.filter(producto => producto.id !== productoSelecionado.id));
  setModalEliminar(false);
  }
 
  const abrirModalInsertar = () =>{
    setproductoSelecionado(null);
    setModalInsertar(true)
  }

  const insertar = () =>{
    var valorInsertar = productoSelecionado;
    valorInsertar.id = data[data.length-1].id+1; //autoincrementar
    var dataNueva = data;
    dataNueva.push(valorInsertar)
    setData(dataNueva); //aca se agrega al estado
    setModalInsertar(false)
  }
  

  return (
    <div className="Crud">
      <button className="btn btn-sucess" onClick={()=>abrirModalInsertar()}>Agregar Producto</button>
      <br/><br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {dataP.map(elemento => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.price}</td>
              <td>{elemento.description}</td>
              <td><button className="btn btn-primary" onClick={() => selecionarProducto(elemento, "Editar")}>Editar</button>{"  "}</td>
              <td><button className="btn btn-danger" onClick={()=>selecionarProducto(elemento,"Eliminar")}>Eliminar</button>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <br />
          <div className="form-group">{/* no funciona */}
            <label>Identificador</label>
            <p
              className="form.-control"
              readOnly
              name="identificador"
              value={productoSelecionado && productoSelecionado.id}
            />
            <br />
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={productoSelecionado && productoSelecionado.name}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSelecionado && productoSelecionado.price}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSelecionado && productoSelecionado.description}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>editar()}
          >
            Actualizar
        </button>
          <button className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
        </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Está seguro que desea eliminar este producto? {productoSelecionado && productoSelecionado.name}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger"
           onClick={()=>eliminar()}
          >
            Sí!
          </button>
          <button className="btn btn-secondary"
          onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agregar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <etiqueta>ID</etiqueta>
            <input 
            className="form-control"
            readOnly
            type="text"
            name="id"
            value={data[data.length-1].id + 1} //para que sea autoincrementable
            />
            <br/>

            <label>Nombre</label>
            <input 
            className="form-control"
            type="text"
            name="name"
            value = {productoSelecionado ? productoSelecionado.nombre : ""}
            onChange={handleChange}
            />
            <br/>
            <label>Precio</label>
            <input 
            className="form-control"
            type="text"
            name="price"
            value = {productoSelecionado ? productoSelecionado.price : ""}
            onChange={handleChange}
            />
            <br/>
            <label>Descripción</label>
            <input 
            className="form-control"
            type="text"
            name="description"
            value = {productoSelecionado ? productoSelecionado.description : ""}
            onChange={handleChange} //para que nos permita realizar cambios en cada input
            />
            <br/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()} 
          >
            Insertar
          </button>
          <button className="btn btn-danger"
          OnClick={()=>modalInsertar(false)} //por alguna razon no funciona
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

