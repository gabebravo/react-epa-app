import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  row: {
    width: '5rem'
  }
});

export default function GHGTable({ apiData }) {
  const classes = useStyles();

  const createData = ({
    FACILITY_ID,
    FACILITY_NAME,
    IS_LANDFILL_OPEN,
    DOES_LNDFIL_HAVE_GAS_CLCT,
    ANNUAL_MODELED_CH4_GENERATION
  }) => ({
    id: FACILITY_ID,
    name: FACILITY_NAME,
    isOpen: IS_LANDFILL_OPEN,
    hasGasClct: DOES_LNDFIL_HAVE_GAS_CLCT,
    ch4Gen: ANNUAL_MODELED_CH4_GENERATION
  });

  const buildRows = () => apiData.map(data => createData(data));

  const buildTable = rows => {
    return rows.map(row => (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left" className={classes.row}>
          {row.isOpen}
        </TableCell>
        <TableCell align="left" className={classes.row}>
          {row.hasGasClct}
        </TableCell>
        <TableCell align="left" className={classes.row}>
          {row.ch4Gen}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    apiData && (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Facility ID</TableCell>
              <TableCell align="left">Facility Name</TableCell>
              <TableCell align="left">Is Open</TableCell>
              <TableCell align="left">Has Gas CLCT</TableCell>
              <TableCell align="left">CH4 Generation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{buildTable(buildRows())}</TableBody>
        </Table>
      </TableContainer>
    )
  );
}
