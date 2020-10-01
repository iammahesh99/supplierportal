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
  Avatar,
  Toolbar,
  IconButton,
  TableContainer,
  Box,
  InputBase,
} from '@material-ui/core';
import Toast from 'light-toast';
import XLSX from 'xlsx';
import CloseIcon from '@material-ui/icons/Close';
import { properties } from '../../../../Properties.js';
import supplierConfig from '../JSON/supplierconfig.json';
import CheckIcon from '@material-ui/icons/Check';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ConfigureCsv from './ConfigureCsv';
import SearchIcon from '@material-ui/icons/Search';

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
    marginTop: 42,
    width: '100%',
    height: '10%',
    textAlign: 'center',
  },
  mainscreen: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
    minHeight: '92%',
    maxHeight: '92%',
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

class SupplierConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      ischecked: '',
      searchResult: [],
      item: '',
      Desc: '',
      location: '',
      bar: '',
      vpn: '',
      checkedItems: [],
      options: [],
      detail: false,
      openConfigModel: true,
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
    this.setState({ searchResult: supplierConfig.results });
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
  openConfigModel = () => {
    this.setState((prevState) => ({
      openConfigModel: !prevState.openConfigModel,
    }));
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.ischecked);
    const { checkedItems, options } = this.state;

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
                      label='Supplier'
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
                      label='Supplier Name'
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
                      label='Status'
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
                      label='Stock Config'
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
                      label='Order Config'
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

        <div
          style={{
            padding: '1% 0% 0% 0%',
            fontSize: '20px',
            height: '50px',
          }}
        >
          {options.length > 0 ? <b>{options.length} Items</b> : null}
        </div>

        <div className={classes.tables}>
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
              {this.state.detail ? (
                <Button
                  variant='contained'
                  color='default'
                  className={classes.buttons2}
                  startIcon={<CloudDownloadIcon />}
                  onClick={this.openConfigModel}
                  style={{
                    border: 'none',
                    background: 'white',
                    padding: '5px 18px',
                    borderRadius: '5px',
                  }}
                >
                  CONFIGUE CSV
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
                    SUPPLIER ID
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    SUPPLIER NAME
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    STATUS
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    SALES CONFIGURED
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    STOCK CONFIGURED
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertd}
                  >
                    ORDER CONFIGURED
                  </TableCell>
                  <TableCell
                    padding='default'
                    sortDirection='asc'
                    className={classes.table_head_bordertdL}
                  >
                    INVOICES CONFIGURED
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.searchResult.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    aria-checked={options.indexOf(index) >= 0 ? true : false}
                    selected={options.indexOf(index) >= 0 ? true : false}
                  >
                    <TableCell className={classes.table_row_bordertd1}>
                      <Checkbox
                        key={index}
                        onChange={(event) => this.handleCheck(event, index)}
                        name='radio-button-demo'
                      />
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.supplierId}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.supplierName}
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      {row.status}
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: '5%' }}
                      className={classes.table_row_bordertd}
                    >
                      {row.salesConfigured == 'true' ? (
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
                    <TableCell
                      style={{ paddingLeft: '5%' }}
                      className={classes.table_row_bordertd}
                    >
                      {row.stockConfigured == 'true' ? (
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
                          <CloseIcon />
                        </Avatar>
                      )}
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: '5%' }}
                      className={classes.table_row_bordertd}
                    >
                      {row.orderConfigured == 'true' ? (
                        <Avatar
                          className={classes.small}
                          alt='Remy Sharp'
                          style={{ backgroundColor: '#00FF00' }}
                        >
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
                    <TableCell
                      style={{ paddingLeft: '5%' }}
                      className={classes.table_row_bordertdL}
                    >
                      {row.invoicesConfigured == 'true' ? (
                        <Avatar
                          className={classes.small}
                          alt='Remy Sharp'
                          style={{ backgroundColor: '#00FF00' }}
                        >
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Dialog
          fullWidth
          fullScreen={false}
          open={this.state.openConfigModel}
          maxWidth='lg'
          classes={{ paper: classes.dialogPaper }}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <ConfigureCsv handleClose={this.openConfigModel} />
        </Dialog>
      </Container>
    );
  }
}
SupplierConfig.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SupplierConfig);
