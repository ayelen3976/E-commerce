import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/auth'
import { Modal,  Button } from 'react-bootstrap'
import LoginWithGoogle from '../LoginGoogle/GoogleWithLogin'
import '../css/Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmitear = this.onSubmitear.bind(this)
    }

    

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitear(e) {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => { console.log("todo bien") })
        this.props.onHide()

    }

    render() {
        return (
            <div>
                <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign In
      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <div className='inputmodal-one'>
                            <input placeholder="email" type="text" name='email' onChange={this.onChange} value={this.state.email} />
                        </div>
                        <div className='inputmodal-two'>
                            <input placeholder="password" type="password" name='password' onChange={this.onChange} value={this.state.password} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" className='button-modal' onClick={(e) => this.onSubmitear(e)}>Submit</Button>
                        <LoginWithGoogle/>       
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }




}

const mapDispatchToProps = {
    login
}


export default connect(null, mapDispatchToProps)(Login)