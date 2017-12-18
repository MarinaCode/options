import { combineReducers } from 'redux'
import options from "./options";

const reducers = combineReducers({
    data: options
})

export default reducers;