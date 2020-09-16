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
    height: 200,
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
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var date = today.getFullYear() + '-' + mm + '-' + dd;
    super(props);
    this.state = {
      checked: true,
      currentDate: date,
      searchResult: [],
      item: '',
      Desc: '',
      location: '',
      bar: '',
      startDate: '',
      endDate: '',
      checkedItems: [],
      options: [],
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

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  itemChange = (event) => {
    this.setState({ item: event.target.value });
    console.log(this.state.item);
  };

  descChange = (event) => {
    this.setState({ Desc: event.target.value });
    console.log(this.state.Desc);
  };

  locationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  barChange = (event) => {
    this.setState({ bar: event.target.value });
  };

  startDate = (event) => {
    this.setState({ startDate: event.target.value });
  };

  endDate = (event) => {
    this.setState({ endDate: event.target.value });
  };

  handleSearchItem = () => {
    this.setState({ options: [] });
    this.setState({ checkedItems: [] });
    this.setState({ searchResult: [] });
    var item = '';
    var desc = '';
    var location = '';
    var bar = '';
    var startDate = '';
    var endDate = '';
    if (this.state.item != '') {
      item = ('item=' + this.state.item + '&').replace(/ /g, '');
    }
    if (this.state.Desc != '') {
      desc = ('desc=' + this.state.Desc + '&').replace(/ /g, '%20');
    }
    if (this.state.location != '') {
      location = ('location=' + this.state.location + '&').replace(/ /g, '%20');
    }
    if (this.state.bar != '') {
      bar = ('upc=' + this.state.bar + '&').replace(/ /g, '');
    }
    if (this.state.startDate != '') {
      startDate = ('startDate=' + this.state.startDate + '&').replace(/ /g, '');
    }
    if (this.state.endDate != '') {
      endDate = ('endDate=' + this.state.endDate + '&').replace(/ /g, '');
    }
    var finalstring = item + desc + location + bar + startDate + endDate;
    const query = finalstring.substring(0, finalstring.length - 1);
    console.log(query);

    Toast.loading('Searching');
    setTimeout(() => {
      Toast.hide();
    }, 4000);
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const endUrl = properties.endUrl;
    const baseuri = endUrl + 'api/v1/salesdetail?';
    const itemsearch = query;

    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer ' + ' ' + localStorage.getItem('dataToken')
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(proxyurl + baseuri + itemsearch, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ searchResult: result.result });
      })
      .catch((error) => console.log('error', error));
  };

  handleReset = () => {
    this.setState({ searchResult: [] });
    this.setState({ item: '' });
    this.setState({ desc: '' });
    this.setState({ location: '' });
    this.setState({ bar: '' });
    this.setState({ vpn: '' });
  };

  handleCheck = (event, row) => {
    const options = this.state.options;
    let index;

    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(event.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(event.target.value);
      options.splice(index, 1);
    }

    // update the state with the new array of options
    this.setState({ options: options });
  };

  handleExport = () => {
    this.setState({ checkedItems: [] });
    this.state.options.map((data) => {
      this.state.checkedItems.push(JSON.parse(data));
    });
    var ans = 'Sales';
    var arr = '0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
    var len = 5;
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }

    const sheet = XLSX.utils.json_to_sheet(this.state.checkedItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet 1');
    XLSX.writeFile(workbook, ans + `.xls`);
  };

  render() {
    const { classes } = this.props;
    const { settings } = this.state;
    const open = Boolean(this.state.ischecked);

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
              <p>ALERTS</p>
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
                  onClick={() => this.updateView('PO_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>PO Config</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('STOCK_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/stock.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Stock Config</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('SALES_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/sales.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Sales Config</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('INVOICE_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/invoices.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>Inv Config</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('ASN_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/asn.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>ASN Config</b>
                </div>

                <div
                  className={classes.avtarbox2}
                  onClick={() => this.updateView('COST_CONFIG')}
                >
                  <Avatar className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/costchange.svg')}
                      className={classes.icons}
                    />
                  </Avatar>
                  <b>CO Config</b>
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
