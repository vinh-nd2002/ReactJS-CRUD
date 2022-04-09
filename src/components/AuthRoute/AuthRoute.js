import React, { Component } from "react"
import { Redirect, Route } from "react-router-dom"
import { authContext } from "../../context/AuthContext"

class AuthRoute extends Component {
  render() {
    const { authed } = this.context
    const { component: Component, ...otherProps } = this.props

    return (
      <Route
        {...otherProps}
        render={(props) => {
          if (!authed) return <Redirect to={{pathname: "/login", state: {from: this.props.path}}} />

          return <Component {...props} />
        }}
      />
    )
  }
}

AuthRoute.contextType = authContext

export default AuthRoute
