import { userActionType } from "./userActionType";
const INITIAL_STATE={
    currentUser:null
}
export const UserReducer=(state=INITIAL_STATE,action)=>{
let {type,payload}=action;
switch (type) {
    case userActionType.SET_CURRENT_USER:
        return {state,...payload}
    default:
        return state
}
}