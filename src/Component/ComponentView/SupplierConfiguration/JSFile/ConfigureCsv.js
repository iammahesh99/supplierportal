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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';

const styles = (theme) => ({
  large: {
    width: '50px',
    height: '50px',
    border: 'solid 1px ',
    borderColor: 'red',
    backgroundColor: 'white',
    margin: '10px 90px 10px 90px',
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
  sliderDiv: {},
  slickSlide: {
    padding: '0 8px',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
});

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    TOTAL_SOH: `TOTAL_SOH-${k}`,
    AVL_SOH: `AVL_SOH ${k}`,
    TOTAL_SOH: `TOTAL_SOH ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,

  ...(isDragging && {
    background: 'rgb(235,235,235)',
  }),
});

const DraggableComponent = (id, index) => (props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <TableRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          {...props}
        >
          {props.children}
        </TableRow>
      )}
    </Draggable>
  );
};

const DroppableComponent = (onDragEnd: (result, provided) => void) => (
  props
) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'1'} direction='vertical'>
        {(provided) => {
          return (
            <TableBody
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...props}
            >
              {props.children}
              {provided.placeholder}
            </TableBody>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

const arrayItem = [
  {
    id: 1,
    sku_id: 'PO_CONFIG',
    display_name: 'PO Config',
    image_path: require('../../../HomePage/Icons/PO.svg'),
  },
  {
    id: 2,
    sku_id: 'STOCK_CONFIG',
    display_name: 'STOCK Config',
    image_path: require('../../../HomePage/Icons/stock.svg'),
  },
  {
    id: 3,
    sku_id: 'SALES_CONFIG',
    display_name: 'SALES Config',
    image_path: require('../../../HomePage/Icons/sales.svg'),
  },
  {
    id: 4,
    sku_id: 'INVOICE_CONFIG',
    display_name: 'INVOICE Config',
    image_path: require('../../../HomePage/Icons/invoices.svg'),
  },
  {
    id: 5,
    sku_id: 'ASN_CONFIG',
    display_name: 'ASN Config',
    image_path: require('../../../HomePage/Icons/asn.svg'),
  },
  {
    id: 6,
    sku_id: 'COST_CONFIG',
    display_name: 'COST Config',
    image_path: require('../../../HomePage/Icons/costchange.svg'),
  },
];

class POShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'a',
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
      items: getItems(10),
      selectItem: 'PO',
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    console.log(
      `dragEnd ${result.source.index} to  ${result.destination.index}`
    );
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  updateView = (status) => {
    console.log(status, '====>>>status');
    switch (status) {
      case 'PO_CONFIG':
        this.setState({
          selectItem: 'PO',
        });
        break;
      case 'STOCK_CONFIG':
        this.setState({
          selectItem: 'STOCK',
        });
        break;
      case 'SALES_CONFIG':
        this.setState({
          selectItem: 'SALES',
        });
        break;
      case 'INVOICE_CONFIG':
        this.setState({
          selectItem: 'INVOICE',
        });
        break;
      case 'ASN_CONFIG':
        this.setState({
          m: 'ASN',
        });
        break;
      case 'COST_CONFIG':
        this.setState({
          selectItem: 'COST',
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const { settings, selectedValue, items, selectItem } = this.state;
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
          style={{
            border: `1px solid ${selectedValue === 'a' ? 'red' : '#cecece'}`,
            padding: '0.8%',
            margin: '1% 0%',
          }}
        >
          <Grid
            container
            item
            xs={12}
            spacing={0}
            alignItems='center'
            style={{ margin: '0.1% 0%' }}
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
          style={{
            border: `1px solid ${selectedValue === 'b' ? 'red' : '#cecece'}`,
            padding: '0.8%',
            margin: '1% 0%',
          }}
        >
          <Grid
            container
            item
            xs={12}
            spacing={1}
            alignItems='center'
            style={{ margin: '0.1% 0%' }}
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

        {selectedValue === 'a' ? (
          <>
            <Grid style={{ border: '1px solid red' }}>
              <div className={classes.smallSummery}>
                <p>{selectItem} CSV CONFIGURATION</p>
              </div>
              <TableContainer
                component={Paper}
                style={{ boxShadow: 'none', height: '250px' }}
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
                        COLUMN NAME
                      </TableCell>
                      <TableCell
                        padding='default'
                        sortDirection='asc'
                        className={classes.table_head_bordertd}
                      >
                        COLUMN DESCIPTION
                      </TableCell>
                      <TableCell
                        padding='default'
                        sortDirection='asc'
                        className={classes.table_head_bordertd}
                      >
                        ALTERNATE NAME
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
                  <TableBody component={DroppableComponent(this.onDragEnd)}>
                    {this.state.items.map((item, index) => (
                      <TableRow
                        component={DraggableComponent(item.id, index)}
                        key={item.id}
                      >
                        <TableCell
                          padding='default'
                          sortDirection='asc'
                          className={classes.table_row_bordertd1}
                        >
                          {item.TOTAL_SOH}
                        </TableCell>
                        <TableCell
                          padding='default'
                          sortDirection='asc'
                          className={classes.table_row_bordertd}
                        >
                          {item.AVL_SOH}
                        </TableCell>
                        <TableCell
                          padding='default'
                          sortDirection='asc'
                          className={classes.table_row_bordertd}
                        >
                          {' '}
                          <TextField
                            id='standard-basic'
                            defaultValue={item.TOTAL_SOH}
                          />
                        </TableCell>
                        <TableCell
                          padding='default'
                          sortDirection='asc'
                          className={classes.table_row_bordertdL}
                        >
                          <Checkbox
                            onChange={(event) => {}}
                            name='radio-button-demo'
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </>
        ) : null}

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
                {arrayItem.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={classes.avtarbox2}
                        onClick={() => this.updateView(item.sku_id)}
                      >
                        <Avatar className={classes.large}>
                          <img
                            src={item.image_path}
                            className={classes.icons}
                          />
                        </Avatar>
                        <b>{item.display_name}</b>
                      </div>
                    </div>
                  );
                })}
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
