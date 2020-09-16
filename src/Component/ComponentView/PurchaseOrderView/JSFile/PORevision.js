import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Button,
  Typography,
  Toolbar,
  IconButton,
  Grid,
  Container,
  Checkbox,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const styles = (theme) => ({
  tables: {
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
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'flex-end',
    display: 'flex',
    height: '20px',
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
});

class POShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Container style={{ marginBottom: '1%' }}>
        <Toolbar
          disableGutters={true}
          className={classes.close}
          variant='regular'
        >
          <IconButton
            edge='start'
            color='inherit'
            onClick={this.props.handleClose}
            aria-label='close'
            style={{
              backgroundColor: 'red',
              width: '20px',
              height: '20px',
              marginTop: '1%',
            }}
          >
            <CloseIcon style={{ color: '#ffffff' }} />
          </IconButton>
        </Toolbar>
        <div style={{ width: '100%', display: 'flex' }}>
          <div
            style={{
              width: '45%',
              justifyContent: 'flex-start',
              marginRight: '5%',
            }}
          >
            <div className={classes.poDetail} style={{ marginTop: '-1%' }}>
              <Typography>
                <b>FINALIZED ORDER</b>
              </Typography>
              <div className={classes.fmaindiv}>
                <div className={classes.fchiddiv}>
                  <div>Total PO Qty</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total PO Cost</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total Tax</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total Amount</div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={classes.smallSummery}></div>
            <TableContainer
              component={Paper}
              style={{
                boxShadow: 'none',
                height: '320px',
                border: '1px solid red',
              }}
            >
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
                      Item Id
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Item Desc
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Barcode
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Qty
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Unit Cost
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertdL}
                    >
                      Total Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
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

          <div
            style={{
              width: '45%',
              justifyContent: 'flex-end',
              marginLeft: '5%',
            }}
          >
            <div className={classes.poDetail} style={{ marginTop: '-1%' }}>
              <Typography>
                <b>REVISION</b>
              </Typography>
              <div className={classes.fmaindiv}>
                <div className={classes.fchiddiv}>
                  <div>Total PO Qty</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total PO Cost</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total Tax</div>
                  <div></div>
                </div>
                <div className={classes.fchiddiv}>
                  <div>Total Amount</div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={classes.smallSummery}></div>
            <TableContainer
              component={Paper}
              style={{
                boxShadow: 'none',
                height: '320px',
                border: '1px solid red',
              }}
            >
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
                      Item Id
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Item Desc
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Barcode
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Qty
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertd}
                    >
                      Unit Cost
                    </TableCell>
                    <TableCell
                      padding='default'
                      sortDirection='asc'
                      className={classes.table_head_bordertdL}
                    >
                      Total Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
                  <TableRow hover role='checkbox'>
                    <TableCell className={classes.table_row_bordertd1}>
                      0001234
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      Stock
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      123597
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      100
                    </TableCell>
                    <TableCell className={classes.table_row_bordertd}>
                      30000
                    </TableCell>
                    <TableCell className={classes.table_row_bordertdL}>
                      500000
                    </TableCell>
                  </TableRow>
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
        </div>
      </Container>
    );
  }
}
POShipment.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POShipment);
