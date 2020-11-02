import React, {useState,useEffect} from 'react';
import './Profile.css';
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux'
import axios from 'axios'

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
        axios.get(`/user`, {
            params: {
                id: id
            }
        }).then((res)=>{
            console.log(res.data, 'aquii')
            setUsuario(res.data)
        }).catch((err)=>{console.log('no recibe data')})
    }


    useEffect(()=>{
        traerUsuario(idUser)
        console.log(usuario, 'eluser')
    },[usuario])

    return (
        <div className='App'>
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