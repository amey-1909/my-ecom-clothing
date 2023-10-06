import { catagoriesActionType } from "./catagoriesActionType";
export function setCatagories(catagories){
    return {type:catagoriesActionType.SET_CATAGORIES,payload:{catagories:catagories}}
}