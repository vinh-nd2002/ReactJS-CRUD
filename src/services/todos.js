import { api } from "./api"

const getTodosList = () => {
    return api("GET", "/todos")
}

const addTodo = (todoTitle) => {
    return api("POST", "/todos", {title: todoTitle})
}

const removeTodo = (todoId) => {
    return api("DELETE", `/todos/${todoId}`)
}

const getTodo = (todoId) => {
    return api("GET", `/todos/${todoId}`)
}

const changeCompleted = (todoId, value) => {
    return api("PUT", `/todos/${todoId}`, {is_completed: value})
}

const changeTitle = (todoId, value) => {
    return api("PUT", `/todos/${todoId}`, {title: value})
}

export const TodosService = {
    getTodosList,
    addTodo,
    removeTodo,
    getTodo,
    changeCompleted,
    changeTitle
}