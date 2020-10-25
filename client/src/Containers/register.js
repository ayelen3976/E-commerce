import React from 'react';
import  {Form, Modal,Button, Col} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
 


class Register extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      name:"",
      lastname:"",
      username:"",
      email:"",
      edad:"",
      password: "",
      profilePic:"",
      openAction:false,
      openActionError:false
      
    }
    this.onChange= this.onChange.bind(this);
    this.onSubmitear= this.onSubmitear.bind(this);
    this.onCloseAction=this.onCloseAction.bind(this);
    this.onCloseActionError=this.onCloseActionError.bind(this);
    this.openModal=this.openModal.bind(this);
    this.openModalError=this.openModalError.bind(this);
   
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(`la propiedad seria ${[e.target.name]}:${e.target.value}`)
  }


  onSubmitear(e){
    console.log(this.state)
    e.preventDefault();
    axios({
      method: 'post',
      url: '/user',
      data: {
        firstName: this.state.name,
        lastName: this.state.lastname,
        userName: this.state.username,
        email: this.state.email,
        edad: this.state.edad,
        password: this.state.password,
        profilePic: this.state.profilePic,
        
      }
    })
    .then(res =>{
      this.openModal()


    }

    ). catch(err=>{
      this.openModalError()
    })
  };


onCloseAction(){
  
  this.setState({
    openAction:false
  })

};


onCloseActionError(){
  this.setState({
    openActionError:false
  })

}

openModal(){
  this.setState({
    openAction:true
  })
}

openModalError(){
  this.setState({
    openActionError:true
  })
}

 render(){
    return (
      <div>
        <div>
           
      <Form >
        
         
        <div className="form-group">
          <Form.Row> 
          <Form.Group controlId="formBasicEmail" as={Col} md="7">
          <Form.Label >Nombre</Form.Label>
          
          <Form.Control 
          value={this.state.name}
          onChange={this.onChange}
          type="text"
          name="name"
          placeholder="Ponga aqui su nombre"
          />
          
          </Form.Group>
           
          
          <Form.Group controlId="formBasicText"> 
          <Form.Label >Apellido</Form.Label>
          <Form.Control 
          value={this.state.lastname}
          onChange={this.onChange}
          type="text"
          name="lastname"
          placeholder="Ponga aqui su apellido"
          />
          
          </Form.Group>
          </Form.Row>
          <Form.Row> 
          <Form.Group as={Col} md="7"> 
          <Form.Label>Username</Form.Label>
          <Form.Control 
          value={this.state.username}
          onChange={this.onChange}
          type="text"
          name="username"
          placeholder="Ponga aqui su nombre de usuario"
          />
          </Form.Group>

          <Form.Group>
        
          <Form.Label>Edad</Form.Label>
          <Form.Control 
          value={this.state.edad}
          onChange={this.onChange}
          type="text"
          name="edad"
          placeholder="introduzca su edad"
          />
          </Form.Group>
          </Form.Row>
        <Form.Group controlID="formBasicEmail" md="3"> 
          <Form.Label>Email</Form.Label>
          <Form.Control 
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          name="email"
          placeholder="ponga aqui su email personal"
          />
          </Form.Group>

          <Form.Group controlID="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
            type="password"
            placeholder="ponga aqui su contraseña"
            onChange={this.onChange}
            value={this.state.password}
            name='password'
            />
          </Form.Group>

          <Form>

    <Form.File id="exampleFormControlFile1" value={this.state.profilePic} label="Foto de perfil" />


          <Button variant="outline-warning" style={{marginRight:'10px'}}><Link to='/products' style={{color:'#ffc107',textDecoration:'none'}}>Volver</Link></Button>

          <Button variant="outline-warning" onClick={(e)=>this.onSubmitear(e)}  >
            Registrarse
          </Button>
          </Form>
        </div>
    



    <Modal show={this.state.openAction} onHide={this.onCloseAction}>
        <Modal.Header closeButton onClick={this.onCloseAction}>
          
        </Modal.Header>
        <Modal.Body> <h4> Usuario creado con exito</h4></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning"  closeButton  onClick={this.onCloseAction} > 
          <Link to='/products'>Cerrar</Link>
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={this.state.openActionError} onHide={this.onCloseActionError}>
        <Modal.Header closeButton onClick={this.onCloseAction}>
          
        </Modal.Header>
        <Modal.Body> <h4> Ups! Parece que hubo un error. Por favor llene los campos correctamente y vuelva a intentarlo</h4></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning"  closeButton  onClick={this.onCloseActionError} > 
          Cerrar
          </Button>
        </Modal.Footer>
      </Modal>


      </Form>
      
      
        
        </div>
      </div>
      
      
      
    )
  }
    

    }

   

export default Register;