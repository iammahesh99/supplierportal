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
  		
  		marginBottom: theme.spacing(1),
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
		border: '1px solid #000000',
		padding:'none'

	},
	table_column:{
		border: '1px solid #000000',
		padding:'none'


	},
	table_main:{
		padding:'none'
	},
	
  
});




class StockView extends Component {
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
  options:[]
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
  	this.setState({options:[]});
  	this.setState({checkedItems:[]});
  	this.setState({searchResult:[]});
  	var item='';
  	var desc='';
  	var location='';
  	var bar='';
  	var vpn='';
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
  	if(this.state.vpn!='')
  	{
       vpn=("vpn="+this.state.vpn+'&').replace(/ /g,'');
  	}
  	var finalstring=item+desc+location+bar+vpn;
  	const query=finalstring.substring(0, finalstring.length - 1);
  	console.log(query);

  	Toast.loading('Searching');
          setTimeout(() => {
            Toast.hide();
          }, 2000);
    const baseuri='http://ec2-3-15-215-175.us-east-2.compute.amazonaws.com/api/v1/stockdetail?';
    const itemsearch=query;
      fetch(baseuri+itemsearch,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => { 
      this.setState({searchResult:resData.result})       
      })
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


render()
 {
  const { classes}= this.props;
  const open = Boolean(this.state.ischecked);
  var set='';
  
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
    								Item Id: </label> 
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}}
						          onBlur={this.itemChange}
						           />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>Item Desc:</label>
						          <input type="text"        
        							className='input' 
        							style={{ border: '1px solid red'}} 
						          onBlur={this.descChange}
						          />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}} >Location: </label>
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
						          <label style={{marginRight:'10px'}}>Barcode:</label>
						          <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.barChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4} style={{display:'flex', justifyContent: 'flex-end'}}>
						          <div className={classes.paper}>
						          <label style={{marginRight:'10px'}}>VPN:</label>
						         <input type="text"        
        							className='input'
        							style={{ border: '1px solid red'}} 
						          onBlur={this.vpnChange} />
						          </div>
						        </Grid>
						        <Grid item xs={4}>
						          <div className={classes.paper}>
						          
						          </div>
						        </Grid>
				        </Grid>
				        <Grid container item xs={12} >
				        <div style={{flexGrow: 1,
				        alignItems: 'flex-end',
				        display: 'flex',
	    				flexDirection: 'column',}}>
				        <div>
				        <Button  size='small' className={classes.buttons}
				         onClick={this.handleSearchItem}
				         style={{backgroundColor:'red'}}>
				         SEARCH
				         </Button>
				        <Button  size='small' className={classes.buttons}
				        style={{backgroundColor:'red'}}
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

    	<TableContainer component={Paper}>
			      <Table  stickyHeader aria-label="sticky table" size="small" className={classes.table_main}>
			        <TableHead >
			          <TableRow >
			           <TableCell padding='none' align="center"className={classes.table_head}>SELECT</TableCell>
			            <TableCell padding='none' align="center"className={classes.table_head}>ITEM ID</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>ITEM DESCRIPTION</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>BARCODE</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>VPN</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>LOCATION</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>TOTAL STOCK</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>AVAILABLE STOCK</TableCell>

			          </TableRow>
			        </TableHead>

			        <TableBody>
			          {this.state.searchResult.map((row,index)=> (

			            <TableRow >
			            <TableCell padding='none' align="center" className={classes.table_column}>
			              <input 
			              	type="checkbox"
			              	value={JSON.stringify(row)}
       					 	onChange={this.handleCheck}			
					        inputProps={{ 'aria-label': 'primary checkbox' }}
     						 />		                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column}>
			              {row.item}			                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column}>
			              {row.itemDesc}
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.itemUpc}
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.vpn}
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.locationName}
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.totalStock}
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                {row.availableStock}
			              </TableCell>
			              
			            </TableRow>
			            ))}
			          
			        </TableBody>
			      </Table>
			  </TableContainer>


    	
    	</div>
    	</Container>



    	)
}
}
StockView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StockView);