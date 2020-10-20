import React from 'react'
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ForwardIcon from '@material-ui/icons/Forward';
// import Button from '@material-ui/core/Button';

function Order({orderArray}) {
    
    const columnas = [
        { title: 'ID', field: 'id' ,type:'numeric'},
        { title: 'Order ID', field: 'orderId' ,type:'numeric'},
        { title: 'Producto ID', field: 'producto' },
        { title: 'Cantidad', field: 'cantidad' },
        { title: 'Precio', field: 'precio' },
    ]
    let data =[]
   
    if(orderArray){
        orderArray.map(order =>{
            data.push({
                id: order.id,
                orderId:order.orderId,
                producto: order.productId,
                cantidad: order.cantidad,
                precio: order.precio
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
                        icon: EditIcon,
                        tooltip: 'Editar Orden',
                        onClick: (event,rowData) => alert('Has presionado editar' + rowData.orderId)
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Eliminar Orden',
                        onClick: (event,rowData) => alert('Desea eliminar esta orden' + rowData.orderId)
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
    
export default Order;
    





