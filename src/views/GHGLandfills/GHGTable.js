import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from '@material-ui/core';
import { CSVLink } from 'react-csv';
import styled from 'styled-components';

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
  ['Raed', 'Labes', 'rl@smthing.co.com'],
  ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
];

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tr: {
    background: '#000'
  }
});

const StyledTableCell = styled(TableCell)({
  backgroundColor: 'black',
  color: 'white'
});

const StyledCSVLink = styled(CSVLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

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

  const EnhancedTableToolbar = props => {
    return (
      <Grid container spacing={3} style={{ marginBottom: 5 }}>
        <Grid item xs={6}>
          <Typography variant="h6">Landfill Co2 Data</Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <StyledCSVLink data={csvData}>
            <Button
              style={{ color: '#fff' }}
              variant="contained"
              color="secondary"
              component="span"
              aria-label="filter list"
            >
              Export Table
            </Button>
          </StyledCSVLink>
        </Grid>
      </Grid>
    );
  };

  const buildTable = rows => {
    return rows.map(row => (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.isOpen}</TableCell>
        <TableCell align="left">{row.hasGasClct}</TableCell>
        <TableCell align="left">{row.ch4Gen}</TableCell>
      </TableRow>
    ));
  };

  return (
    apiData && (
      <>
        <EnhancedTableToolbar />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Facility Name</StyledTableCell>
                <StyledTableCell align="left">Is Open</StyledTableCell>
                <StyledTableCell align="left">Has Gas CLCT</StyledTableCell>
                <StyledTableCell align="left">CH4 Generation</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{buildTable(buildRows())}</TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={30}
            rowsPerPage={15}
            page={0}
            onChangePage={() => console.log('clicked')}
            onChangeRowsPerPage={() => console.log('clicked')}
          />
        </TableContainer>
      </>
    )
  );
}
