import React from 'react'
//Externas
import MaterialTable from 'material-table';
import Nav from '../Nav/Nav';
// import Button from '@material-ui/core/Button';

function Order({orderArray}) {

//    console.log(orderArray)
    
    const columnas = [
        { title: 'ID', field: 'id' ,type:'numeric'},
        { title: 'Order ID', field: 'orderId' ,type:'numeric'},
        { title: 'Producto', field: 'producto' },
        { title: 'Cantidad', field: 'cantidad' },
        { title: 'Precio', field: 'precio' },
    ]
    let data =[]
   
    if(orderArray){
        orderArray.map(product =>{
            data.push({
                id: product.id,
                orderId: product.orderline.orderId,
                producto: product.name,
                cantidad: product.orderline.cantidad,
                precio: product.orderline.precio
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
    





