import React, {Component} from 'react';
import { TextField, Button, Typography, Contianer, AppBar } from '@material-ui/core'
import { login } from '../redux/actions'




class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleLogin = (e, {user}) => {
    e.preventDefault();
    document.cookie = "loggedIn=true";
    login();
  }

  render() {
    return (
      <div className="Login-container">
        <AppBar position = 'static'>
          <Typography>Login</Typography>
        </AppBar>
        <form onSubmit = {this.handleLogin} className = 'login-form'>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={this.handleTextChange} 
             />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleTextChange} 
             />
            <Button
              type="submit"
              fullwidth
              className="login-button"
              variant="contained"
              color="primary"
              >Login
            </Button>
        </form>
      </div>
    );
  }
}



export default LoginPage;