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
} from '@material-ui/core';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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
    height: 400,
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
  table_row_bordertd: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
  },
  table_row_bordertd1: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderLeft: '1px solid #d7d6d6',
    borderTopLeftRadius: ' 10px',
    borderBottomLeftRadius: '10px',
    padding: '10px',
  },
  table_row_bordertdL: {
    borderTop: '1px solid #d7d6d6',
    borderBottom: '1px solid #d7d6d6',
    borderRight: '1px solid #d7d6d6',
    borderTopRightRadius: ' 10px',
    borderBottomRightRadius: '10px',
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
});

class SalesView extends Component {
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

  handleCheck = (event) => {
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
    const open = Boolean(this.state.ischecked);

    return (
      <Container component='main' maxWidth='lg'>
        <Grid container spacing={3} direction='row' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='body2'>
              Specify Search Criteria</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'end' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
              }
              label='Search Sales'
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
                        width: '12px',
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textBoxInputLabel,
                        },
                        shrink: true,
                      }}
                      variant='outlined'
                      style={{
                        width: 270,
                        borderColor: 'Red',
                        height: '0.1876em',
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
                      style={{ width: 270, borderColor: 'Red' }}
                      onBlur={this.descChange}
                    />
                  </Grid>

                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Start Date'
                      type='date'
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
                      style={{ width: 270, borderColor: 'Red' }}
                      onChange={this.startDate}
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
                      style={{ width: 270, borderColor: 'Red' }}
                      onBlur={this.barChange}
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
                      style={{ width: 270, borderColor: 'Red' }}
                      onBlur={this.locationChange}
                    />
                  </Grid>

                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='End Date'
                      type='date'
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
                      style={{ width: 270, borderColor: 'Red' }}
                      onChange={this.endDate}
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
                    <div style={{ marginRight: '1%', marginTop: '1%' }}>
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
          <div
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'red',
              bottom: '-10px',
              padding: '5px',
            }}
          >
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
                    className={classes.table_row_bordertd1}
                  >
                    SELECT
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    ITEM ID
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    ITEM DESCRIPTION
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    BARCODE
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    VPN
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    LOCATION
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    TOTAL SALES
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    RETURN
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    NET SALES
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertdL}
                  >
                    PROMO SALES
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.searchResult.map((row, index) => (
                  <TableRow>
                    <TableCell className={classes.table_row_bordertd1}>
                      <Radio
                        value={JSON.stringify(row)}
                        onChange={this.handleCheck}
                        name='radio-button-demo'
                      />
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.item}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.itemDesc}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.itemUpc}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.vpn}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.locationName}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.totalSale}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.returns}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.netSale}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      {row.promoSale}
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
SalesView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SalesView);
