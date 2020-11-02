import React, {useState,useEffect} from 'react';
import './Profile.css';
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux'
import axios from 'axios'
import Nav from '../Nav/Nav';
import { Button, Modal,Form} from 'react-bootstrap'

function Profile({user}){

    const [usuario,setUsuario]=useState({
        id:"",
        userName:"",
        firstName:"",
        lastName:"",
        rol:"",
        edad:"",
        email:"",
        profilePic:""
    })
    const [password, setPassword]=useState({password:""})

//-------------------------HOOKKKSSSSSSSS------------------

    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword]=useState(false);

//------------FUNCIONESSSSSSSS

    const handleClose = () => setShow(false);
    const handleClosePassword = () => setShowPassword(false);
    

    const traerUsuario = (id)=>{
        // axios.get(`/user`, {
        //     params: {
        //         id: id
        //     }
        // }).then((res)=>{
        //     console.log(res.data, 'aquii')
        //     setUsuario(res.data)
        // }).catch((err)=>{console.log('no recibe data')})
        setUsuario(user)
        
    }

    function onChange(e){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handlerEditUser= async(id)=>{
      
       const {error, data}=await axios.put(`user/${id}`,{
            userName: usuario.userName,
            firstName: usuario.firstName,
            lastName: usuario.lastName,
            email: usuario.email,
            edad: usuario.edad,
            profilePic: usuario.profilePic
            
        })
         if(!error){
        console.log(data)
         } 
       
         else {
           console.log(error)
        }
    }
        
    function Handleimage(e){
        var file = e.target.profilePic
        if(file) {const reader = new FileReader()
        reader.addEventListener("load", ()=> {
            setUsuario({ 
        ...usuario,
        img: this.result
        })})
        reader.readAsDataURL(file)}}

        const handlerEditPassword=(id)=>{
            axios.put(`user/${id}/passwordReset`, {
                password: password.password
            })
        }

        function onChangePassword(e){
            setPassword({
                ...password,
                password: e.target.value
            })
        }

//------------------ACA ARRANCAAA 

    useEffect(()=>{
        traerUsuario()
        
    },[])

    return (
        <div className='App'>
            <Nav />
            <ProfileCard 
            userName={usuario.userName}
             firstName= {usuario.firstName} 
             lastName={usuario.lastName} 
             rol={usuario.rol} 
             edad={usuario.edad} 
             email={usuario.email}
             profilePic={usuario.profilePic}
            />
            <Button  onClick={()=> setShow(true)} className="botonEditar">
            Editar 
            </Button>
            <Button onClick={()=> setShowPassword(true)} className="botonContraseña">
                Cambiar Contraseña
            </Button>

{/* //----------Modal editar datos del usuario-------------- */}

    <Modal show={show}>
          <Modal.Header >
            <Modal.Title>Modifique sus datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Nuevo nombre de usuario"
              name="userName"
              onChange={onChange}
              value={usuario.userName}
              
            />
            <br/>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              name="firstName"
              onChange={onChange}
              value={usuario.firstName}
             
            /> <br/>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              name="lastName"
              onChange={onChange}
              value={usuario.lastName}
             
            /> <br/>
  
              <Form.Control
                type="text"
                placeholder="Tu Email"
                name="email"
                onChange={onChange}
                value={usuario.email}
                
              />
              <br/>
              <Form.Control
                style={{display: "-webkit-inline-box"}}
                type="file"
                name="profilePic"
                onChange={Handleimage}
                value={usuario.profilePic}
               
              />
            <br/>
            <br/>
            
            <Form.Control
            type="text"
            placeholder="¿Cuantos años tenés?"
            onChange={onChange}
            value={usuario.edad}
          
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Cerrar
            </Button>
            <Button variant="outline-success" onClick={()=>handlerEditUser(user.id)} onClick={handleClose}>
             Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
        {/* //----------Modal editar contraseña-------------- */}

        <Modal show={showPassword}>
          <Modal.Header >
            <Modal.Title>Modifique sus datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="password"
              placeholder="Nueva contraseña"
              name="userName"
              onChange={onChangePassword}
              value={password.password}
              
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Cerrar
            </Button>
            <Button variant="outline-success" onClick={()=>handlerEditPassword(user.id)} onClick={handleClosePassword}>
             Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
  

        </div>


        
    )
}

const mapStateToProps = (state)=>{
    return{
      user :state.auth.user
    }
}

export default connect(mapStateToProps,null)(Profile);