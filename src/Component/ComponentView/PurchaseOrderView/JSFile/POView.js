import React ,{Component}from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
//import CollapsibleTable from '../JSFile/table.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CssBaseline from '@material-ui/core/CssBaseline';
import TableContainer from '@material-ui/core/TableContainer';
import Checkbox from '@material-ui/core/Checkbox';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import Dialog from '@material-ui/core/Dialog';
import POSummary from '../JSFile/POSummary.js';
import {
  
  Link  
} from "react-router-dom";
import TablePagination from '@material-ui/core/TablePagination';
import PO from '../JSFile/JSON/PO.json';
import Box from '@material-ui/core/Box';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#696969",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    borderTop: 'solid 1px ',
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
     
    
  },
}))(TableRow);





const styles = theme => ({
	root:{
		width:'100%'
	},
	search:{
	
	    display: 'flex',
	    flexDirection: 'column',    
	    justify:"center",
	    border: 'solid 1px ',
    	borderColor: 'red',

    	
	},
	tables:{
		
		marginTop: theme.spacing(4),
  		maxHeight: 350,
  		
	},
	container:{
		display: 'flex',
	    flex:1,
	    flexDirection: 'column',
		border:'1px solid red',
		maxHeight: 300,
	},
	
  paper: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2)
   
    

    
  },
  	buttons:{
  		
  		marginTop: theme.spacing(1),
  		marginLeft: theme.spacing(1),

  	},
  	buttons2:{
  		
  		marginRight: theme.spacing(2),

  	},
  	slide:{
		marginTop:42,
		width:'100%',
		height:'10%',
		textAlign:'center'
	},
	mainscreen:{
		flex:1,
		flexDirection: 'column',  
		display: 'flex',
		

	},
	table_head:{
		
		padding:'none'

	},
	table_column:{
		
		padding:'none',
		


	},
	table_main:{
		padding:'none'
	},
	
	dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
    
  
});




class POView extends Component {

	
constructor(props){
	var today = new Date();
	var dd = today.getDate(); 
    var mm = today.getMonth() + 1;
    	if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        }  
   var date = today.getFullYear() + '-' + mm + '-' + dd;
  super(props);
  this.state={
  checked:true,
  currentDate: date,
  searchResult:[],
  item:'',
  Desc:'',
  location:'',
  bar:'',
  startDate:'',
  endDate:'',
  checkedItems: [],
  options:[],
  open:false,
  page:0,
  totalrecords:0,
  detail:false
  }
 }

handleChangePage = (event, newPage) => {
    this.setState({page:newPage})
  };
handleClickOpen = () => {
    this.setState({open:true});
  };
  handleClose = () => {
    this.setState({open:false});
  };


handleChange = () => {
    this.setState({checked:!this.state.checked})
  };

  
  itemChange=(event)=>{
  	this.setState({item:event.target.value})
  	console.log(this.state.item)

  }
  descChange=(event)=>{
  	this.setState({Desc:event.target.value})
  	console.log(this.state.Desc)

  	
  }
  locationChange=(event)=>{
  	this.setState({location:event.target.value})
  }
  barChange=(event)=>{
  	this.setState({bar:event.target.value})
  }
  startDate=(event)=>{
  	this.setState({startDate:event.target.value})
  }
  endDate=(event)=>{
  	this.setState({endDate:event.target.value})

  }

  handleSearchItem =()=>{
		

		this.setState({searchResult:PO.results})
     	this.setState({totalrecords:PO.totalRecordCount})

  	// this.setState({options:[]});
  	// this.setState({checkedItems:[]});
  	// this.setState({searchResult:[]});
  	// var item='';
  	// var desc='';
  	// var location='';
  	// var bar='';
  	// var startDate='';
  	// var endDate='';
  	// if(this.state.item!=''){
  	// 	item=("item="+this.state.item+'&').replace(/ /g,'');

  	// }
  	// if(this.state.Desc!='')
  	// {
  	// 	desc=("desc="+this.state.Desc+'&').replace(/ /g, '%20');;

  	// }
  	// if(this.state.location!='')
  	// {
   //     location=("location="+this.state.location+'&').replace(/ /g, '%20');;
  	// }
  	// if(this.state.bar!='')
  	// {
   //     bar=("upc="+this.state.bar+'&').replace(/ /g,'');
  	// }
  	// if(this.state.startDate!='')
  	// {
   //     startDate=("startDate="+this.state.startDate+'&').replace(/ /g,'');
  	// }
  	// if(this.state.endDate!='')
  	// {
   //     endDate=("endDate="+this.state.endDate+'&').replace(/ /g,'');
  	// }
  	// var finalstring=item+desc+location+bar+startDate+endDate;
  	// const query=finalstring.substring(0, finalstring.length - 1);
  	// console.log(query);

  	// Toast.loading('Searching');
   //        setTimeout(() => {
   //          Toast.hide();
   //        }, 2000);



    
    
   //  const uri='/PurchaseOrders/recent/purchaseOrderSearch?statuses=A';
   //  //console.log(uri);

   //    fetch(uri,{
   //      method: 'GET',
        
   //      headers: {
   //      'Authorization':'Basic ' + btoa('RMS_ADMIN'+ ':' +'Retek_123'),
   //      'Content-Type':'application/xml',
   //      'Accept':'application/json', 
   //      'Accept-Versioning':'false',
   //      'Accept-Language':'en-US,en;q=0.8'
   //      }})
   //  .then(response =>  response.json())
   //  .then(resData => {
   //  	console.log(resData);
   //  	this.setState({searchResult:resData.results})
   //  	this.setState({totalrecords:resData.totalRecordCount})



   //  })
   //  .catch(error => console.log('error', error));


    
  }
  handleReset=()=>
  {
  	this.setState({searchResult:[]});
  	this.setState({item:''});
  	this.setState({desc:''});
  	this.setState({location:''});
  	this.setState({bar:''});
  	this.setState({vpn:''});
  }
  handleCheck = (event) => {
  	const options = this.state.options
    let index

    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(event.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(event.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })
    if(this.state.options.length==1)
    {
    	this.setState({detail:true})
    }
    else{
    	this.setState({detail:false})
    }
   

  };
  handleExport=()=>{
  	this.setState({checkedItems:[]});
  	 this.state.options.map(data =>{
  	 	this.state.checkedItems.push(JSON.parse(data));


  	 })
  	 var ans = 'Sales'; 
  	 var arr='0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
  	 var len=5;
      for (var i = len; i > 0; i--) { 
         ans += arr[Math.floor(Math.random() * arr.length)]; 
            } 


  	const sheet = XLSX.utils.json_to_sheet(this.state.checkedItems);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet 1');
	XLSX.writeFile(workbook, ans+`.xls`);

  }


render()
 {
  const { classes}= this.props;
  const open = Boolean(this.state.ischecked);
  console.log(this.state.searchResult);
 
  
 
    return (
    	<Container component="main" maxWidth="md">
    	<div  className={classes.slide}>
				<FormControlLabel
			        control={<Switch checked={this.state.checked} onChange={this.handleChange} />}
			        label="Search PO"
			      />
			 </div>

    {this.state.checked?<div className={classes.search}> 

    				<Container component="main" maxWidth="md">
				      <Grid container >

				        <Grid container item xs={12} >
				          		<Grid item xs={4} 
				          		container
								  direction="row"
								  justify="space-between"
								  alignItems="center"
								  className={classes.paper}>
						         
						           <label>
    								PO#: 
    								</label>	
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}}
						          onBlur={this.itemChange}
						           />
						          
						        </Grid>
						        <Grid item xs={4}
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center"
								  className={classes.paper} >
						          
						          <label style={{marginRight:''}}>
						          Item ID:
						          </label>
						          <input type="text"        
        							className='input' 
        							style={{ border: '1px solid red'}} 
						          onBlur={this.descChange}
						          />
						         
						        </Grid>
						        <Grid item xs={4}
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center" 
								  className={classes.paper}>
						          
						          <label style={{marginRight:''}}>
						          Item Desc:
						          </label>
						          <input type="text"        
        							className='input' 
        							style={{ border: '1px solid red'}} 
						          onBlur={this.descChange}
						          />
						          
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				          		<Grid item xs={4} 
				          		container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper}>
						          
						          <label style={{marginRight:''}}>
						          PR#:
						          </label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          
						        </Grid>
						        <Grid item xs={4} 
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper}>
						          
						          <label style={{marginRight:''}}>
						          Barcode:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          
						        </Grid>
						        <Grid item xs={4}
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper} >
						          
						          <label style={{marginRight:''}}>
						          Start Date:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				          		<Grid item xs={4}
				          		container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper} >
						          
						          <label style={{marginRight:''}}>
						          Location:
						          </label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          
						        </Grid>
						        <Grid item xs={4} 
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper}>
						          
						          <label style={{marginRight:''}}>
						          Status:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          
						        </Grid>
						        <Grid item xs={4} 
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center" className={classes.paper}>
						          
						          <label style={{marginRight:''}}>
						          End Date:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				        <div style={{flexGrow: 1,
				        alignItems: 'flex-end',
				        display: 'flex',
	    				flexDirection: 'column',}}>
				        <div>
				        <button size='small' className={classes.buttons}
				         onClick={this.handleSearchItem}
				         style={{backgroundColor:'red',textTransform: "none",color:"white"}}>
				         SEARCH
				         </button>
				        <button size='small' className={classes.buttons}
				        style={{backgroundColor:'red',textTransform: "none",color:'white'}}
				        onClick={this.handleReset}
				        >
				        RESET</button>
				        </div>

				        </div>
				          		
				        </Grid>
				      </Grid>
				    </Container>

    	</div>:null}
    	<div className={classes.tables}> 
    	<div style={{flexGrow: 1,
				        alignItems: 'flex-end',
				        display: 'flex',
	    				flexDirection: 'column',
	    				backgroundColor:'red'}}>
				        <div>
				        <button size='small' className={classes.buttons2}
				         onClick={this.handleExport}
				         >
				         EXCEL
				         </button>
				         {
				         	this.state.detail?
				        <button size='small' className={classes.buttons2}
				        
				        
				        >
				        DETAIL</button>:null}
				        </div>

				        </div>
 
    	<TableContainer component={Paper} className={classes.container} >
			      <Table  stickyHeader aria-label="sticky table" size="small" className={classes.table_main}>
			        <TableHead >
			          <TableRow >
			           <StyledTableCell padding='none' align="center"className={classes.table_head}>SELECT</StyledTableCell>
			            <StyledTableCell padding='none' align="center"className={classes.table_head}>PR#</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>PO#</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>CREATE DATE</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>LOCATION</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>TOTAL ITEMS</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>TOTAL QTY</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>TOTAL COST</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>SHORT QTY</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>EXCESS QTY</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>STATUS</StyledTableCell>



			          </TableRow>
			        </TableHead>

			        <TableBody>
			          {this.state.searchResult.slice(this.state.page * 20, this.state.page * 20 + 20).map((row) => {
			          	let bordercolor='';
			          	if(row.status=='APPROVED')
			          	{
			          		bordercolor='2px solid #008000';

			          	}
			          	if(row.status=="REJECTED")
			          	{
			          		bordercolor='2px solid red';
			          	}
			          	if(row.status=="SUBMITTED")
			          	{
			          		bordercolor='2px solid #FFFF00';
			          	}
             		 return (
             		
			            <StyledTableRow  >
			            
			            <StyledTableCell  align="center" className={classes.table_column}  >
			              <input 
			              	type="checkbox"
			              	value={JSON.stringify(row)}
       					 	onChange={this.handleCheck}			
					        inputProps={{ 'aria-label': 'primary checkbox' }}
     						 />	
     						                 
			              </StyledTableCell>
			              <StyledTableCell  align="center" className={classes.table_column}  onClick={this.handleClickOpen}>
			             <Link style={{ color:'black' }}> {row.orderNumber}</Link>			                
			              </StyledTableCell>
			              <StyledTableCell  align="center" className={classes.table_column} >
			              {row.PO}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.createDate}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.location}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.totalItem}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.totalQTY}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.totalCost}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.shortQty}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column} >
			                {row.excessQTY}
			              </StyledTableCell>
			              <StyledTableCell padding='none'  align="center" className={classes.table_column} >
			                <div style={{border:bordercolor}}>{row.status}</div>
			              </StyledTableCell>
			              
			            </StyledTableRow>

			            
			           );})}
			        </TableBody>

			      </Table>
			  </TableContainer>
			  <TablePagination
		        style={{paddingBottom:'2%'}}
		        component="Paper"
		        
		        count={this.state.totalrecords}
		        rowsPerPage={20}
		        labelRowsPerPage=''
		        rowsPerPageOptions={[]}
		        page={this.state.page}
		        onChangePage={this.handleChangePage}
		        
		      />


    	</div>
	    	<Dialog
			fullWidth
	        open={this.state.open}
	        maxWidth='md'
	        classes={{ paper: classes.dialogPaper }}
	        aria-labelledby="alert-dialog-title"
	        aria-describedby="alert-dialog-description"
	      >
	        <POSummary handleClose={this.handleClose}/>
	      </Dialog>
    	</Container>



    	)
}
}
POView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POView);