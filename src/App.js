import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginPage from './Component/LoginPage/JSFile/LoginPage.js';
import HomeRouter from './Component/HomePage/JSFile/HomeRouter.js';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path='/' exact>
              <LoginPage />
            </Route>
            <Route path='/Home'>
              <HomeRouter />
            </Route>
          </Switch>
        </MuiThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
