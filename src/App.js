import React, {Component} from 'react';
import './App.css';
import { AppBar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Listing from './Components/Listing';
import Details from './Components/Details';
import LoginPage from './Components/LoginPage';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Home from './Components/Home'


const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(){
  const classes = myStyles();
  return(
    <div className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6' className={classes.title}>
                Small Business App 
              </Typography>
                <Button 
                  to="/listing"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}               
                >
                  Listing
                </Button>
               
                <Button 
                  to="/login"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}               
                >
                  Login
                </Button>
            </Toolbar>
          </AppBar>
        </div>
  )

}



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  doLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn})
  }
  

  render(){
  
    return (

      <div className='whole-page'>
         <BrowserRouter>
          <NavBar/>
            <Router/>
         </BrowserRouter>
         
          

        {/* {this.state.isLoggedIn ? (
          <Details/>
        ):(
          <Home doLogin={this.doLogin}/>
        )} */}

      </div>

   
  );
}



}

export default App;
