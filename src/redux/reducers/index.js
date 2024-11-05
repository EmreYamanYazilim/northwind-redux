import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";


const rootReducer = combineReducers({
    changeCategoryReducer
    // changeCategoryReducer:changeCategoryReducer  // normalde bu şkilde yazılır ama aynı ismi verdiğimizden dolayı böyle yukarıdaki gibi tek yazabiliyoruz 
})

export default rootReducer;