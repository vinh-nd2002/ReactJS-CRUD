import React from "react"
import { useParams } from "react-router-dom"
import withLoading from "../../hoc/withLoading"
import useFetchData from "../../hook/useFetchData"

const TodoInfo = (props) => {
    const {todo} = props

    return (
        <h1>{todo.title}</h1>
    )
}

const TodoInfoWithLoading = withLoading(TodoInfo)

const Todo = () => {
  const {id: todoId} = useParams()
  const {loading, data: todo} = useFetchData(`/todos/${todoId}`, {})

  return (
    <div>
      <TodoInfoWithLoading loading={loading} todo={todo} />
    </div>
  )
}

export default Todo
