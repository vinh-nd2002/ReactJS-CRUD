import React, { Component } from "react"
import TodoFilters from "../../components/TodoFilter/TodoFilters"
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoItem from "../../components/TodoItem/TodoItem"
import TodoItems from "../../components/TodoItems/TodoItems"
import { TodosService } from "../../services/todos"
import { connect } from "react-redux"
import { TodosActions } from "../../redux/actions/todos"

class Todos extends Component {
  constructor(params) {
    super(params)

    this.state = {
      todos: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchTodosList()
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    console.log("unmounted")
  }

  fetchTodosList = async () => {
    this.setState({ loading: true })
    await this.props.dispatchGetTodosAsync()
    this.setState({ loading: false })
  }

  handleAddTodo = (title, cb) => {
    TodosService.addTodo(title).then((todo) => {
      // const newTodos = [...this.state.todos, todo]
      // this.setState({ todos: newTodos })
      cb()
      this.props.dispatchAddTodo(todo)
    })
  }

  handleRemoveTodo = (todoId) => {
    // update code here
    TodosService.removeTodo(todoId).then(() => {
      // const remainTodos = this.state.todos.filter((todo) => todo.id !== todoId)
      // this.setState({ todos: remainTodos })

      this.props.dispatchRemoveTodo(todoId)
    })
  }

  handleChangeCompleted = (todoId, isCompleted) => {
    TodosService.changeCompleted(todoId, isCompleted).then(response => {
      console.log(isCompleted);
      this.props.dispatchChangeCompleted(todoId, isCompleted)
    })

    // const newTodos = this.state.todos.map((todo) => {
    //   if (todo.id !== todoId) return todo

    //   return { ...todo, is_completed: !todo.is_completed }
    // })

    // this.setState({ todos: newTodos })
  }

  render() {
    const { loading } = this.state
    const { todos } = this.props

    return (
      <div>
        <h1>Todos</h1>

        <section>
          <div className="row ">
            <div className="col-12 col-md-6 mx-auto">
              <TodoForm onAddTodo={this.handleAddTodo} />

              <TodoFilters />

              <TodoItems
                loading={loading}
                todos={todos}
                onRemoveTodo={this.handleRemoveTodo}
                onChangeCompleted={this.handleChangeCompleted}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {todo_filter, todos} = state

  switch(todo_filter) {
    case "completed": {
      const remainTodos = todos.filter(todo => todo.is_completed === true)
      return {todos: remainTodos}
    }

    case "incomplete":
      const remainTodos = todos.filter(todo => todo.is_completed === false)
      return {todos: remainTodos}

    default:
      return { todos: todos }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetTodos: (todos) => dispatch(TodosActions.getTodos(todos)),
    dispatchAddTodo: (todo) => dispatch(TodosActions.addTodo(todo)),
    dispatchRemoveTodo: (todoId) => dispatch(TodosActions.removeTodo(todoId)),
    dispatchChangeCompleted: (todoId, isCompleted) => dispatch(TodosActions.changeTodoCompleted(todoId, isCompleted)),
    dispatchGetTodosAsync: () => dispatch(TodosActions.getTodosAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
