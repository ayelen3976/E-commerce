import React from 'react'
//Externas
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Nav from '../Nav';
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
            <Nav/>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Tabla de ordenes"
               
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
    





