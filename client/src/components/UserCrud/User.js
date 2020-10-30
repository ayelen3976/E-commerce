import React from 'react'
import {connect} from 'react-redux';
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//Internos
import Nav from '../Nav';
import {editUserState ,deleteUser} from '../../Redux/Actions/userActions';
// import Button from '@material-ui/core/Button';

function User({userArray , editUserState, deleteUser , goTo}) {

   
    
    const columnas = [
        { title: 'ID', field: 'id' ,type:'numeric'},
        { title: 'Nombre', field: 'firstName' },
        { title: 'Apellido', field: 'lastName' },
        { title: 'Rol', field: 'rol' },
        { title: 'Email', field: 'email' },
        { title: 'Edad', field: 'edad',type: 'numeric' },
    ]
    let data =[]
   
    if(userArray){
        userArray.map(user =>{
            data.push({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                edad: user.edad,
                rol: user.rol
            })
        })
    }

    const onClickEvent= (e,id) =>{
        e.preventDefault()
        editUserState(id)
        goTo(`/users`)
    }
    const onClickDelete = (e,id) =>{
        e.preventDefault()
        deleteUser(id)
        goTo(`/users`)
    }

    
    return(
        <div>
            <Nav/>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Tabla de usuarios"
                actions = {[
                    {
                        icon: EditIcon,
                        tooltip: 'Promote User',
                        onClick: (event,rowData) => {onClickEvent(event,rowData.id)}
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Delete User',
                        onClick: (event,rowData) => {onClickDelete(event,rowData.id)}
                    },
                ]}
                options= {{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
            />
        </div>
    )
}

const mapDispatchToProps = {
    editUserState,
    deleteUser
}

export default connect(null,mapDispatchToProps)(User);