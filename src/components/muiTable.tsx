import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import MuiButton from "./muiButton";
import type { Filter, Order } from "../types/types";

const rows = [
  {
    id: 1,
    name: "Cutibacterium acnes",
    type: "Bacteria",
    abundance: 32,
    role: "Beneficial",
  },
  {
    id: 2,
    name: "Staphylococcus epidermidis",
    type: "Bacteria",
    abundance: 24,
    role: "Beneficial",
  },
  {
    id: 3,
    name: "Malassezia globosa",
    type: "Fungi",
    abundance: 18,
    role: "Neutral",
  },
  {
    id: 4,
    name: "Candida albicans",
    type: "Fungi",
    abundance: 6,
    role: "Pathogenic",
  },
];

export default function MicrobeTable() {
  const [order, setOrder] = useState<Order>("desc");
  const [filter, setFilter] = useState<Filter>("all");

  const handleSort = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filtered =
    filter === "all" ? rows : rows.filter((row) => row.type === filter);

  const sorted = [...filtered].sort((a, b) =>
    order === "asc" ? a.abundance - b.abundance : b.abundance - a.abundance,
  );

  return (
    <Paper sx={{ p: 2 }}>
      <MuiButton filter={filter} onFilterChange={setFilter} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>
                <TableSortLabel active direction={order} onClick={handleSort}>
                  Abundance
                </TableSortLabel>
              </TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.abundance}%</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
