import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Paper,
  Grid,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Container,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CssBaseline,
  TableContainer,
  Checkbox,
  Box,
  Radio,
  Avatar,
} from '@material-ui/core';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { properties } from '../../../../Properties.js';
import Slider from 'react-slick';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#696969',
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

const styles = (theme) => ({
  large: {
    width: '50px',
    height: '50px',
    border: 'solid 1px ',
    borderColor: 'red',
    backgroundColor: 'white',
    margin: '10px 45px 10px 45px',
  },
  removeFlex: {
    flexBasis: 'unset',
    padding: '0% 5% 0% 5%',
  },
  avtarbox2: {
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '12px',
    width: 'auto !important',
  },
  tables: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px solid red',
    height: 450,
  },
  poDetail: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  smallSummery: {
    width: '100%',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  close: {
    width: '100%',
    justifyContent: 'flex-end',
    display: 'flex',
    minHeight: 20,
  },
  table_head: {
    padding: 'none',
  },
  table_column: {
    padding: 'none',
  },
  table_main: {
    padding: 'none',
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
  },
  table_head_bordertd: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    fontSize: '12px',
    padding: '5px',
    fontWeight: 'bold',
  },
  table_head_bordertd1: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderLeft: '1px solid #d7d6d6',
    borderTopLeftRadius: ' 10px',
    borderBottomLeftRadius: '10px',
    padding: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  table_head_bordertdL: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderRight: '1px solid #d7d6d6',
    borderTopRightRadius: ' 10px',
    borderBottomRightRadius: '10px',
    fontSize: '12px',
    padding: '5px',
    fontWeight: 'bold',
  },
  table_row_bordertd: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    fontSize: '12px',
    padding: '5px',
  },
  table_row_bordertd1: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderLeft: '1px solid #d7d6d6',
    borderTopLeftRadius: ' 10px',
    borderBottomLeftRadius: '10px',
    padding: '12px',
    fontSize: '12px',
  },
  table_row_bordertdL: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderRight: '1px solid #d7d6d6',
    borderTopRightRadius: ' 10px',
    borderBottomRightRadius: '10px',
    fontSize: '12px',
    padding: '5px',
  },
  main_table: {
    borderCollapse: 'separate',
    borderSpacing: '0 5px',
  },
  main_table_root: {
    padding: '0% 1% 0% 1%',
  },
  cssOutlinedInput: {
    borderColor: `red !important`,
    height: '40px',
  },
  textBoxInputLabel: {
    fontWeight: 'bolder',
    fontSize: '18px',
    color: '#000000',
  },
  summeryPTag: {
    margin: '5px 0px 3px 6px !important',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  summeryPValue: {
    margin: '5px 0px 3px 6px !important',
    fontSize: '11px',
  },
  topDivInfo: {
    flexBasis: '11%',
    maxWidth: 'unset',
  },
  fmaindiv: {
    border: '2px solid red',
    padding: '2%',
  },
  fchiddiv: {
    margin: '6px 0px 7px 0px',
  },
  sliderDiv: {
    //border: '1px solid red',
    borderTop: '1px solid red',
    borderBottom: '1px solid red',
  },
  slickSlide: {
    padding: '0 8px',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
});

class NotificationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      checkedItems: [],
      options: [],
      selectedAlert: 'PO',
      settings: {
        initialSlide: 0,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      },
    };
  }

  updateView = (status) => {
    switch (status) {
      case 'PO_ALERTS':
        this.setState({
          selectedAlert: 'PO',
        });
        break;
      case 'STOCK_ALERTS':
        this.setState({
          selectedAlert: 'STOCK',
        });
        break;
      case 'SALES_ALERTS':
        this.setState({
          selectedAlert: 'SALES',
        });
        break;
      case 'INVOICE_ALERTS':
        this.setState({
          selectedAlert: 'INVOICE',
        });
        break;
      case 'ASN_ALERTS':
        this.setState({
          selectedAlert: 'ASN',
        });
        break;
      case 'COST_ALERTS':
        this.setState({
          selectedAlert: 'COST',
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const { settings, selectedAlert } = this.state;

    return (
      <Container component='main' maxWidth='lg'>
        <div className={classes.tables}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <div>
              <h3>{selectedAlert} ALERTS</h3>
            </div>
          </div>

          <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
            <Table
              stickyHeader
              aria-label='sticky table'
              padding='default'
              size='medium'
              hover={true}
              classes={{ root: classes.main_table_root }}
              className={classes.main_table}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd1}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    Message
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    DATE
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* {this.state.searchResult.map((row, index) => ( */}
                <TableRow>
                  <TableCell className={classes.table_row_bordertd1}>
                    0001
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    Hey, You Got New Message.
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    12th May 2020
                  </TableCell>
                  <TableCell className={classes.table_row_bordertdL}>
                    {true ? (
                      <Avatar
                        className={classes.small}
                        alt='Remy Sharp'
                        style={{ backgroundColor: '#00FF00' }}
                      >
                        {' '}
                        <CheckIcon />
                      </Avatar>
                    ) : (
                      <Avatar
                        className={classes.small}
                        alt='Remy Sharp'
                        style={{ backgroundColor: 'red' }}
                      >
                        {' '}
                        <CloseIcon />
                      </Avatar>
                    )}
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>

          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              padding: '10px',
            }}
          ></div>
        </div>

        {/* below Slider Code */}
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ marginTop: '2%' }}
        >
          <Grid item xs={7}>
            <div className={classes.sliderDiv}>
              <Slider {...settings}>
                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('PO_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>PO Alerts</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('STOCK_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/stock.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Stock Alerts</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('SALES_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/sales.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Sales Alerts</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('INVOICE_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/invoices.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Inv Alerts</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('ASN_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/asn.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>ASN Alerts</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('COST_ALERTS')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/costchange.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>CO Alerts</b>
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
NotificationView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NotificationView);
