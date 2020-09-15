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
  Radio,
  Avatar,
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import Slider from 'react-slick';

const styles = (theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: 'solid 1px ',
    borderColor: 'red',
    backgroundColor: 'white',
    margin: '10px 30px 10px 30px',
  },
  removeFlex: {
    flexBasis: 'unset',
    padding: '0% 5% 0% 5%',
  },
  avtarbox2: {
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '8px',
    width: 'auto !important',
  },
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

class POShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'a',
      settings: {
        initialSlide: 2,
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

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { settings, selectedValue } = this.state;
    return (
      <Container>
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

        <div
          style={{ border: '1px solid red', padding: '1%', margin: '1% 0%' }}
        >
          <Grid
            container
            item
            xs={12}
            spacing={0}
            alignItems='center'
            style={{ margin: '0.5% 0%' }}
          >
            <Grid
              item
              xs={2}
              spacing={0}
              className={classes.paper}
              style={{ textAlign: 'center' }}
            >
              <Radio
                checked={selectedValue === 'a'}
                name='radio-button-demo'
                onChange={this.handleChange}
                value='a'
              />
            </Grid>
            <Grid item xs={3} spacing={0} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='FTP Path'
                type='text'
                disabled={selectedValue !== 'a'}
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
                  width: 250,
                  borderColor: 'Red',
                }}
                onBlur={this.itemChange}
              />
            </Grid>
            <Grid item xs={3} spacing={0} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='Username'
                type='text'
                disabled={selectedValue !== 'a'}
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
                style={{ width: 250, borderColor: 'Red' }}
                onBlur={this.descChange}
              />
            </Grid>
            <Grid item xs={3} spacing={0} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='Password'
                type='text'
                disabled={selectedValue !== 'a'}
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
                style={{ width: 250, borderColor: 'Red' }}
                onBlur={this.locationChange}
              />
            </Grid>
          </Grid>
        </div>

        <div
          style={{ border: '1px solid red', padding: '1%', margin: '1% 0%' }}
        >
          <Grid
            container
            item
            xs={12}
            spacing={1}
            alignItems='center'
            style={{ margin: '0.5% 0%' }}
          >
            <Grid
              item
              xs={2}
              spacing={0}
              className={classes.paper}
              style={{ textAlign: 'center' }}
            >
              <Radio
                checked={selectedValue === 'b'}
                name='radio-button-demo'
                onChange={this.handleChange}
                value='b'
              />
            </Grid>
            <Grid item xs={3} spacing={3} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='WebService URL'
                type='text'
                disabled={selectedValue !== 'b'}
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
                  width: 250,
                  borderColor: 'Red',
                }}
                onBlur={this.itemChange}
              />
            </Grid>
            <Grid item xs={3} spacing={3} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='Username'
                type='text'
                disabled={selectedValue !== 'b'}
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
                style={{ width: 250, borderColor: 'Red' }}
                onBlur={this.descChange}
              />
            </Grid>
            <Grid item xs={3} spacing={3} className={classes.paper}>
              <TextField
                id='outlined-number'
                label='Password'
                type='text'
                disabled={selectedValue !== 'b'}
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
                style={{ width: 250, borderColor: 'Red' }}
                onBlur={this.locationChange}
              />
            </Grid>
          </Grid>
        </div>

        <Grid style={{ border: '1px solid red' }}>
          <div className={classes.smallSummery}>
            <p>CSV CONFIGURATION</p>
          </div>
          <TableContainer
            component={Paper}
            style={{ boxShadow: 'none', height: '250px' }}
          >
            <Table stickyHeader aria-label='sticky table' size='medium'>
              <TableHead>
                <TableRow>
                  <TableCell style={{ padding: '8px' }}>Column Name</TableCell>
                  <TableCell style={{ padding: '8px' }}>
                    Column Description
                  </TableCell>
                  <TableCell style={{ padding: '8px' }}>
                    Alternate Name
                  </TableCell>
                  <TableCell style={{ padding: '8px' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell style={{ padding: '8px' }}>TOTAL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>AVL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>TOTAL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>
                    <Checkbox
                      onChange={(event) => {}}
                      name='radio-button-demo'
                    />
                  </TableCell>
                </TableRow>
                <TableRow hover role='checkbox'>
                  <TableCell style={{ padding: '8px' }}>TOTAL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>AVL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>TOTAL_SOH</TableCell>
                  <TableCell style={{ padding: '8px' }}>
                    <Checkbox
                      onChange={(event) => {}}
                      name='radio-button-demo'
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* below Slider Code */}
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ marginTop: '2%' }}
        >
          <Grid item xs={4}>
            <div className={classes.sliderDiv}>
              <Slider {...settings}>
                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>PO Config</b>
                </div>
                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Stock Config</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Sales Config</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Inv Config</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>

                <div className={classes.avtarbox2}>
                  <Avatar alt='Remy Sharp' className={classes.large}>
                    <img
                      src={require('../../../HomePage/Icons/PO.svg')}
                      className={classes.icons}
                      onClick={(event) => {}}
                    />
                  </Avatar>
                  <b>Purchase Orders</b>
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
POShipment.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(POShipment);
