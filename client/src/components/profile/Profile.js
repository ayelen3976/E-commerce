import React, {useState,useEffect} from 'react';
import './Profile.css';
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux'
import axios from 'axios'
import Nav from '../Nav/Nav'

function Profile({idUser}){

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

    const traerUsuario = (id)=>{
        axios.get(`user/${id}`).then((res)=>{
            console.log(res.data)
            setUsuario(res.data)
        })
    }


    useEffect(()=>{
        traerUsuario(idUser)
        console.log(usuario)
    },[])

    return (
        <div className='App'>
            <Nav/>
            <br/>
            <ProfileCard 
            userName={usuario.userName}
             firstName= {usuario.firstName} 
             lastName={usuario.lastName} 
             rol={usuario.rol} 
             edad={usuario.edad} 
             email={usuario.email}
             profilePic={usuario.profilePic}
            />

        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        idUser:state.auth.user.user.id
    }
}


export default connect(mapStateToProps,null)(Profile);