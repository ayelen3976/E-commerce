import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers , editUserState} from '../../Redux/Actions/userActions';

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
                <User editUserState={editUserState} userArray={userData} goTo={(path)=> this.props.history.push(path)} />
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
    editUserState
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserContainer)) ;