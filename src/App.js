import React from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import LoginPage from './Component/LoginPage/JSFile/LoginPage.js';
import HomeRouter from './Component/HomePage/JSFile/HomeRouter.js';


function App() {
  return (
    <BrowserRouter>
      <div>
      
      <Switch>
      <Route path="/" exact ><LoginPage /></Route>
      <Route path="/Home" ><HomeRouter /></Route>
      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
