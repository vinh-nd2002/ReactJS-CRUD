import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { authContext } from "../../context/AuthContext"
import {Formik, Form as FormikForm, Field} from "formik"
import {ReactstrapInput} from "reactstrap-formik"
import * as Yup from 'yup'

class LoginForm extends Component {
  constructor(params) {
    super(params)

    this.state = {
      username: "",
      password: "",
    }
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // validate form

    const {login} = this.context
    login()
  }

  render() {
    // const {authed, login} = this.context


    return (
      <div>
        {/* <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              id="exampleEmail"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangeInput}
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form> */}


        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required."),
            password: Yup.string().required("Password is required.").min(6, "Password must be at least 6 charactors.")
          })}
          onSubmit={(fields) => {
            // console.log(fields);
            this.context.login()
          }}
        >
          {
            () => {
              return (
                <FormikForm>
                  <Field type="text" label="Username" name="username" component={ReactstrapInput} />
                  <Field type="password" label="Password" name="password" component={ReactstrapInput} />
                  <Button type="submit" className="mt-3">Submit</Button>
                </FormikForm>
              )
            }
          }
        </Formik>
      </div>
    )
  }
}

LoginForm.contextType = authContext

export default LoginForm
