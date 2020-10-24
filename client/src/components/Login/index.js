import React, { Component } from 'react'
import {connect}  from 'react-redux';
import {login} from '../../Redux/Actions/auth'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : ""
        }

        this.onChange= this.onChange.bind(this)
        this.onSubmitear= this.onSubmitear.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitear(e){
        e.preventDefault()
        this.props.login(this.state)
        .then(()=>{console.log("todo bien")})
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="email" type="text" name='email' onChange={this.onChange} value={this.state.email}/>
                    <input placeholder="password" type="password" name='password' onChange={this.onChange} value={this.state.password}/>
                    <button onClick={(e) => this.onSubmitear(e)}>Submit</button>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = {
    login
}


export default connect(null,mapDispatchToProps)(Login)