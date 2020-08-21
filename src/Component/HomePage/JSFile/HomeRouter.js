import React ,{useState}from "react";
import HomePage from '../JSFile/HomePage.js';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import NavigationBar from '../JSFile/NavigationBar';
import AdminPanel from '../JSFile/AdminPanel';
import StockView from '../../ComponentView/StockView/JSFile/StockView.js';
import SalesView from '../../ComponentView/SalesView/JSFile/SalesView.js';
import POView from '../../ComponentView/PurchaseOrderView/JSFile/POView.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function HomeRouter() {

  // var dark = localStorage.getItem('darkState');
  //   if (dark === null) {
  //       console.log('was null setting to false');
  //       dark = false;
  //   } else {
  //       dark = JSON.parse(dark)
  //   }
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: palletType,
        },
      }),
    
  );
  const handleThemeChange = () => {
    
    setDarkState(!darkState);
    

  };

console.log(darkState)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <div>
      <NavigationBar darkState={darkState} handleThemeChange={handleThemeChange} />
      <Switch>
        <Route path="/Home" exact ><HomePage /></Route>
        <Route path="/Home/Stock"  ><StockView /></Route>
        <Route path="/Home/Sales"  ><SalesView /></Route>
        <Route path="/Home/PODetail"  ><POView /></Route>
        <Route path="/Home/AdminPanel"  ><AdminPanel /></Route>
      </Switch>
      
      </div>
      </BrowserRouter>

    </ThemeProvider>
  );
}
export default HomeRouter





