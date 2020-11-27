import React, { useState} from 'react'
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//Internos
import Nav from '../Nav/Nav';
import {Table, Modal, Button, Form} from "react-bootstrap";
import { connect } from 'react-redux';
import axios from "axios"


function User({userArray , editUserState}) {
    const[user, setUser]=useState({firstName:"", lastName:"", email:"", edad:"" });
    const [show, setShow] = useState(false);
    const [editId, setEditId]=useState()
    const handleClose = () => setShow(false);
   
    
    const columnas = [
        { title: 'ID', field: 'id' ,type:'numeric'},
        { title: 'Nombre', field: 'firstName' },
        { title: 'Apellido', field: 'lastName' },
        { title: 'Rol', field: 'rol' },
        { title: 'Email', field: 'email' },
        { title: 'Edad', field: 'edad',type: 'numeric' },
    ]
    let data =[]
   
    if(userArray){
        userArray.map(user =>{
            data.push({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                edad: user.edad,
                rol: user.rol
            })
        })
    }
    function onChange(e) {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
      }




      const etapaModal=(id)=>{
        setShow(true)
        setEditId(id)
      }



    const editUser= async(id,data)=>{
      const url = `user/${id}`
      await axios.put(url,data)
            .then(res => {
                console.log(res)
                setShow(false)
            })

    }

    const deleteUser=async(id)=>{
      const url = `user/${id}`
      await axios.delete(url)
            .then(res => {
                console.log(res)
            })

    }



   

    
    return(
        <div>
            <Nav/>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Tabla de usuarios"
                actions = {[
                    {
                        icon: EditIcon,
                        tooltip: 'Editar Usuario',
                        onClick: (event,rowData) => {etapaModal(rowData.id)}
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Eliminar Usuario',
                        onClick: (event,rowData) => {deleteUser(rowData.id)}
                    },
                ]}
                options= {{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
            />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text" 
            name="firstName"
            placeholder="nombre"
            onChange={onChange}
            value={user.firstName}
          />
          <br/>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="apellido"
            onChange={onChange}
            value={user.lastName}
          /> <br/>
            {/*  <Form.Control
            type="text" 
            name="userName"
            placeholder="usuario"
            onChange={onChange}
            value={user.rol}
          />
          <br/> */}

            <Form.Control
              type="text"   
              name="email"
            placeholder="email"
              onChange={onChange}
              value={user.email}
            />
            <br/>
            <Form.Control
              type="text"   
              name="edad"
            placeholder="edad"
              onChange={onChange}
              value={user.edad}
            />
            
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={editUser(editId,user)}>
           Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}


    
export default User
