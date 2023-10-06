import React,{useEffect} from "react";
import CatagoriesPreview from "../../catagoriesPreview/CatagoriesPreview";
import { setCatagories } from "../../../Store/catagoriesReducer/catagoriesAction";
import { Route, Routes } from "react-router-dom";
import CatagorieProducts from "../../catagorieProducts/catagerieProducts";
import { useDispatch, useSelector } from "react-redux";
function Shop(){
    let dispatch=useDispatch()
    let catagories=useSelector(state=>{
        return state.catagories.catagories;
    })
    useEffect( ()=>{
        fetch("http://localhost:5000/catagoriesItem").then(res=>{
            res.json().then(catagories=>{
               dispatch(setCatagories(catagories))
            })
        });
    },[dispatch])
    return<Routes>
    <Route index element={catagories?<CatagoriesPreview catagories={catagories}/>:null}></Route>
    <Route path=":title" element={<CatagorieProducts catagories={catagories}/>}></Route>
    </Routes>
}
export default Shop;