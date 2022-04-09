import React from "react"
import { withRouter } from "react-router-dom"
import { AuthServices } from "../services/auth"

export const authContext = React.createContext()

class AuthProvider extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      authed: Boolean(AuthServices.getToken())
    }
  }

  login = (email, password) => {
    AuthServices.login(email, password).then((response) => {
      this.setState({authed: true});
      AuthServices.setToken(response.token)

      const {history, location} = this.props

      history.push(location.state ? location.state.from : "/")
    })
  }

  logout = () => {
    AuthServices.logout().then((response) => {
      this.setState({authed: false});
      AuthServices.removeToken()

      const {history} = this.props
      history.push("/")
    })
  }

  render() {
    return (
      <authContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          authed: this.state.authed,
        }}
      >
        {this.props.children}
      </authContext.Provider>
    )
  }
}

const AuthProviderWithRoute = withRouter(AuthProvider)

export {AuthProviderWithRoute as AuthProvider}