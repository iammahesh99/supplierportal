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
    marginTop: theme.spacing(1),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px solid red',
    height: 380,
  },
  poDetail: {
    marginBottom: theme.spacing(6),
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
  sInfoBorder: {
    border: '1px solid red',
    padding: '2%',
  },
  sInsideBorder: {
    padding: '2%',
  },
});

class InSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Container style={{ marginBottom: '2%' }}>
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

        <div className={classes.poDetail} style={{ marginTop: '-1%' }}>
          <Grid container spacing={1}>
            <Grid item xs={4} spacing={3}>
              <b> ORDER SUMMARY </b>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <b>INVOICE SUMMARY </b>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <b>DISCREPANCIES</b>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4} spacing={3}>
              <div className={classes.sInfoBorder}>
                <div className={classes.sInsideBorder}>
                  <div>Total PO QTY</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total PO COST</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total TAX</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total</div>
                  <div></div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <div className={classes.sInfoBorder}>
                <div className={classes.sInsideBorder}>
                  <div>Total Invoice QTY</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total Invoice COST</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total TAX</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total</div>
                  <div></div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <div className={classes.sInfoBorder}>
                <div className={classes.sInsideBorder}>
                  <div>Quantity</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Cost</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total Amount</div>
                  <div></div>
                </div>
                <div className={classes.sInsideBorder}>
                  <div>Total</div>
                  <div></div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.tables}>
          <div
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'red',
              bottom: '-10px',
              padding: '1px',
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
                  padding: '0px 18px',
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
                  <TableCell className={classes.table_head_bordertd1}>
                    SELECT
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    PR#
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    ITEM ID
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    VPN
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    BARCODE
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    ITEM DESC
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    TOTAL QTY
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    RCVD QTY
                  </TableCell>
                  <TableCell className={classes.table_head_bordertd}>
                    SHORTAGE
                  </TableCell>
                  <TableCell className={classes.table_head_bordertdL}>
                    EXCESS{' '}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell className={classes.table_row_bordertd1}>
                    <Checkbox
                      checked={true}
                      // onChange={(event) => this.handleCheck(event, 1)}
                      name='radio-button-demo'
                    />
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    100637121
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    12314
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    124343543
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    CO-12342
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    1001-DUBAI
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    400
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    10
                  </TableCell>
                  <TableCell className={classes.table_row_bordertd}>
                    390
                  </TableCell>
                  <TableCell className={classes.table_row_bordertdL}>
                    40
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
      </Container>
    );
  }
}
InSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InSummary);
