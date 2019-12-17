import React, {Component} from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import  { Provider } from 'react-redux';
import store from './redux/store';




function App() {
  
    return (

      <div className='app-container'>
        <Provider store={store}>
          <BrowserRouter>
              <Navigation/>
              <Router/>
          </BrowserRouter>
        </Provider>
      </div>

   
  );
}


export default App;
