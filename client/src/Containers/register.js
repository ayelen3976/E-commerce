import React from 'react';
import  {Form, Modal,Button} from 'react-bootstrap';
import axios from 'axios';
import { Link , useHistory} from 'react-router-dom'
import '.././Components/css/Register.css'


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
    this.Handleimage= this.Handleimage.bind(this);

   
  }

  Handleimage(e){
     var file = e.target.files[0]

    
    if(file) {
      const reader = new FileReader()
      reader.addEventListener("load", function() {
        this.setState({
          profilePic: this.result
        })
      })
      reader.readAsDataURL(file)
      // console.log(file)
    } 
    // console.log(this.state)
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
    
    // console.log(`la propiedad seria ${[e.target.name]}:${e.target.value}`)
  }


  onSubmitear(e){
  
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
        profilePic: this.state.profilePic.name,
        
      }
      
    }).then(res =>{
      console.log(this.data, 'Laaa dataaa')
      this.openModal()


    }

    ). catch(err=>{
      this.openModalError()
    })
  };

  profilePic= event=>{
    this.setState({
      profilePic : event.target.files[0]
    })
   
  }


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
      <div className='component'>
<div className='tituloregister'>  

</div>

        <div className='Form'>
           <form>
         <div className="form-group">
          <p >Nombre</p>
          
          <Form.Control 
          value={this.state.name}
          onChange={this.onChange}
          type="text"
          name="name"
          placeholder="Nombre"
          className='form-area'
          />
  
          <p >Apellido</p>
          <Form.Control 
          value={this.state.lastname}
          onChange={this.onChange}
          type="text"
          name="lastname"
          placeholder="Apellido"
          className='form-area'
          />
          
  
       
        
          <p>Username</p>
          <Form.Control 
          value={this.state.username}
          onChange={this.onChange}
          type="text"
          name="username"
          placeholder="nombre de usuario"
          className='form-area'
          />



        
          <p>Edad</p>
          <Form.Control 
          value={this.state.edad}
          onChange={this.onChange}
          type="text"
          name="edad"
          placeholder="edad"
          className='form-area'
          />

        

          <p>Email</p>
          <Form.Control 
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          name="email"
          placeholder="email personal"
          className='form-area'
          />
    

            <p>Contraseña</p>
            <Form.Control 
            type="password"
            placeholder="contraseña"
            onChange={this.onChange}
            value={this.state.password}
            name='password'
            className='form-area'
            />
            <br/>
     

   
    <input style={{display: "-webkit-inline-box"}}  name='profilePic' type='file'  onChange={this.profilePic}/>
    <br/>
    <br/>


     <Button className='button-register' variant="outline-warning" onClick={(e)=>this.onSubmitear(e)}  >
            Registrarse
          </Button>
          </div>
          </form>
      
    



    <Modal show={this.state.openAction} onHide={this.onCloseAction}>
        <Modal.Header closeButton onClick={this.onCloseAction}>
          
        </Modal.Header>
        <Modal.Body> <h4> Usuario creado con exito</h4></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success"  closeButton  onClick={this.onCloseAction} > 
          <Link to='/products'>Cerrar</Link>
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={this.state.openActionError} onHide={this.onCloseActionError}>
        <Modal.Header closeButton onClick={this.onCloseAction}>
          
        </Modal.Header>
        <Modal.Body> <h4> Ups! Parece que hubo un error. Por favor llene los campos correctamente y vuelva a intentarlo</h4></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success"  closeButton  onClick={this.onCloseActionError} > 
          Cerrar
          </Button>
        </Modal.Footer>
      </Modal>


   
      
      
        
        </div>
      </div>
      
      
      
    )
  }
    

    }

   

export default Register;