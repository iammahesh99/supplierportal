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
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { properties } from '../../../../Properties.js';
import supplierConfig from '../JSON/supplierconfig.json';
import CheckIcon from '@material-ui/icons/Check';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#696969",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
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
	search:{
	
		
	    display: 'flex',
	    flexDirection: 'column',    
	    justify:"center",
	    border: 'solid 1px ',
    	borderColor: 'red',

    	
	},
	tables:{
		
		marginTop: theme.spacing(4),
		
	    display: 'flex',
	    flex:1,
	    flexDirection: 'column',
  		border:'1px solid red',
  		maxHeight: 390,
	},
	
	
  paper: {
    paddingTop: theme.spacing(3),
     paddingLeft: theme.spacing(1)
   

    

    
    
  		},
  	buttons:{
  		
  		marginBottom: theme.spacing(1),
  		marginTop: theme.spacing(1),
  		marginLeft: theme.spacing(1),

  	},
  	buttons2:{
  		
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
    small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
	
  
});




class SupplierConfig extends Component {
constructor(props){
  super(props);
  this.state={
  checked:true,
  ischecked:'',
  searchResult:[],
  item:'',
  Desc:'',
  location:'',
  bar:'',
  vpn:'',
  checkedItems: [],
  options:[],
  // map:false,
  // enable:false,
  // listOfHeader:[]

  }
 }

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
  vpnChange=(event)=>{
  	this.setState({vpn:event.target.value})
  }

  handleSearchItem =()=>{
  	this.setState({searchResult:supplierConfig.results})

  	
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
  	 var ans = 'Stock'; 
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
  // handleMapping=()=>{
  	
  // 	var list=[]
  // 	 this.state.searchResult.slice(0,1).map(data=>(
                        
  //                       Object.entries(data).map(([make, type]) => (
  //                          list.push(make)    
  //                       ))

  //                      ))
  // 	 this.setState({listOfHeader:list})
  // 	 this.setState({map:true});

  // }
  // handleClose=()=>{
  // 	this.setState({map:false});
  // }



render()
 {
  const { classes}= this.props;
  const open = Boolean(this.state.ischecked);
  var set='';
  console.log('render');
  
    return (
    	<Container component="main" maxWidth="md">
    	<div  className={classes.slide}>
				<FormControlLabel
			        control={<Switch checked={this.state.checked} onChange={this.handleChange} />}
			        label="Search Stock"
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
						          
						            <label style={{marginRight:'10px'}}> 
    								Supplier #: </label> 
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
								  className={classes.paper}>
						          
						          <label >Supplier Name </label>
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
						          
						          <label style={{marginRight:'10px'}} >Status </label>
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
								  alignItems="center"
								  className={classes.paper}>
						          
						          <label >Stock Config </label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          
						        </Grid>
						        <Grid item xs={4} 
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center"
								  className={classes.paper}>
						          
						          <label >Order Config</label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.vpnChange} />
						          
						        </Grid>
						        <Grid item xs={4} 
						        container
								  direction="row"
								  justify="space-between"
								  alignItems="center"
								  className={classes.paper}>
						          
						          <label >Invoice Config</label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.vpnChange} />
						          
						        </Grid>


				        </Grid>
				        <Grid container item xs={12} >
				        <div style={{flexGrow: 1,
				        alignItems: 'flex-end',
				        display: 'flex',
	    				flexDirection: 'column',}}>
				        <div>
				        <button  size='small' className={classes.buttons}
				         onClick={this.handleSearchItem}
				         style={{backgroundColor:'red', color:"white"}}>
				         SEARCH
				         </button>
				        <button  size='small' className={classes.buttons}
				        style={{backgroundColor:'red',color:'white'}}
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

				         <button size='small' className={classes.buttons2}
				         
				         >
				         CONFIGUE CSV
				         </button>
				         
				 
				        </div>

				        </div>
 

    	<TableContainer component={Paper}>
			      <Table  stickyHeader aria-label="sticky table" size="small" className={classes.table_main}>
			        <TableHead >
			          <TableRow >
			           <StyledTableCell padding='none' align="center"className={classes.table_head}>SELECT</StyledTableCell>
			            <StyledTableCell padding='none' align="center"className={classes.table_head}>SUPPLIER ID</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>SUPPLIER NAME</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>STATUS</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>SALES CONFIGURED</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>STOCK CONFIGURED</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>ORDER CONFIGURED</StyledTableCell>
			            <StyledTableCell padding='none' align="center" className={classes.table_head}>INVOICES CONFIGURED</StyledTableCell>

			          </TableRow>
			        </TableHead>

			        <TableBody>
			          {this.state.searchResult.map((row,index)=> {

			          	return(

			            <StyledTableRow>
			            <StyledTableCell  align="center" className={classes.table_column}>
			              <input 
			              	type="checkbox"
			              	value={JSON.stringify(row)}
       					 	onChange={this.handleCheck}			
					        inputProps={{ 'aria-label': 'primary checkbox' }}
     						 />		                
			              </StyledTableCell>
			              <StyledTableCell  align="center" className={classes.table_column}>
			              {row.supplierId}			                
			              </StyledTableCell>
			              <StyledTableCell  align="center" className={classes.table_column}>
			              {row.supplierName}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column}>
			                {row.status}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column}>
			                {row.salesConfigured=="true"?
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'#00FF00'}}> <CheckIcon /></Avatar>
			                :
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'red'}}> <CloseIcon /></Avatar>}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column}>
			                {row.stockConfigured=="true"?
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'#00FF00'}}> <CheckIcon /></Avatar>
			                :
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'red'}}><CloseIcon /></Avatar>}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column}>
			                {row.orderConfigured=="true"?
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'#00FF00'}}><CheckIcon /></Avatar>
			                :
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'red'}}> <CloseIcon /></Avatar>}
			              </StyledTableCell>
			              <StyledTableCell   align="center" className={classes.table_column}>
			                {row.invoicesConfigured=="true"?
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'#00FF00'}}><CheckIcon /></Avatar>
			                :
			                <Avatar className={classes.small} alt="Remy Sharp" style={{backgroundColor:'red'}}> <CloseIcon /></Avatar>}
			              </StyledTableCell>
			              
			            </StyledTableRow>
			            );})}
			          
			        </TableBody>
			      </Table>
			  </TableContainer>


    	
    	</div>
    	</Container>



    	)
}
}
SupplierConfig.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SupplierConfig);