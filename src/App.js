import "./App.css"
import React, { Component } from "react"
import MenuNav from "./components/MenuNav/MenuNav"
import { routes } from "./routes"

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* Header (shared layout) */}
          <MenuNav />

          {/* Content (dynamic) */}
          <div className="row">
            <div className="col-12">{routes}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
