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
import _pick from 'lodash/pick';

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const buildRows = (start, end) =>
    [...apiData].slice(start, end).map(data => createData(data));

  const getCsvData = () => {
    return apiData.map(user =>
      _pick(user, [
        'FACILITY_ID',
        'FACILITY_NAME',
        'IS_LANDFILL_OPEN',
        'DOES_LNDFIL_HAVE_GAS_CLCT',
        'ANNUAL_MODELED_CH4_GENERATION'
      ])
    );
  };

  const EnhancedTableToolbar = () => {
    return (
      <Grid container spacing={3} style={{ marginBottom: 5 }}>
        <Grid item xs={6}>
          <Typography variant="h6">Landfill Co2 Data</Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <StyledCSVLink data={getCsvData()}>
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

  const buildTable = page => {
    const start = page * 10;
    const end = page * 10 + 10;
    return buildRows(start, end).map(row => (
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
            <TableBody>{buildTable(page)}</TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={apiData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </>
    )
  );
}
