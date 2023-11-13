import { useState, FC } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";

import { getTeams } from "../../redux/actions/team-action";
import { connect } from "react-redux";

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
  country: string;
  founded: string;
  venue: string;
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

  return <></>;
};
