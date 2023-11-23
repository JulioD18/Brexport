import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";

import { connect } from "react-redux";
import { getLeagues } from "../../redux/actions/league-action";

import styles from "../../styles/table.module.css";

interface Column {
  id: "name" | "type" | "country" | "seasons";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number | number[]) => string;
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

interface League {
  id: number;
  name: string;
  type: string;
  country: string;
  seasons: number[];
  logo: string;
  createdAt: string;
  updatedAt: string;
}

interface LeagueTableProps {
  getLeagues: (limit: number, offset: number) => void;
  leagues: League[];
}

const LeagueTable: React.FC<LeagueTableProps> = ({ getLeagues, leagues }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  useEffect(() => {
    (async () => {
      await getLeagues(rowsPerPage, page);
      setLoading(false);
      console.log(leagues);
    })();
  }, []);

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
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper
          className={styles["custom-table"]}
          sx={{ width: "80%", height: "80%", overflow: "hidden", marginTop: 0 }}
        >
          <TableContainer sx={{ maxHeight: 500 }}>
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
                {leagues
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((league) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={league.name}
                      >
                        {columns.map((column) => {
                          const value = league[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format &&
                              (typeof value === "number" ||
                                Array.isArray(value))
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
            count={leagues.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    leagues: state.leagues.leagues,
  };
};

export default connect(mapStateToProps, { getLeagues })(LeagueTable);
