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
  		maxHeight: 340,
  		
	},
	container:{
		display: 'flex',
	    flex:1,
	    flexDirection: 'column',
		border:'1px solid red',
		maxHeight: 280,
	},
	excel:{
		backgroundColor:'red',
		width:'100%',
		justifyContent:'flex-end',
		display:'flex',



	},
	
  paper: {
    paddingTop: theme.spacing(3),

    

    
    
  		},
  	buttons:{
  		
  		marginTop: theme.spacing(1),
  		marginRight: theme.spacing(1),

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
		
		padding:'none'


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
  totalrecords:0
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
  	this.setState({options:[]});
  	this.setState({checkedItems:[]});
  	this.setState({searchResult:[]});
  	var item='';
  	var desc='';
  	var location='';
  	var bar='';
  	var startDate='';
  	var endDate='';
  	if(this.state.item!=''){
  		item=("item="+this.state.item+'&').replace(/ /g,'');

  	}
  	if(this.state.Desc!='')
  	{
  		desc=("desc="+this.state.Desc+'&').replace(/ /g, '%20');;

  	}
  	if(this.state.location!='')
  	{
       location=("location="+this.state.location+'&').replace(/ /g, '%20');;
  	}
  	if(this.state.bar!='')
  	{
       bar=("upc="+this.state.bar+'&').replace(/ /g,'');
  	}
  	if(this.state.startDate!='')
  	{
       startDate=("startDate="+this.state.startDate+'&').replace(/ /g,'');
  	}
  	if(this.state.endDate!='')
  	{
       endDate=("endDate="+this.state.endDate+'&').replace(/ /g,'');
  	}
  	var finalstring=item+desc+location+bar+startDate+endDate;
  	const query=finalstring.substring(0, finalstring.length - 1);
  	console.log(query);

  	Toast.loading('Searching');
          setTimeout(() => {
            Toast.hide();
          }, 2000);



    
    
    const uri='/PurchaseOrders/recent/purchaseOrderSearch?statuses=A';
    //console.log(uri);

      fetch(uri,{
        method: 'GET',
        
        headers: {
        'Authorization':'Basic ' + btoa('RMS_ADMIN'+ ':' +'Retek_123'),
        'Content-Type':'application/xml',
        'Accept':'application/json', 
        'Accept-Versioning':'false',
        'Accept-Language':'en-US,en;q=0.8'
        }})
    .then(response =>  response.json())
    .then(resData => {
    	console.log(resData);
    	this.setState({searchResult:resData.results})
    	this.setState({totalrecords:resData.totalRecordCount})



    })
    .catch(error => console.log('error', error));


    
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
			        label="Search Item"
			      />
			 </div>

    {this.state.checked?<div className={classes.search}> 

    				<div>
				      <Grid container >

				        <Grid container item xs={12} >
				          		<Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						           <label style={{marginRight:'10px'}}>
    								PO#: 
    								</label> 
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}}
						          onBlur={this.itemChange}
						           />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Item ID:
						          </label>
						          <input type="text"        
        							className='input' 
        							style={{ border: '1px solid red'}} 
						          onBlur={this.descChange}
						          />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Item Desc:
						          </label>
						          <input type="text"        
        							className='input' 
        							style={{ border: '1px solid red'}} 
						          onBlur={this.descChange}
						          />
						          </div>
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				          		<Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          PR#:
						          </label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Barcode:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Start Date:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          </div>
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				          		<Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Location:
						          </label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          Status:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>
						          End Date:
						          </label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.locationChange} />
						          </div>
						        </Grid>
				        </Grid>


				        <Grid container item xs={12} >
				        <div style={{flexGrow: 1,
				        alignItems: 'flex-end',
				        display: 'flex',
	    				flexDirection: 'column',}}>
				        <div>
				        <Button size='small' className={classes.buttons}
				         onClick={this.handleSearchItem}
				         style={{backgroundColor:'red',textTransform: "none"}}>
				         SEARCH
				         </Button>
				        <Button size='small' className={classes.buttons}
				        style={{backgroundColor:'red',textTransform: "none"}}
				        onClick={this.handleReset}
				        >
				        RESET</Button>
				        </div>

				        </div>
				          		
				        </Grid>
				      </Grid>
				    </div>

    	</div>:null}
    	<div className={classes.tables}> 
    	<div className={classes.excel}>
    	<Button size='small' style={{backgroundColor:'#FFDEAD'}} onClick={this.handleExport}>EXPORT EXCEL</Button>
    	
		</div>
 
    	<TableContainer component={Paper} className={classes.container} >
			      <Table  stickyHeader aria-label="sticky table" size="small" className={classes.table_main}>
			        <TableHead >
			          <TableRow >
			           <TableCell padding='none' align="center"className={classes.table_head}>SELECT</TableCell>
			            <TableCell padding='none' align="center"className={classes.table_head}>PR#</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>PO#</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>CREATE DATE</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>LOCATION</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>TOTAL ITEMS</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>TOTAL QTY</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>TOTAL COST</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>SHORT QTY</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>EXCESS QTY</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>STATUS</TableCell>



			          </TableRow>
			        </TableHead>

			        <TableBody>
			          {this.state.searchResult.slice(this.state.page * 100, this.state.page * 100 + 100).map((row) => {
             		 return (
			            <TableRow >
			            <TableCell padding='none' align="center" className={classes.table_column}>
			              <input 
			              	type="checkbox"
			              	
       					 	onChange={this.handleCheck}			
					        inputProps={{ 'aria-label': 'primary checkbox' }}
     						 />		                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column} onClick={this.handleClickOpen}>
			             <Link style={{ color:'black' }}> {row.orderNumber}</Link>			                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column}>
			              1212
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                12/09/2019
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                CO-12342
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                21
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                21
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                400
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                1000
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                390
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.status}
			              </TableCell>
			              
			            </TableRow>
			            
			           );})}
			        </TableBody>
			      </Table>
			  </TableContainer>
			  <TablePagination
		        style={{paddingBottom:'2%'}}
		        component="Paper"
		        
		        count={this.state.totalrecords}
		        rowsPerPage={100}
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