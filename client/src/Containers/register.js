import React from 'react';
import bootstrap, {Form} from 'react-bootstrap';
import axios from 'axios'

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      name:"",
      lastnmae:"",
      username:"",
      email:"",
      edad:"",
      profilePic:""
    }
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(`la propiedad seria ${[e.target.name]}:${e.target.value}`)
  }


  onSubmit(e){
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/user',
      data: {
        firstName: this.state.name,
        lastName: this.state.lastname,
        userName: this.state.username,
        email: this.state.email,
        edad: this.state.edad,
        profilePic: this.state.profilePic,
        description: "queonda"
        
      }
    })
    .then(user=>{
      console.log(user)
    })
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Unite a la comunidad de Green-Shop</h1>
        <div className="form-group">
          <label className="control-label">Nombre</label>
          <input 
          value={this.state.name}
          onChange={this.onChange}
          type="text"
          name="name"
          className="form control"
          />
          <br/>

    <label className="control-label">Apellido</label>
          <input 
          value={this.state.lastname}
          onChange={this.onChange}
          type="text"
          name="lastname"
          className="form control"
          />
          <br/>
          <label className="control-label">Username</label>
          <input 
          value={this.state.username}
          onChange={this.onChange}
          type="text"
          name="username"
          className="form control"
          />
          <br/>
          <label className="control-label">Edad</label>
          <input 
          value={this.state.edad}
          onChange={this.onChange}
          type="text"
          name="edad"
          className="form control"
          />
          <br/>
          <label className="control-label">Email</label>
          <input 
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          name="email"
          className="form control"
          />
          <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" value={this.state.profilePic} label="Foto de perfil" />
  </Form.Group>
</Form>

          <button className="btn btn-primary btn-lg">
            Registrarse
          </button>
        </div>
      </form>
    )
  }
    

    }

   

export default Register;