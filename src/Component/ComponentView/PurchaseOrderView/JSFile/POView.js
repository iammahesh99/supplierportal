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
import CallToActionIcon from '@material-ui/icons/CallToAction';

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
    height: 300,
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
    padding: '5px',
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
});

class POView extends Component {
  constructor(props) {
    super(props);
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
      openDetailModel: false,
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

    console.log(row, '=====>>>>row');
    console.log(event.target.checked, '=====>>>>row');

    let index;
    if (event.target.checked) {
      options.push(row.PO);
    } else {
      index = options.indexOf(row.PO);
      options.splice(index, 1);
    }

    this.setState({ options: options }, () => {
      console.log(options, '===>>>options');
    });

    if (options.length === 1) {
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

  openDetailModel = () => {
    this.setState((prevState) => ({
      openDetailModel: !prevState.openDetailModel,
    }));
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.ischecked);
    console.log(this.state.searchResult);

    return (
      <Container maxWidth='lg'>
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
                        borderColor: 'Red',
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
                        borderColor: 'Red',
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
                        borderColor: 'Red',
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
                        borderColor: 'Red',
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
                        borderColor: 'Red',
                      }}
                      onBlur={this.locationChange}
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
                      style={{
                        width: 300,
                        borderColor: 'Red',
                      }}
                      onChange={this.startDate}
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
                        borderColor: 'Red',
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
                        borderColor: 'Red',
                      }}
                      onBlur={this.barChange}
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
                      style={{
                        width: 300,
                        borderColor: 'Red',
                      }}
                      onChange={this.startDate}
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
                    <div style={{ marginTop: '1%' }}>
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
              {this.state.detail ? (
                <Button
                  variant='contained'
                  color='default'
                  className={classes.buttons2}
                  startIcon={<CallToActionIcon />}
                  onClick={this.openDetailModel}
                  style={{
                    border: 'none',
                    background: 'white',
                    padding: '5px 18px',
                    borderRadius: '5px',
                  }}
                >
                  DETAIL
                </Button>
              ) : null}
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
                    PR#
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    PO#
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    CREATE DATE
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
                    TOTAL ITEMS
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    TOTAL QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    TOTAL COST
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    SHORT QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    EXCESS QTY
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertdL}
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
                      // bordercolor = '2px solid #008000';
                    }
                    if (row.status == 'REJECTED') {
                      // bordercolor = '2px solid red';
                    }
                    if (row.status == 'SUBMITTED') {
                      // bordercolor = '2px solid #FFFF00';
                    }
                    return (
                      <TableRow>
                        <TableCell className={classes.table_row_bordertd1}>
                          <Checkbox
                            onChange={(event) => this.handleCheck(event, row)}
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
                        <TableCell className={classes.table_row_bordertdL}>
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
          {/* <TablePagination
            style={{ paddingBottom: '2%' }}
            component='Paper'
            count={this.state.totalrecords}
            rowsPerPage={20}
            labelRowsPerPage=''
            rowsPerPageOptions={[]}
            page={this.state.page}
            onChangePage={this.handleChangePage}
          /> */}
        </div>

        <Dialog
          fullWidth
          open={this.state.openDetailModel}
          maxWidth='lg'
          classes={{ paper: classes.dialogPaper }}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <POSummary handleClose={this.openDetailModel} />
        </Dialog>
      </Container>
    );
  }
}
POView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POView);
