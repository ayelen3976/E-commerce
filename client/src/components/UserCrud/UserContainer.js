import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers } from '../../Redux/Actions/userActions';

//Componentes
import User from './User';





class UserContainer extends Component {


    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { userData } = this.props;
        // console.log(orderReducer)
        // console.log(this.props)
    
        return (
            <div >
                <User userArray={userData} goTo={(path)=> this.props.history.push(path)} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.usersP.users,
    }
}

const mapDispatchToProps = {
    getUsers,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserContainer)) ;