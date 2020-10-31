import { GET_USERS ,EDIT_USER_STATE } from '../Actions/actiontypes';
const initialState = [];


function userReducer(state = initialState, {type , payload}) {
    switch (type) {
        case GET_USERS: return {
            ...state,
            users: payload
          }
        case EDIT_USER_STATE:
            state.users.map(user =>{
                if(user.id === payload.id){
                    user.rol = payload.rol
                }
            })
            return state; 
        default:
            return state;
    }

}

export default userReducer;