import React, {useState} from 'react'
//Externas
import MaterialTable from 'material-table';
import { Modal, Button} from "react-bootstrap";
import Select from 'react-select';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ForwardIcon from '@material-ui/icons/Forward';
import {connect} from 'react-redux'
import {editOrderState} from '../../Redux/Actions/orderActions';
import Nav from '../Nav/Nav';
import "./style.css"

function OrderDetails({orderArray ,goTo ,teMandoUnCambio}) {
    const [editOpenModal, setEditOpenModal]=useState(false);
    const [cancelOpenModal, setCancelOpenModal]=useState(false);
    const [ordenIdEnviar,setOrdenIdEnviar] =useState()
    const [estado, setEstado]=useState();

    
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



const handlerEditState=(idOrden)=>{
    setOrdenIdEnviar(idOrden)
    setEditOpenModal(true)
}

const handlerCancelState=(idOrden)=>{
    setOrdenIdEnviar(idOrden)
    setCancelOpenModal(true)
}

const handleChangeOptions = selectedOption =>{
    setEstado(selectedOption.value)
  } 

  const options = [
    { value: 'Carrito', label: 'Carrito' },
    { value: 'Creada', label: 'Creada' },
    { value: 'Procesando', label: 'Procesando' },
    { value: 'Cancelada', label: 'Cancelada' },
    { value: 'Completa', label: 'Completa' },
  ]

  
  


    
    return(
        
        <div className="divOrderDetails">
            <Nav/>
            <MaterialTable
                columns={columnas}
                data={data}
                title="Mis ordenes"
                actions = {[
                    {
                        icon: ForwardIcon,
                        tooltip: 'Ver Detalles de la Orden',
                        onClick: (event,rowData) => goTo(`/admin/orders/${rowData.orderId}`)
                    },
                    {
                        icon: EditIcon,
                        tooltip: 'Editar Orden',
                        onClick: (event,rowData) => {handlerEditState(rowData.orderId)}
                    },
                    {
                        icon: DeleteForeverIcon,
                        tooltip: 'Eliminar Orden',
                        onClick: (event,rowData) => {handlerCancelState(rowData.orderId)}
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


               
            /> <Modal show={editOpenModal} onHide={()=>setEditOpenModal(false)}>
                <Modal.Header closeButton>
                 
                </Modal.Header>
                <Modal.Body>
        
                  <Select 
                  closeMenuOnSelect={false} 
                   options={options}  
                   onChange={handleChangeOptions}/>
                  
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={editOrderState()} onClick={()=>{teMandoUnCambio(estado,ordenIdEnviar)
                setEditOpenModal(false)}} >
                    Guardar Cambios 
                  </Button>
                  <Button variant="secondary" onClick={()=>setEditOpenModal(false)}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>


              <Modal show={cancelOpenModal} onHide={()=>setCancelOpenModal(false)}>
                <Modal.Header closeButton>
                 
                </Modal.Header>
                <Modal.Body>
                  <h4>¿Desea cancelar la orden {ordenIdEnviar}?</h4>
        
                 
                  
                </Modal.Body>
                <Modal.Footer>
                     <Button variant="warning" onClick={editOrderState()} onClick={()=>{teMandoUnCambio('Cancelada',ordenIdEnviar)
                setCancelOpenModal(false)}} >
                    Si 
                  </Button>

                  <Button variant="secondary" onClick={()=>setCancelOpenModal(false)}>
                    No
                  </Button>
                 
                </Modal.Footer>
              </Modal>
        </div>
    )
}

    



const mapDispatchToProps={
    teMandoUnCambio:editOrderState,
    
}



export default connect(null,mapDispatchToProps)(OrderDetails);
    





