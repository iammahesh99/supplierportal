
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from 'clsx';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';





const styles = theme => ({
	root:{
		flexGrow: 1,

	},
  end:{
    marginRight: theme.spacing(2),
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

  
});





class NavigationBar extends Component {
constructor(props){
  super(props);
  this.state={
  }
 }


render()
 {
  const { classes}= this.props;
  
    return (
    	<React.Fragment>
    	<div className={classes.root}>
		    <AppBar  position="fixed" style={{backgroundColor:'#4a4a4a'}}>
		        <Toolbar style={{minHeight: 20}}>
            <Typography className={classes.title}> LOGO</Typography>
		        
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
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
          
		          </Toolbar>
		        </AppBar> 
			
      
    	</div>

    	</React.Fragment>


    	)
}
}
NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavigationBar);
