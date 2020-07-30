import React ,{Component}from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import '../CSSFile/LoginPage.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  Route,
  Link, Redirect,  
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:'center'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },

   paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customizeToolbar: {
    minHeight: 36
  }
});


class LoginPage extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render()
 {
  const { classes}= this.props;
  
    return (
      <div >
      <div className={clsx(classes.root)}>
      <AppBar  style={{backgroundColor:'#4a4a4a'}}>
        <Toolbar className={clsx(classes.customizeToolbar)}>
          <Typography variant="h5" className={clsx(classes.title)}>
            SIGN IN SUPPLIER PORTAL
          </Typography>
           <FontAwesomeIcon icon={faFacebook} size="2x"  className={clsx(classes.menuButton)}/>
          <FontAwesomeIcon icon={faInstagram} size="2x"  className={clsx(classes.menuButton)}/>
           <FontAwesomeIcon icon={faYoutube} size="2x"  className={clsx(classes.menuButton)}/>
           <FontAwesomeIcon icon={faTwitter} size="2x"  className={clsx(classes.menuButton)}/>
          
        </Toolbar>

      </AppBar>  
      </div>
<Container component="main" maxWidth="xs">
        <CssBaseline />
      <div className={clsx(classes.paper)}>
        <Avatar className={clsx(classes.avatar)}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={clsx(classes.form)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
         <Link to="/Home" style={{ textDecoration: 'none' }}> <Button
            type="submit"
            fullWidth
            variant="contained"
            className={clsx(classes.submit)}
            style={{backgroundColor:'red'}}
          >
            Sign In
          </Button>
          </Link>
          
        </form>
      </div>
      </Container>

        



         
 
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoginPage);