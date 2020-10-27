import {PROMEDIO_ESTRELLAS} from '../Actions/actiontypes';
const initialState = {
    numero:0
};
export default function promedioEstrellas(state=initialState, action){
  switch(action.type){
    case PROMEDIO_ESTRELLAS:

        return{
          ...state,
          numero: action.number
        }
        default: 
        return state;
      }

}
