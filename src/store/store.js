import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import EmployeeReducer from "./EmployeeReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    list:ProductReducer,
    elist:EmployeeReducer,
})
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;