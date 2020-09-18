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
  Dialog,
  Toolbar,
  IconButton,
  Box,
  Radio,
  InputBase,
} from '@material-ui/core';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SearchIcon from '@material-ui/icons/Search';
import Alert from '@material-ui/lab/Alert';
import { properties } from '../../../../Properties.js';

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
  search: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'solid 1px ',
    borderColor: 'red',
  },
  tables: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px solid red',
    height: 380,
  },
  paper: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },
  buttons: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    height: '30px',
    fontSize: '10px',
  },
  buttons2: {
    marginRight: theme.spacing(1),
    height: '30px',
    fontSize: '10px',
  },
  slide: {
    marginTop: 10,
    width: '100%',
    height: '10%',
    textAlign: 'center',
  },
  mainscreen: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
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
    padding: '0px',
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
  iconButton: {
    padding: '3%',
  },
});

class StockView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      ischecked: '',
      searchResult: [],
      filterResult: [],
      item: '',
      Desc: '',
      location: '',
      bar: '',
      vpn: '',
      checkedItems: [],
      options: [],
      // map:false,
      // enable:false,
      // listOfHeader:[]
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
  vpnChange = (event) => {
    this.setState({ vpn: event.target.value });
  };

  handleSearchItem = () => {
    this.setState({ options: [] });
    this.setState({ checkedItems: [] });
    this.setState({ searchResult: [] });
    var item = '';
    var desc = '';
    var location = '';
    var bar = '';
    var vpn = '';
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
    if (this.state.vpn != '') {
      vpn = ('vpn=' + this.state.vpn + '&').replace(/ /g, '');
    }
    var finalstring = item + desc + location + bar + vpn;
    const query = finalstring.substring(0, finalstring.length - 1);
    console.log(query);

    Toast.loading('Searching');
    setTimeout(() => {
      Toast.hide();
    }, 4000);
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const endUrl = properties.endUrl;
    const baseuri = endUrl + 'api/v1/stockdetail?';
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
        this.setState({
          searchResult: result.result,
          filterResult: result.result,
        });
      })
      .catch((error) => console.log('error', error));

    // fetch(baseuri+itemsearch,{
    //   method: 'GET',
    //   })
    // .then(response =>  response.json())
    // .then(resData => {
    // this.setState({searchResult:resData.result})
    // })
  };
  handleReset = () => {
    this.setState({ searchResult: [] });
    this.setState({ item: '' });
    this.setState({ desc: '' });
    this.setState({ location: '' });
    this.setState({ bar: '' });
    this.setState({ vpn: '' });
  };
  handleCheck = (event, rowIndex) => {
    const options = this.state.options;
    let index;

    console.log(rowIndex, '===>>>rowIndex');

    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(rowIndex);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(rowIndex);
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
    var ans = 'Stock';
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

  handleSearch = (event) => {
    console.log(event.target.value, '====>>>>>>target');

    const { searchResult: search } = this.state;
    if (event.target.value == '' || search.length == 0) return true;

    let results = [];
    let searchField1 = 'item';
    let searchField2 = 'itemDesc';
    let searchField3 = 'itemUpc';
    let searchField4 = 'vpn';
    let searchField5 = 'locationId';
    let searchField6 = 'locType';
    let searchField7 = 'locationName';
    let searchField8 = 'totalStock';
    let searchField9 = 'availableStock';
    let condition = new RegExp(event.target.value);
    console.log(search, '===>>>>search result');

    for (var i = 0; i < search.length; i++) {
      if (condition.test(search[i][searchField1])) {
        results.push(search[i]);
      }

      if (condition.test(search[i][searchField2])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField3])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField4])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField5])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField6])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField7])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField8])) {
        results.push(search[i]);
      }
      if (condition.test(search[i][searchField9])) {
        results.push(search[i]);
      }
    }

    this.setState({
      filterResult: results,
    });
  };

  render() {
    const { classes } = this.props;
    const { checkedItems, options } = this.state;
    console.log(options.indexOf(0) >= 0, '===>>>>options1');
    console.log(options, '===>>>>options3');
    return (
      <Container component='main' maxWidth='lg'>
        <Grid container spacing={3} direction='row' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='body2'>Specify Search Criteria</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'end' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
              }
              label='Hide Pane'
            />
          </Grid>
        </Grid>

        {this.state.checked ? (
          <Box
            border={1}
            borderRadius={5}
            borderColor='red'
            display='flex'
            flexWrap='nowrap'
            className={classes.search}
          >
            <Container
              fixed={true}
              maxWidth='lg'
              style={{ textAlign: 'center' }}
            >
              <Grid
                container
                spacing={0}
                alignContent='center'
                alignItems='center'
              >
                <Grid container item xs={12}>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Item Id'
                      type='text'
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                        },
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{
                        width: 300,
                        borderColor: 'Red',
                      }}
                      onBlur={this.itemChange}
                    />
                  </Grid>

                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Item Desc'
                      type='text'
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                        },
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{ width: 300, borderColor: 'Red' }}
                      onBlur={this.descChange}
                    />
                  </Grid>

                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Location'
                      type='text'
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                        },
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{ width: 300, borderColor: 'Red' }}
                      onBlur={this.locationChange}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={12}>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Barcode'
                      type='text'
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                        },
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{ width: 300, borderColor: 'Red' }}
                      onBlur={this.barChange}
                    />
                  </Grid>

                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='VPN'
                      type='text'
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                        },
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{ width: 300, borderColor: 'Red' }}
                      onBlur={this.vpnChange}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <div
                    style={{
                      flexGrow: 1,
                      alignItems: 'flex-end',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.buttons}
                        onClick={this.handleSearchItem}
                      >
                        SEARCH
                      </Button>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.buttons}
                        onClick={this.handleReset}
                      >
                        RESET
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ) : null}

        <div className={classes.tables}>
          {options.length > 0 ? (
            <Alert severity='info'>{options.length} Items</Alert>
          ) : null}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: 'red',
              bottom: '-10px',
              padding: '5px',
            }}
          >
            <div>
              <Paper component='form' className={classes.root}>
                <IconButton
                  type='submit'
                  aria-label='search'
                  style={{ padding: 3 }}
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  onChange={(event) => {
                    this.handleSearch(event);
                  }}
                  placeholder='Search'
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </Paper>
            </div>

            <div>
              <Button
                variant='contained'
                color='default'
                className={classes.buttons2}
                startIcon={<CloudDownloadIcon />}
                onClick={this.handleExport}
                style={{
                  border: 'none',
                  background: 'white',
                  padding: '5px 18px',
                  borderRadius: '5px',
                }}
              >
                EXCEL
              </Button>
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
                    SELECT
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    ITEM ID
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    ITEM DESCRIPTION
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    BARCODE
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    VPN
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    LOCATION
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    TOTAL STOCK
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertdL}
                  >
                    AVAILABLE STOCK
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.filterResult.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    aria-checked={options.indexOf(index) >= 0 ? true : false}
                    selected={options.indexOf(index) >= 0 ? true : false}
                  >
                    <TableCell
                      className={classes.table_row_bordertd1}
                      key={index}
                    >
                      <Checkbox
                        key={index}
                        onChange={(event) => this.handleCheck(event, index)}
                        name='radio-button-demo'
                      />
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.item}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.itemDesc}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.itemUpc}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.vpn}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.locationName}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertd}
                      key={index}
                    >
                      {row.totalStock}
                    </TableCell>
                    <TableCell
                      className={classes.table_row_bordertdL}
                      key={index}
                    >
                      {row.availableStock}
                    </TableCell>
                  </TableRow>
                ))}
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
      </Container>
    );
  }
}
StockView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StockView);
