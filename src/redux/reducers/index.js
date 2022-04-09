import { combineReducers } from "redux";
import todoFilter from "./todoFilter";
import todosReducer from "./todos";

const rootReducer = combineReducers({
    todos: todosReducer,
    todo_filter: todoFilter
})

export default rootReducer