import React ,{Component}from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
  Route,
  Link, Redirect,  
} from "react-router-dom";
import Button from '@material-ui/core/Button';


const styles = theme => ({

	root: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
  
       
    height: theme.spacing(14),
    
    
  },
  avtarbox: {
    
    width: theme.spacing(11),
    height: theme.spacing(11),
    textAlign: 'center',
    
    
  },
   avtarbox2: {
    
    width: theme.spacing(18),
    height: theme.spacing(11),   
    
  },
  large: {

    width: theme.spacing(11),
    height: theme.spacing(11),
    border: 'solid 1px ',
    borderColor: 'red',
    backgroundColor:'white',
    
    margin: theme.spacing(1),

  },
  icons: {

    width: theme.spacing(8),
    height: theme.spacing(8),
   

  },
  slide:{
		marginTop:42,
		width:'100%',
		height:'10%',
		backgroundColor:'red',
		textAlign:'center'
	},

});



class HomePage extends Component {
constructor(props){
  super(props);
  this.state={
  	clickedButton:' '
  
  }
 }

 _onButtonClick=(event,index)=> {
    
    this.setState({clickedButton:index});

  }
  pageView(param){
  	switch(param) {
    case 'Stock':
      return (<div style={{display: 'flex',justifyContent:"center"}}>
      	<div style={{borderLeft:'3px solid black' ,marginRight:'3%'}}></div>
      	<Link to="/Home/Stock" style={{ textDecoration: 'none' }} >
		 <Button  style={{textTransform: "none" ,fontWeight: 'bold'}}> View Stock</Button></Link>
		 </div>);

    case 'Sales':
      return (<div style={{display: 'flex',justifyContent:"center"}}>
      	<div style={{borderLeft:'3px solid black' ,marginRight:'3%'}}></div>
      	<Link to="/Home/Sales" style={{ textDecoration: 'none' }} >
		 <Button  style={{textTransform: "none" ,fontWeight: 'bold'}}>View Sales</Button></Link>
		 </div>);

	case 'Purchase Orders':
      return (<div style={{display: 'flex',justifyContent:"center"}}>
      	
      	<div style={{borderLeft:'3px solid black' ,marginRight:'3%'}}></div>

      	<Link to="/Home/PODetail" style={{ textDecoration: 'none' }} >
		 <Button   style={{textTransform: "none" ,fontWeight: 'bold'}}>View Orders</Button ></Link>

		 <div style={{borderLeft:'3px solid black',marginRight:'3%'}}></div>

		 <Link  style={{ textDecoration: 'none' }} >
		 <Button  style={{textTransform: "none" ,fontWeight: 'bold' }}>Create Orders</Button ></Link>

		 <div style={{borderLeft:'3px solid black' ,marginRight:'3%'}}></div>

		 <Link  style={{ textDecoration: 'none' }} >
		 <Button  style={{textTransform: "none" ,fontWeight: 'bold'}}>Download Orders</Button></Link>
		 </div>);
      	
 	default: 

 	return(
		 <Paper>{this.state.clickedButton}</Paper>);

  }
 }
render()
 {
  const { classes}= this.props;
    return (
    	<div>
    	<div  className={classes.slide}>
					<h2>PO Data</h2>
				    </div>
    	<Container component="main" maxWidth="xs">
    	

    	<div className={classes.root}>
    	 <Grid container spacing={3}>
		        <Grid container  spacing={10}>
		          		<Grid item xs={4}>
				          <div  className={classes.avtarbox}>
						          <Avatar borderRadius="50%" className={classes.large}> 
						          <img src={require('../Icons/stock.svg')} className={classes.icons}
                                   onClick={event => this._onButtonClick(event, 'Stock')} />
						          </Avatar>

						          <b>
						          Stock
						        </b>
				          </div>
				        </Grid>
				        <Grid item xs={4}>
				          <div  className={classes.avtarbox}>
						          <Avatar alt="Remy Sharp" className={classes.large} > 
						          <img src={require('../Icons/sales.svg')} className={classes.icons} 
						          onClick={event => this._onButtonClick(event, 'Sales')}/>
						          </Avatar>
						          <b>
						          Sales
						        </b>
				          </div>
				        </Grid>
				        <Grid item xs={4}>
				          <div  className={classes.avtarbox2}>
						          <Avatar alt="Remy Sharp" className={classes.large} > 
						          <img src={require('../Icons/PO.svg')} className={classes.icons}
						         onClick={event => this._onButtonClick(event, 'Purchase Orders')} />
						          </Avatar>
						          <b>
						          Purchase Orders
						        </b>
				          </div>
				        </Grid>
		        </Grid>
		        <Grid container  spacing={12}  >
		          		
				        <Grid item xs={12} style={{paddingTop:'25%'}}>
				        <div className={classes.paper}>
				        {this.pageView(this.state.clickedButton)}
				         
				        </div>
				         
				        </Grid>
				        
		        </Grid>
		        <Grid container  spacing={10}>
		          		<Grid item xs={4}>
				          <div  className={classes.avtarbox2}>
						          <Avatar alt="Remy Sharp" className={classes.large}> 
						          <img src={require('../Icons/costchange.svg')} className={classes.icons}
						          onClick={event => this._onButtonClick(event, 'costchange')} />
						          </Avatar>
						          <b>
						          Cost Changes
						        </b>
				          </div>
				        </Grid>
				        <Grid item xs={4}>
				          <div  className={classes.avtarbox}>
						          <Avatar alt="Remy Sharp" className={classes.large} > 
						          <img src={require('../Icons/promotions.svg')} className={classes.icons} 
						          onClick={event => this._onButtonClick(event, 'Promotions')}/>
						          </Avatar>
						          <b>
						          Promotions
						        </b>
				          </div>
				        </Grid>
				        <Grid item xs={4}>
				          <div  className={classes.avtarbox}>
						          <Avatar alt="Remy Sharp" className={classes.large}> 
						          <img src={require('../Icons/invoices.svg')} className={classes.icons} 
						          onClick={event => this._onButtonClick(event, 'Invoices')}/>
						          </Avatar>
						          <b>
						          Invoices
						        </b>
				          </div>
				        </Grid>
		        </Grid>
		        
      </Grid>


    	 </div>
    	 </Container>
    	 </div>

    	)

}

}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage);