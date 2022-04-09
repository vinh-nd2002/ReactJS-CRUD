import React, { Component } from "react"
import { Button, Input, Form } from "reactstrap"

class TodoForm extends Component {
  constructor(params) {
    super(params)

    this.state = {
      title: "",
    }
  }

  componentDidMount() {
    document.getElementById("inputTodo").focus()
  }

  handleChangeInput = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()

    const { onAddTodo } = this.props
    onAddTodo(this.state.title, this.clearTitle)
  }

  clearTitle = () => {
    this.setState({title: ""});
  }

  render() {
    const { title } = this.state

    return (
      <div className="mb-4">
        <Form onSubmit={this.handleSubmitForm}>
          <div className="row">
            <div className="col">
              <Input
                id="inputTodo"
                value={title}
                onChange={this.handleChangeInput}
                placeholder="New task..."
              />
            </div>

            <div className="col-auto">
              <Button color="primary" className="ml-3">
                Add
              </Button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default TodoForm
