import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm {...this.props} />
            </div>
        );
    }
}

export default Login;