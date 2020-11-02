
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import ForwardIcon from '@material-ui/icons/Forward';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import Nav from '../Nav/Nav'


function Historial(props){


    const [ordenes,setOrdenes] = useState([])
    //console.log(props.usuario)
  


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
            })
        })

        useEffect(()=>{
            axios.get(`/user/${props.usuario.user.id}/order`).then((res)=>{
                console.log(res.data)
                setOrdenes(res.data)
            }).catch((e)=>{
                console.log(e)
            })
        },[])
    return(
        <div>
            <Nav/>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Tabla de ordenes"
                actions = {[
                    {
                        icon: ForwardIcon,
                        tooltip: 'Ver Detalles de la Orden',
                        onClick: (event,rowData)=> {props.history.push(`/hdetails/${rowData.id}`)}
                         
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
const mapStateToProps = (state) => ({
    usuario: state.auth
  });

export default withRouter(connect(mapStateToProps,null)(Historial))