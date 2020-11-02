
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import ForwardIcon from '@material-ui/icons/Forward';


function Historial(goTo){


    const [ordenes,setOrdenes] = useState([])

  


    const columnas = [
        { title: 'direccion', field: 'direccion' },
        { title: 'email', field: 'email' },
        { title: 'estado', field: 'estado' },
        { title: 'id', field: 'id' },
        { title: 'telefono', field: 'telefono' },
    ]
    let data =[]
   
    
        ordenes.map(product =>{
            data.push({
                direccion:product.direccion,
                email:product.email,
                estado:product.estado,
                id:product.id,
                telefono:product.telefono

                // id: product.id,
                // orderId: product.orderline.orderId,
                // producto: product.name,
                // cantidad: product.orderline.cantidad,
                // precio: product.orderline.precio
            })
        })

        useEffect(()=>{
            axios.get(`/user/13/order`).then((res)=>{
                console.log(res.data)
                setOrdenes(res.data)
            })
        },[])
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
                        onClick: (event,rowData) => goTo(`user/orders/${rowData.orderId}`)
                    }]}
               
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

export default Historial;