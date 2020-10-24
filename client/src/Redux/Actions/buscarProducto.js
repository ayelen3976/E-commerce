import axios from 'axios';
import {BUSCAR_PRODUCTO} from './actiontypes';

 export default function buscarProducto(texto){
   //   let busqueda = texto
     return function (dispatch){
        return axios.get( `/products/search?query=${texto}`)
        .then(res=>{
           // const elementos = res.data.filter(elemento => elemento.name == busqueda)
             dispatch({type: BUSCAR_PRODUCTO, payload:res.data })
           // console.log("Data returned: ", elementos);
        })
        .catch(err => {
           console.log({message: "ERROR EN AXIOS" , error: err})
        })
     }
    
}
