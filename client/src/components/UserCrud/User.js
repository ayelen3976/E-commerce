import React from 'react'
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Nav from '../Nav';
// import Button from '@material-ui/core/Button';

function User({userArray , editUserState}) {

   
    
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
                        tooltip: 'Editar Orden',
                        onClick: (event,rowData) => {editUserState(rowData.id)}
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Eliminar Orden',
                        onClick: (event,rowData) => {}
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
    
export default User;