import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { connect } from "react-redux";
import { getLeagues } from "../../redux/actions/league-action";

import styles from "../../styles/table.module.css";

interface Column {
  id: "name" | "type" | "country" | "seasons";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 50 },
  { id: "type", label: "Type", minWidth: 50 },
  {
    id: "country",
    label: "Country",
    minWidth: 50,
    align: "right",
  },
  {
    id: "seasons",
    label: "Seasons",
    minWidth: 50,
    align: "right",
    format: (value: number | number[]) =>
      Array.isArray(value) ? value.join(", ") : value.toFixed(2),
  },
];

interface Data {
  name: string;
  type: string;
  country: string;
  seasons: number | number[];
}

function createData(
  name: string,
  type: string,
  country: string,
  seasons: number | number[]
): Data {
  return { name, type, country, seasons };
}

const rows = [
  createData("Premiers League", "League", "England", [2020, 2021]),
  createData("La Liga", "League", "Spain", [2020, 2021]),
  createData("Bundesliga", "League", "Germany", [2020, 2021]),
  createData("Serie A", "League", "Italy", [2020, 2021]),
  createData("Ligue 1", "League", "France", [2020, 2021]),
  createData("Champions League", "Cup", "Europe", [2020, 2021]),
  createData("Europa League", "Cup", "Europe", [2020, 2021]),
  createData("FA Cup", "Cup", "England", [2020, 2021]),
];

const LeagueTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className={styles["custom-table"]}
      sx={{ width: "80%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    teams: state.teams,
  };
};

export default connect(mapStateToProps, { getLeagues })(LeagueTable);
