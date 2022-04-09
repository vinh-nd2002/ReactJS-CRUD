const initialTodos = []

const todosReducer = (state = initialTodos, action) => {
    switch(action.type) {
        case "GET_TODO": {
            return action.value
        }

        case "ADD_TODO": {
            const newTodos = [...state, action.value]
            return newTodos
        }

        case "REMOVE_TODO": {
            const removeId = action.todo_id
            const newTodos = state.filter(todo => todo.id !== removeId)
            return newTodos
        }

        case "CHANGE_COMPLETED": {
            const newTodos = state.map(todo => {
                if (todo.id !== action.todo_id) return todo
                return {
                    ...todo,
                    is_completed: action.is_completed
                }
            })

            return newTodos
        }

        case "CHANGE_TITLE":
            const newTodos = state.map(todo => {
                if (todo.id !== action.todo_id) return todo
                return {
                    ...todo,
                    title: action.title
                }
            })

            return newTodos

        default:
            return state
    }
}

export default todosReducer