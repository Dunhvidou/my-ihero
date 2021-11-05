import { USER } from "./action"

const initialState={
    data:null
}
const UserReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER:return {...state,data:action.data};
        default:return state;
    }
}
export default UserReducer;