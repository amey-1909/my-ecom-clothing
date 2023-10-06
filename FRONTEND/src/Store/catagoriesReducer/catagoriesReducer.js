import { catagoriesActionType } from "./catagoriesActionType";
const INITIAL_STATE={
    catagories:[]
}
export function catagoriesReducer(state=INITIAL_STATE,action){
    let {type,payload}=action;
    switch (type){
        case catagoriesActionType.SET_CATAGORIES:
            return {state,...payload}
        default:
            return state
    }
}