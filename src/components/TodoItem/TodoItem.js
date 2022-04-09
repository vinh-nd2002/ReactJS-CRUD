import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Form, Input } from "reactstrap"
import {TodosActions} from "../../redux/actions/todos"
import {connect} from "react-redux"


class TodoItem extends Component {
  constructor(params) {
    super(params)

    this.state = {
      editing: false,
      title: this.props.todo.title
    }
  }

  handleClick = (e) => {
    const { onRemoveTodo, todo } = this.props
    onRemoveTodo(todo.id)
  }

  handChange = (event) => {
    const { onChangeCompleted, todo } = this.props
    onChangeCompleted(todo.id, event.target.checked)
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing, title: this.props.todo.title })
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value});
  }

  handleSubmitTitle = (event) => {
    event.preventDefault()

    this.props.dispatch(TodosActions.changeTodoTitleAsync(this.props.todo.id, this.state.title)).then(() => {
      this.setState({editing: false});
    })
  }

  render() {
    const { todo } = this.props
    const { editing, title } = this.state

    return (
      <li className="list-group-item list-group-item-action">
        <div className="row align-items-center">
          <div className="col-auto">
            <Input
              type="checkbox"
              checked={todo.is_completed}
              onChange={this.handChange}
            />
          </div>

          <div className="col">
            {editing ? (
              <Form onSubmit={this.handleSubmitTitle}>
                <Input value={title} onChange={this.handleChangeTitle} autoFocus />
              </Form>
            ) : (
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            )}
          </div>

          <div className="col-auto">
            <button
              className="btn text-secondary ms-2"
              onClick={this.toggleEditing}
            >
              Edit
            </button>
            <button className="btn text-danger" onClick={this.handleClick}>
              Remove
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default connect()(TodoItem)
