import React, { Component } from 'react';
import {
  Paper,
  Grid,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  AppBar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Route, Link, Redirect } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    height: theme.spacing(14),
  },
  avtarbox: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    textAlign: 'center',
    cursor: 'pointer',
  },
  avtarbox2: {
    width: theme.spacing(18),
    height: theme.spacing(11),
    cursor: 'pointer',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    border: 'solid 1px ',
    borderColor: 'red',
    backgroundColor: 'white',

    margin: theme.spacing(1),
  },
  icons: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  slide: {
    top: 'unset',
    position: 'relative !important',
  },
  circleNumber: {
    width: '28.7px',
    height: '28.7px',
    padding: '5px 1.5px 2px 2px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'inline-block',
    color: '#000000',
    fontSize: '13px',
    fontWeight: 'bold',
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: ' ',
    };
  }

  _onButtonClick = (event, index) => {
    this.setState({ clickedButton: index });
  };

  pageView(param) {
    switch (param) {
      case 'Stock':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{ borderLeft: '3px solid black', marginRight: '3%' }}
            ></div>
            <Link to='/Home/Stock' style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                {' '}
                View Stock
              </Button>
            </Link>
          </div>
        );

      case 'Sales':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>
            <Link to='/Home/Sales' style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Sales
              </Button>
            </Link>
          </div>
        );

      case 'Purchase Orders':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/PODetail' style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Orders
              </Button>
            </Link>

            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                Create Orders
              </Button>
            </Link>
          </div>
        );

      case 'costchange':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                Create Cost Change
              </Button>
            </Link>

            <div
              style={{ borderLeft: '3px solid black', marginRight: '3%' }}
            ></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Cost Change
              </Button>
            </Link>
          </div>
        );

      case 'Promotions':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                Create Promotions
              </Button>
            </Link>

            <div
              style={{ borderLeft: '3px solid black', marginRight: '3%' }}
            ></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Promotions
              </Button>
            </Link>
          </div>
        );

      case 'Invoices':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                Create Invoices
              </Button>
            </Link>

            <div
              style={{ borderLeft: '3px solid black', marginRight: '3%' }}
            ></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Invoices
              </Button>
            </Link>

            <div
              style={{ borderLeft: '3px solid black', marginRight: '3%' }}
            ></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                View Balances
              </Button>
            </Link>
          </div>
        );

      case 'configuration':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderLeft: '3px solid black' }}></div>
            <Link to='/Home/Supplier' style={{ textDecoration: 'none' }}>
              <Button style={{ textTransform: 'none', fontWeight: 'bold' }}>
                Configure Supplier
              </Button>
            </Link>
          </div>
        );

      default:
        return <Paper>{this.state.clickedButton}</Paper>;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar className={classes.slide} style={{ height: '60px' }}>
          <Container maxWidth='md'>
            <Grid
              container
              spacing={12}
              alignContent='center'
              justify='center'
              style={{ padding: '2%', textAlign: 'center' }}
            >
              <Grid item xs={3}>
                <span className={classes.circleNumber}>100</span>
                <span>&nbsp;&nbsp;Purchase Orders</span>
              </Grid>
              <Grid item xs={3}>
                <span className={classes.circleNumber}>100</span>
                <span>&nbsp;&nbsp;Cost Change</span>
              </Grid>
              <Grid item xs={3}>
                <span className={classes.circleNumber}>100</span>
                <span>&nbsp;&nbsp;Promotions</span>
              </Grid>
              <Grid item xs={3}>
                <span className={classes.circleNumber}>100</span>
                <span>&nbsp;&nbsp;Invoices</span>
              </Grid>
            </Grid>
          </Container>
        </AppBar>

        <Container maxWidth='md' style={{ marginTop: '9%', paddingLeft: '6%' }}>
          <Grid container justify='center' alignItems='center'>
            <Grid item xs={3}>
              <div className={classes.avtarbox}>
                <Avatar borderRadius='50%' className={classes.large}>
                  <img
                    src={require('../Icons/stock.svg')}
                    className={classes.icons}
                    onClick={(event) => this._onButtonClick(event, 'Stock')}
                  />
                </Avatar>
                <b>Stock</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/sales.svg')}
                    className={classes.icons}
                    onClick={(event) => this._onButtonClick(event, 'Sales')}
                  />
                </Avatar>
                <b>Sales</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/PO.svg')}
                    className={classes.icons}
                    onClick={(event) =>
                      this._onButtonClick(event, 'Purchase Orders')
                    }
                  />
                </Avatar>
                <b>Purchase Orders</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/PO.svg')}
                    className={classes.icons}
                    onClick={(event) =>
                      this._onButtonClick(event, 'Purchase Orders')
                    }
                  />
                </Avatar>
                <b>Purchase Orders</b>
              </div>
            </Grid>
          </Grid>

          <Grid container justify='center' alignItems='center'>
            <Grid item style={{ paddingTop: '12%' }}>
              <div className={classes.paper} style={{ width: '500px' }}>
                {this.pageView(this.state.clickedButton)}
              </div>
            </Grid>
          </Grid>

          <Grid container justify='center' alignItems='center'>
            <Grid item xs={3}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/costchange.svg')}
                    className={classes.icons}
                    onClick={(event) =>
                      this._onButtonClick(event, 'costchange')
                    }
                  />
                </Avatar>
                <b>Cost Changes</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/promotions.svg')}
                    className={classes.icons}
                    onClick={(event) =>
                      this._onButtonClick(event, 'Promotions')
                    }
                  />
                </Avatar>
                <b>Promotions</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/invoices.svg')}
                    className={classes.icons}
                    onClick={(event) => this._onButtonClick(event, 'Invoices')}
                  />
                </Avatar>
                <b>Invoices</b>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/supplier.svg')}
                    className={classes.icons}
                    onClick={(event) =>
                      this._onButtonClick(event, 'configuration')
                    }
                  />
                </Avatar>
                <b>Configuration</b>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage);
