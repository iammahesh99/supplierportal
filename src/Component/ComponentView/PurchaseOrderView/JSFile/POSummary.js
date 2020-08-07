import React ,{Component}from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
	tables:{
		
		
		marginBottom:theme.spacing(10),
	    display: 'flex',
	    flex:1,
	    flexDirection: 'column',
  		
  		maxHeight: 200,
	},

	poDetail:{
		
		
		marginBottom:theme.spacing(6),
	    display: 'flex',
	    flex:1,
	    flexDirection: 'column',
  		
  		
	},
	excel:{
		backgroundColor:'red',
		width:'100%',
		justifyContent:'flex-end',
		display:'flex',



	},
	close:{
		
		width:'100%',
		justifyContent:'flex-end',
		display:'flex',
		minHeight: 20



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




class POSummary extends Component {

	
constructor(props){

  super(props);
  this.state={
  
  }
 }

  


render()
 {
  const { classes}= this.props;
  
 
    return (
    	<div >
    	
    	 <Toolbar className={classes.close}>
    	<IconButton edge="start" color="inherit" onClick={this.props.handleClose} aria-label="close">
              <CloseIcon style={{ color: 'red' }} />
            </IconButton>
            </Toolbar>
    	
    	<div className={classes.poDetail}>
    	<Typography>PO SUMMARY</Typography> 
    	<div> 
    	<div className={classes.excel}>
    	<button >
    	Export XL</button>
    	


    	</div>
<Grid container >
    	<Grid container item xs={12} spacing={1}>
          <Grid item xs={2} style={{textAlign:'center'}}>
          <p style={{fontWeight: 'bold'}}>#PR</p>
          <p>100637121</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>#PO</p>
           <p>112212</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>CREATE DATE</p>
           <p>12/09/2019</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>LOCATION</p>
           <p>CO-12342</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>TOTAL ITEMS</p>
           <p>21</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}> TOTAL QTY</p>
           <p>400</p>
        </Grid>
        </Grid>
        <Grid container  spacing={1}>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>TOTAL COST</p>
           <p>100</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>SHORTAGE QTY</p>
           <p>390</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
           <p style={{fontWeight: 'bold'}}>EXCESS QTY</p>
           <p>40</p>
        </Grid>
        </Grid>
 </Grid>
			  </div>
    	</div>
    	
    	  	
    	<div className={classes.tables}> 
    	<Typography >PO DETAILS</Typography> 
    	<div className={classes.excel}>
    	<Button size='small' variant="contained" 
    	style={{textTransform: "none"  }}
    	onClick={this.handleExport}>
    	Export XL</Button>
    	


    	</div>

    	<TableContainer component={Paper}>
			      <Table  stickyHeader aria-label="sticky table" size="small" className={classes.table_main}>
			        <TableHead >
			          <TableRow >
			           <TableCell padding='none' align="center"className={classes.table_head}>SELECT</TableCell>
			            <TableCell padding='none' align="center"className={classes.table_head}>PR#</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>ITEM ID</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>VPN</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>BARCODE</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>ITEM DESC</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>TOTAL QTY</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>RCVD QTY</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>SHORTAGE</TableCell>
			            <TableCell padding='none' align="center" className={classes.table_head}>EXCESS </TableCell>
			            



			          </TableRow>
			        </TableHead>

			        <TableBody>
			          
			            <TableRow >
			            <TableCell padding='none' align="center" className={classes.table_column}>
			              <input 
			              	type="checkbox"
			              	
       					 	onChange={this.handleCheck}			
					        inputProps={{ 'aria-label': 'primary checkbox' }}
     						 />		                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column}>
			              100637121		                
			              </TableCell>
			              <TableCell padding='none' align="center" className={classes.table_column}>
			              12314
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                124343543
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			               CO-12342
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                1001-DUBAI
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                400
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                10
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                390
			              </TableCell>
			              <TableCell padding='none'  align="center" className={classes.table_column}>
			                40
			              </TableCell>
			              
			            </TableRow>
			            
			          
			        </TableBody>
			      </Table>
			  </TableContainer>
			  </div>
			  

    	
    	</div>



    	);
}
}
POSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POSummary);