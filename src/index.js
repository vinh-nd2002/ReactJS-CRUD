import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from "./context/AuthContext"
import store from "./redux/store"

const render = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ReduxProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  )
}

render()
