import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Listing from './Components/Listing';
import Details from './Components/Details';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home'

function Router(){
    return(
    
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Listing' component={Listing} />
            <Route path='/Details' component={Details} />
            <Route path='/Login' component={LoginPage} />
        </Switch>
   
        
    )
}

export default Router;