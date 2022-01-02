import { combineReducers } from "redux";
import userReducer from "./userReducer";
import pageContentReducer from "./pageContentReducer";
const allReducers = combineReducers({
    userReducer : userReducer,
    pageContentReducer : pageContentReducer,
})

export default allReducers;