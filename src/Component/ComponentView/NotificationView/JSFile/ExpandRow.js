import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Typography,
  TableCell,
  TableRow,
  Box,
  Avatar,
  Collapse,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
});

function ExpandRow(props) {
  const { classes } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell className={classes.table_row_bordertd1}>0001</TableCell>
        <TableCell className={classes.table_row_bordertd}>
          Hey, You Got New Message.
        </TableCell>
        <TableCell className={classes.table_row_bordertd}>
          12th May 2020
        </TableCell>
        <TableCell className={classes.table_row_bordertd}>
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
        <TableCell className={classes.table_row_bordertdL}>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box margin={0}>
                <Typography
                  variant='h6'
                  gutterBottom
                  component='div'
                  style={{ fontSize: '14px' }}
                >
                  Hey, You Got New Message. Hey, You Got New Message. Hey, You
                  Got New Message. Hey, You Got New Message.
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}
export default withStyles(styles)(ExpandRow);
