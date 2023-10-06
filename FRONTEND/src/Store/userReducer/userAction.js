import { userActionType } from "./userActionType"
export function setCurrentUser(user){
    return ({type:userActionType.SET_CURRENT_USER,payload:{currentUser:user}})
}