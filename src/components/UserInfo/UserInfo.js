import React, { Component } from "react"
import { Link } from "react-router-dom"

class UserInfo extends Component {
  handleClickLogout = () => {
    this.props.logout()
  }

  render() {
    const { authed } = this.props
    if (!authed)
      return (
        <Link to="/login" className="nav-link">
          Login
        </Link>
      )

    return (
      <div className="nav-link">
        longvv <div className="vr align-middle mx-2" />{" "}
        <span onClick={this.handleClickLogout}>Logout</span>
      </div>
    )
  }
}

export default UserInfo
