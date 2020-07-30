import React ,{Component}from "react";
import HomePage from '../JSFile/HomePage.js';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import NavigationBar from '../JSFile/NavigationBar';
import StockView from '../JSFile/StockView.js'


class HomeRouter extends Component {
constructor(props){
  super(props);
  this.state={
  
  }
 }
render()
 {
  
  
    return (
    	<BrowserRouter>
    	<div>
    	<NavigationBar />
    	<Switch>
	      <Route path="/Home" exact ><HomePage /></Route>
	      <Route path="/Home/Stock"  ><StockView /></Route>
      </Switch>
    	
    	</div>
    	</BrowserRouter>

    	)

}

}
export default HomeRouter;