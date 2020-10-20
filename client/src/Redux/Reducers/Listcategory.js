import {GET_CATEGORY} from '../Actions/actiontypes';
const initialState = {};
export default function categoryReducer(state=initialState, action){
  switch(action.type){
    case GET_CATEGORY:
        return{
          ...state,
          category: action.payload
        }
        default: 
        return state;
      }

}
