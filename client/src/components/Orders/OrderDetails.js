import React from 'react'
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ForwardIcon from '@material-ui/icons/Forward';
// import Button from '@material-ui/core/Button';

function OrderDetails({orderArray ,goTo ,editOrderState}) {
    
    const columnas = [
        { title: 'Order ID', field: 'orderId' ,type:'numeric'},
        { title: 'User ID', field: 'userId' ,type:'numeric'},
        { title: 'Estado Actual', field: 'estado' },
        { title: 'Dirección', field: 'direccion' },
        { title: 'Telefono', field: 'telefono' },
        { title: 'Email', field: 'email' }
    ]
    let data =[]
   
    if(orderArray){
        orderArray.map(order =>{
            data.push({
                orderId: order.id,
                userId:order.userId,
                estado: order.estado,
                direccion: order.direccion,
                telefono: order.telefono,
                email: order.email
            })
        })
    }
    
    return(
        <div>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Tabla de ordenes"
                actions = {[
                    {
                        icon: ForwardIcon,
                        tooltip: 'Ver Detalles de la Orden',
                        onClick: (event,rowData) => goTo(`/admin/orders/${rowData.userId}`)
                    },
                    {
                        icon: EditIcon,
                        tooltip: 'Editar Orden',
                        onClick: (event,rowData) => alert('Has presionado editar' + rowData.orderId)
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Eliminar Orden',
                        onClick: (event,rowData) =>  editOrderState("Carrito",rowData.orderId)
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

    
export default OrderDetails;
    





