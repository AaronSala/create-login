import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';


export class Login extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
        title="Login here"
        />
        <TextField
          hintText ="Enter userName"
          floatingLabelText ="UserName"
        />
        <br/>
        <TextField
          hintText ="Password"
          floatingLabelText ="password"
        />
        <br/>
        <Button primary= {true}> click me</Button>
         <button>Login here</button>
      </MuiThemeProvider>
    )
  }
}

export default Login


