import React, { Component } from "react"
import TodoItem from "../TodoItem/TodoItem"
import withLoading from "../../hoc/withLoading"

class TodoItems extends Component {
  render() {
    const { todos, onRemoveTodo, onChangeCompleted } = this.props

    return (
      <div>
        <ul className="list-group">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemoveTodo={onRemoveTodo}
                onChangeCompleted={onChangeCompleted}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withLoading(TodoItems)
