import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import Todos from "./pages/Todos/Todos";
import About from "./pages/About/About";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Login from "./pages/Login/Login"
import Todo from "./pages/Todo/Todo";

export const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/todos" component={Todos} />
        <AuthRoute exact path="/todos/:id" component={Todo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
    </Switch>
)