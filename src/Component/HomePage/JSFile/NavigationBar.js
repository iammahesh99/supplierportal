import React, { Component } from 'react';

import {
  AppBar,
  Typography,
  Toolbar,
  Switch,
  Fade,
  Container,
  CssBaseline,
  InputBase,
  IconButton,
  MenuItem,
  Menu,
  FormControlLabel,
  MenuList,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles, fade } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { Route, Link, Redirect } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
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
    fontSize: 'small',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'start',
  },
  appbar: {
    top: 'unset',
    left: 'auto',
    bottom: 0,
    right: 0,
    position: 'absolute',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#66686A',
  },
});

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  Apply = () => {
    // console.log('changed')
    // localStorage.setItem('darkState',this.props.darkState);
  };

  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        aria-haspopup='true'
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem>
          <Link
            to='/Home/AdminPanel'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Admin Panel
          </Link>
        </MenuItem>
      </Menu>
    );

    return (
      <>
        <AppBar position='initial' style={{ backgroundColor: '#66686A' }}>
          <Toolbar>
            <Typography className={classes.title}>
              <img
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                }
                alt='Bosch Logo'
                width='8%'
              />
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <IconButton
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </>
    );
  }
}
NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavigationBar);
