import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Container,
} from '@material-ui/core';
import '../CSSFile/LoginPage.css';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Route, Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import OtpSubmit from '../JSFile/OtpSubmit.js';
import Toast from 'light-toast';
import { properties } from '../../../Properties.js';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: '35px',
    fontWeight: 'bold',
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
    minHeight: 36,
    padding: '0%',
  },
  siteLogo: {
    width: '30%',
  },
  appBannerBorder: {
    height: '40px',
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: false,
      username: '',
      password: '',
      status: 0,
      token: '',
      loginfail: false,
    };
  }
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleClick = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const endUrl = properties.endUrl;

    const baseuri = endUrl + 'api/v1/authenticate';
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      userName: this.state.username,
      password: this.state.password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(proxyurl + baseuri, requestOptions)
      .then((response) => {
        Toast.loading('Logging ');
        setTimeout(() => {
          Toast.hide();
          if (response.status == 200) {
            this.setState({ otp: true });
          } else {
            this.setState({ loginfail: true });
          }
        }, 2000);

        return response.json();
      })
      .then((result) => {
        localStorage.setItem('token', result.token);

        this.setState({ token: result.token });
      })
      .catch((error) => console.log('error', error));
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.otp);

    return (
      <div>
        <div className={clsx(classes.root)}>
          <AppBar position='static' style={{ backgroundColor: '#66686A' }}>
            <Toolbar className={clsx(classes.customizeToolbar)}>
              <Grid
                container
                direction='row'
                spacing={20}
                justify='center'
                alignItems='center'
              >
                <Grid item xs={4}>
                  <Link to={`/`}>
                    <img
                      className={classes.siteLogo}
                      src={
                        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                      }
                      alt='Bosch Logo'
                    />
                  </Link>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant='h1' className={clsx(classes.title)}>
                    SIGN IN <br /> SUPPLIER PORTAL
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size='2x'
                    className={clsx(classes.menuButton)}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                    className={clsx(classes.menuButton)}
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size='2x'
                    className={clsx(classes.menuButton)}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size='2x'
                    className={clsx(classes.menuButton)}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar
            position='relative'
            color='primary'
            className={classes.appBannerBorder}
          ></AppBar>
          <AppBar
            position='absolute'
            color='primary'
            style={{
              top: 'unset',
              bottom: 0,
              height: '2rem',
              backgroundColor: '#66686A',
            }}
          ></AppBar>
        </div>
        {this.state.otp ? (
          <OtpSubmit token={this.state.token} />
        ) : (
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={clsx(classes.paper)} style={{ marginTop: '20%' }}>
              <Avatar className={clsx(classes.avatar)}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Username'
                name='email'
                onBlur={this.handleUsername}
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                onBlur={this.handlePassword}
              />
              {this.state.loginfail ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography style={{ color: 'red' }}>
                    Bad Credential
                  </Typography>
                </div>
              ) : null}

              <Button
                fullWidth
                onClick={this.handleClick}
                variant='contained'
                color='primary'
                style={{ marginTop: '2%' }}
              >
                Sign In
              </Button>
            </div>
          </Container>
        )}
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoginPage);
