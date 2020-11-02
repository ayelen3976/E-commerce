import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom';
import MaterialTable from 'material-table';
import Nav from '../Nav/Nav'
import { Button } from 'react-bootstrap';




function HistorialDetails(props){
console.log(props.match.params)

const [productos,setProductos]=useState([])



const columnas = [
    { title: 'name', field: 'name' },
    { title: 'description', field: 'description' },
    { title: 'price', field: 'price' },
    
]
let data =[]

productos.map(product =>{
    data.push({
        name:product.name,
        description:product.description,
        price:product.price,
    })
})



useEffect(()=>{
    Axios.get(`/order/${props.match.params.id}`).then((res)=>{
        setProductos(res.data.products)
    })
},[])


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
            <Button onClick={()=>props.history.push('/historial')}>atras</Button>
        </div>

    )

}
export default withRouter(HistorialDetails)
