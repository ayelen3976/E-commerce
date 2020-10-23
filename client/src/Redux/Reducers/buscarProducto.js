import {BUSCAR_PRODUCTO} from '../Actions/actiontypes';
const initialState = {
    productes:[]
};
export default function buscadorReducer(state=initialState, action){
  switch(action.type){
    case BUSCAR_PRODUCTO:
        return{
          ...state,
          productes: action.payload
        }
        default: 
        return state;
      }

}
