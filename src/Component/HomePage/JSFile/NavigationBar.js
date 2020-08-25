
import React ,{Component}from "react";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  
import ChevronRightIcon from '@material-ui/icons/ChevronRight';  
import Switch from '@material-ui/core/Switch';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles,fade} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {
  Route,
  Link, Redirect,  
} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';





const styles = theme => ({
	root:{
		flexGrow: 1,

	},
  
 

  search: {
    position:'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    fontSize:'small',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  title: {
    flexGrow: 1,
    textAlign:'start'
  },
  bottomappBar: {
    top: 'auto',
    bottom: 3,
  },
  titlebottom: {
    flexGrow: 1,
    textAlign:'center'
  },

  
});





class NavigationBar extends Component {
constructor(props){
  super(props);
  this.state={
    anchorEl:null,
    
  };
  
 }
handleProfileMenuOpen = event => {
    this.setState({anchorEl:event.currentTarget})
  };
  handleMenuClose = () => {
  this.setState({anchorEl:null})
  };
  
  Apply= () =>{
    // console.log('changed')
    // localStorage.setItem('darkState',this.props.darkState);

  }

render()
 {
  
  const { classes}= this.props;
  const isMenuOpen = Boolean(this.state.anchorEl);

  const menuId = 'primary-search-account-menu';
              const renderMenu = (
                <Menu
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  aria-haspopup="true"
                  open={isMenuOpen}
                  onClose={this.handleMenuClose}
                >
                
                  
                  <MenuItem >
                  <FormControlLabel
                    label="Dark Mode"
                    labelPlacement="start"
                    
                    control=<Switch checked={this.props.darkState} onChange={this.props.handleThemeChange} />

                  />
                  </MenuItem>
                  <MenuItem >
                  <Link to="/Home/AdminPanel" style={{ textDecoration: 'none',color:'black' }} >Admin Panel</Link>
                  </MenuItem>
                  
                 
                  

                  
                </Menu>
              );
  
    return (
    	<React.Fragment>
    	<div className={classes.root}>
		    <AppBar  position="fixed" style={{backgroundColor:'#4a4a4a'}}>
		        <Toolbar style={{minHeight: 20}}>
            <Typography className={classes.title}> 
            <Link to="/Home" style={{ textDecoration: 'none',color:'red'}} >LOGO
            </Link></Typography>
		        
    		       <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
			      

            <IconButton
              
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <IconButton
            
            color="inherit"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
            
          
		          </Toolbar>
		        </AppBar> 


      <AppBar position="fixed" style={{backgroundColor:'#4a4a4a'}} className={classes.bottomappBar}>
        <Toolbar style={{minHeight: 25}}>
        <Typography className={classes.titlebottom}>Subscribe</Typography>
          
        </Toolbar>
      </AppBar>
			
      {renderMenu}
    	</div>

    	</React.Fragment>


    	)
}
}
NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavigationBar);
