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
  Dialog,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FromCreate from '../../ComponentView/FromCreate';
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
    height: theme.spacing(11),
    textAlign: 'center',
    cursor: 'pointer',
  },
  avtarbox2: {
    height: theme.spacing(11),
    textAlign: 'center',
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
  removeFlex: {
    flexBasis: 'unset',
    padding: '0% 5% 0% 5%',
  },
  bottonRightBorder: {
    padding: '6px 20px 6px 20px',
    textTransform: 'none',
    fontWeight: 'bold',
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: ' ',
      openModelView: false,
      createType: '',
    };
  }

  _onButtonClick = (event, index) => {
    this.setState({ clickedButton: index });
  };

  closeModel = () => {
    this.setState({
      openModelView: false,
    });
  };

  openModel = (type) => {
    this.setState({
      openModelView: true,
      createType: type,
    });
  };

  pageView(param) {
    switch (param) {
      case 'Stock':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>
            <Link to='/Home/Stock' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Stock
              </Button>
            </Link>
          </div>
        );

      case 'Sales':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>
            <Link to='/Home/Sales' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Sales
              </Button>
            </Link>
          </div>
        );

      case 'Purchase Orders':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/PODetail' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Orders
              </Button>
            </Link>

            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
                onClick={() => this.openModel('Orders')}
              >
                Create Orders
              </Button>
            </Link>
          </div>
        );

      case 'ASN':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/ASNDetail' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View ASN
              </Button>
            </Link>
          </div>
        );

      case 'costchange':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
                onClick={() => this.openModel('Cost Changes')}
              >
                Create Cost Change
              </Button>
            </Link>

            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/CostDetail' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Cost Change
              </Button>
            </Link>
          </div>
        );

      case 'Promotions':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
                onClick={() => this.openModel('Promotions')}
              >
                Create Promotions
              </Button>
            </Link>

            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/PromotionDetail' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Promotions
              </Button>
            </Link>
          </div>
        );

      case 'Invoices':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
                onClick={() => this.openModel('Invoices')}
              >
                Create Invoices
              </Button>
            </Link>

            <div style={{ borderLeft: '3px solid black' }}></div>

            <Link to='/Home/InvoiceDetail' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
                View Invoices
              </Button>
            </Link>
          </div>
        );

      case 'configuration':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10% 0% 10% 0%',
            }}
          >
            <div style={{ borderLeft: '3px solid black' }}></div>
            <Link to='/Home/Supplier' style={{ textDecoration: 'none' }}>
              <Button
                classes={{
                  text: this.props.classes.bottonRightBorder,
                }}
              >
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
                <Link
                  to={`/Home/Notification/PO`}
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <span className={classes.circleNumber}>100</span>
                  <span>&nbsp;&nbsp;Purchase Orders</span>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link
                  to={`/Home/Notification/CO`}
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <span className={classes.circleNumber}>100</span>
                  <span>&nbsp;&nbsp;Cost Change</span>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link
                  to={`/Home/Notification/Promotion`}
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <span className={classes.circleNumber}>100</span>
                  <span>&nbsp;&nbsp;Promotions</span>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link
                  to={`/Home/Notification/Invoices`}
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <span className={classes.circleNumber}>100</span>
                  <span>&nbsp;&nbsp;Invoices</span>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </AppBar>

        <Container maxWidth='md' style={{ padding: '3%', marginTop: '3%' }}>
          <Grid
            container
            spacing={12}
            alignContent='center'
            style={{ padding: '2%', textAlign: 'center' }}
          >
            <Grid item xs={3} className={classes.removeFlex}>
              <div className={classes.avtarbox}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/stock.svg')}
                    className={classes.icons}
                    onClick={(event) => this._onButtonClick(event, 'Stock')}
                  />
                </Avatar>
                <b>Stock</b>
              </div>
            </Grid>
            <Grid item xs={3} className={classes.removeFlex}>
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
            <Grid item xs={3} className={classes.removeFlex}>
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
            <Grid item xs={3} className={classes.removeFlex}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/asn.svg')}
                    className={classes.icons}
                    onClick={(event) => this._onButtonClick(event, 'ASN')}
                  />
                </Avatar>
                <b>ASN</b>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <Grid item>
              <div className={classes.paper} style={{ width: '500px' }}>
                {this.pageView(this.state.clickedButton)}
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={12}
            alignContent='center'
            style={{ padding: '2%', textAlign: 'center' }}
          >
            <Grid item xs={3} className={classes.removeFlex}>
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
            <Grid item xs={3} className={classes.removeFlex}>
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
            <Grid item xs={3} className={classes.removeFlex}>
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
            <Grid item xs={3} className={classes.removeFlex}>
              <div className={classes.avtarbox2}>
                <Avatar alt='Remy Sharp' className={classes.large}>
                  <img
                    src={require('../Icons/configuration.svg')}
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

        <Dialog
          fullWidth
          fullScreen={false}
          open={this.state.openModelView}
          maxWidth='lg'
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <FromCreate
            createType={this.state.createType}
            handleClose={this.closeModel}
          />
        </Dialog>
      </>
    );
  }
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage);
