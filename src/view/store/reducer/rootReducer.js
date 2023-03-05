import { combineReducers } from "redux";
import StatusReducer from "./StatusReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    status: StatusReducer,
})

export default rootReducer;