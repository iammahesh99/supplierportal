import React, { useState } from 'react';
import HomePage from '../JSFile/HomePage.js';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import NavigationBar from '../JSFile/NavigationBar';
import AdminPanel from '../JSFile/AdminPanel';
import StockView from '../../ComponentView/StockView/JSFile/StockView.js';
import SalesView from '../../ComponentView/SalesView/JSFile/SalesView.js';
import POView from '../../ComponentView/PurchaseOrderView/JSFile/POView.js';
import ASNView from '../../ComponentView/AsnView/JSFile/ASNView.js';
import InvoiceView from '../../ComponentView/InvoiceView/JSFile/InvoiceView.js';
import CostView from '../../ComponentView/CostView/JSFile/CostView.js';
import PromotionView from '../../ComponentView/PromotionView/JSFile/PromotionView.js';
import NotificationView from '../../ComponentView/NotificationView/JSFile/NotificationView.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SupplierConfig from '../../ComponentView/SupplierConfiguration/JSFile/SupplierConfig.js';

function HomeRouter() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: palletType,
      },
    })
  );

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  console.log(darkState);

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route path='/Home' exact>
            <HomePage />
          </Route>
          <Route path='/Home/Stock'>
            <StockView />
          </Route>
          <Route path='/Home/Sales'>
            <SalesView />
          </Route>
          <Route path='/Home/PODetail'>
            <POView />
          </Route>
          <Route path='/Home/InvoiceDetail'>
            <InvoiceView />
          </Route>
          <Route path='/Home/CostDetail'>
            <CostView />
          </Route>
          <Route path='/Home/PromotionDetail'>
            <PromotionView />
          </Route>
          <Route path='/Home/AdminPanel'>
            <AdminPanel />
          </Route>
          <Route path='/Home/Supplier'>
            <SupplierConfig />
          </Route>
          <Route path='/Home/ASNDetail'>
            <ASNView />
          </Route>
          <Route path='/Home/Notification/:id'>
            <NotificationView />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default HomeRouter;
