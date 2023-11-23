import { useState, FC } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import styles from "../../styles/teams.module.css";

import { getTeams } from "../../redux/actions/team-action";
import { connect } from "react-redux";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

enum League {
  "Premier League" = 39,
  "La Liga" = 140,
  "Bundesliga" = 78,
  "Serie A" = 135,
  "Ligue 1" = 61,
  "MLS" = 253,
}

interface Column {
  id: "name" | "code" | "country" | "founded";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number | number[]) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 50 },
  { id: "code", label: "Code", minWidth: 50 },
  {
    id: "country",
    label: "Country",
    minWidth: 50,
  },
  {
    id: "founded",
    label: "Founded",
    minWidth: 50,
  },
];

interface Teams {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: string;
}

interface TeamTableProps {
  getTeams: (league: string, limit: number, offset: number) => void;
  teams: Teams[];
}

const TeamTable: FC<TeamTableProps> = ({ getTeams, teams }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string | { value: unknown }>
  ) => {
    getTeams(event.target.value as string, rowsPerPage, page);
  };

  return (
    <Box display="table" width="100%">
      <FormControl fullWidth>
        <InputLabel>League</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="League"
          onChange={handleSelectChange}
        >
          {Object.keys(League)
            .filter((key) => !isNaN(Number(key)))
            .map((key) => (
              <MenuItem key={key} value={League[key as keyof typeof League]}>
                {League[key as keyof typeof League]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {teams.length === 0 ? (
        <></>
      ) : (
        <Paper
          className={styles["custom-table"]}
          sx={{
            width: "100%",
            height: "80%",
            overflow: "hidden",
            marginTop: 5,
          }}
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
                {teams
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((team) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={team.name}
                      >
                        {columns.map((column) => {
                          const value = team[column.id];
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
            count={teams.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
};

const mapStateToProps = (state: any) => ({
  teams: state.teams.teams,
});

export default connect(mapStateToProps, { getTeams })(TeamTable);
