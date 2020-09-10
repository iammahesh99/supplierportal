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
  Checkbox,
  Dialog,
  TablePagination,
  TableContainer,
  Radio,
  Box,
} from '@material-ui/core';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import POSummary from '../JSFile/POSummary.js';
import { Link } from 'react-router-dom';
import PO from '../JSFile/JSON/PO.json';
import '../CSSFile/POView.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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

class POView extends Component {
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
      open: false,
      page: 0,
      totalrecords: 0,
      detail: false,
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

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
    this.setState({ searchResult: PO.results });
    this.setState({ totalrecords: PO.totalRecordCount });

    // this.setState({options:[]});
    // this.setState({checkedItems:[]});
    // this.setState({searchResult:[]});
    // var item='';
    // var desc='';
    // var location='';
    // var bar='';
    // var startDate='';
    // var endDate='';
    // if(this.state.item!=''){
    // 	item=("item="+this.state.item+'&').replace(/ /g,'');

    // }
    // if(this.state.Desc!='')
    // {
    // 	desc=("desc="+this.state.Desc+'&').replace(/ /g, '%20');;

    // }
    // if(this.state.location!='')
    // {
    //     location=("location="+this.state.location+'&').replace(/ /g, '%20');;
    // }
    // if(this.state.bar!='')
    // {
    //     bar=("upc="+this.state.bar+'&').replace(/ /g,'');
    // }
    // if(this.state.startDate!='')
    // {
    //     startDate=("startDate="+this.state.startDate+'&').replace(/ /g,'');
    // }
    // if(this.state.endDate!='')
    // {
    //     endDate=("endDate="+this.state.endDate+'&').replace(/ /g,'');
    // }
    // var finalstring=item+desc+location+bar+startDate+endDate;
    // const query=finalstring.substring(0, finalstring.length - 1);
    // console.log(query);

    // Toast.loading('Searching');
    //        setTimeout(() => {
    //          Toast.hide();
    //        }, 2000);

    //  const uri='/PurchaseOrders/recent/purchaseOrderSearch?statuses=A';
    //  //console.log(uri);

    //    fetch(uri,{
    //      method: 'GET',

    //      headers: {
    //      'Authorization':'Basic ' + btoa('RMS_ADMIN'+ ':' +'Retek_123'),
    //      'Content-Type':'application/xml',
    //      'Accept':'application/json',
    //      'Accept-Versioning':'false',
    //      'Accept-Language':'en-US,en;q=0.8'
    //      }})
    //  .then(response =>  response.json())
    //  .then(resData => {
    //  	console.log(resData);
    //  	this.setState({searchResult:resData.results})
    //  	this.setState({totalrecords:resData.totalRecordCount})

    //  })
    //  .catch(error => console.log('error', error));
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
    if (this.state.options.length == 1) {
      this.setState({ detail: true });
    } else {
      this.setState({ detail: false });
    }
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
    console.log(this.state.searchResult);

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
              label='Search Stock'
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
                      label='PO#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.itemChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Item ID'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.descChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Item Desc#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.descChange}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={12}>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='PR#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.barChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Barcode#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.locationChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Start Date#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.locationChange}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={12}>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='PR#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.barChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='Status#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.barChange}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.paper}>
                    <TextField
                      id='outlined-number'
                      label='End Date#'
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
                        borderColor: 'Red'
                      }}
                      onBlur={this.barChange}
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
                    <div style={{ marginRight: '3%', marginTop: '1%' }}>
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
                    PR#
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    PO#
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    CREATE DATE
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
                    TOTAL ITEMS
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    TOTAL QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    TOTAL COST
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    SHORT QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    EXCESS QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_row_bordertd}
                  >
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.searchResult
                  .slice(this.state.page * 20, this.state.page * 20 + 20)
                  .map((row) => {
                    let bordercolor = '';
                    if (row.status == 'APPROVED') {
                      bordercolor = '2px solid #008000';
                    }
                    if (row.status == 'REJECTED') {
                      bordercolor = '2px solid red';
                    }
                    if (row.status == 'SUBMITTED') {
                      bordercolor = '2px solid #FFFF00';
                    }
                    return (
                      <TableRow>
                        <TableCell className={classes.table_row_bordertd1}>

                          <Radio
                            value={JSON.stringify(row)}
                            onChange={this.handleCheck}
                            name='radio-button-demo'
                          />
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          <Link style={{ color: 'black' }}>
                            {' '}
                            {row.orderNumber}
                          </Link>
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.PO}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.createDate}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.location}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.totalItem}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.totalQTY}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.totalCost}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.shortQty}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          {row.excessQTY}
                        </TableCell>
                        <TableCell className={classes.table_row_bordertd}>
                          <div style={{ border: bordercolor }}>
                            {row.status}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ paddingBottom: '2%' }}
            component='Paper'
            count={this.state.totalrecords}
            rowsPerPage={20}
            labelRowsPerPage=''
            rowsPerPageOptions={[]}
            page={this.state.page}
            onChangePage={this.handleChangePage}
          />
        </div>

        <Dialog
          fullWidth
          open={this.state.open}
          maxWidth='md'
          classes={{ paper: classes.dialogPaper }}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <POSummary handleClose={this.handleClose} />
        </Dialog>
      </Container>
    );
  }
}
POView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POView);
