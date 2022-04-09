import React, { Component, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, NavItem } from "reactstrap"
import { authContext } from "../../context/AuthContext"
import UserInfo from "../UserInfo/UserInfo"
import "./MenuNav.css"

const MenuNav = () => {
  const { authed, logout } = useContext(authContext)

  return (
    <header className="mb-4">
      <Navbar color="light" expand="md" light>
        <Link to="/" className="navbar-brand">
          Rocket 18
        </Link>

        <Nav navbar>
          <NavItem>
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/todos" className="nav-link">
              Todos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/about" className="nav-link">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <UserInfo authed={authed} logout={logout} />
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  )
}

export default MenuNav
