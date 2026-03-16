import type { CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import FilterButton from "./mui-button";
import type { MicrobeRole } from "../types/types";
import { useMicrobeTable } from "../hooks/use-microbe-table";
import styles from "./mui-table.module.css";

const roleStyles: Record<MicrobeRole, CSSProperties> = {
  Beneficial: { backgroundColor: "var(--color-mid)",            color: "var(--color-dark)"           },
  Neutral:    { backgroundColor: "var(--color-light)",           color: "var(--color-primary)"        },
  Pathogenic: { backgroundColor: "var(--color-pathogenic-bg)",   color: "var(--color-pathogenic-text)" },
};

const HEADER_CELL_SX: SxProps<Theme> = {
  fontWeight: 600,
  color: "var(--color-dark)",
  backgroundColor: "var(--color-light)",
  borderBottom: "1px solid var(--color-mid)",
};

const ROW_SX: SxProps<Theme> = {
  "&:hover": { backgroundColor: "var(--color-light)" },
  transition: "background 0.15s",
  "& td": { borderBottom: "1px solid var(--color-mid)" },
};

const SORT_LABEL_SX: SxProps<Theme> = {
  color: "var(--color-dark) !important",
  "& .MuiTableSortLabel-icon": { color: "var(--color-primary) !important" },
};

export default function MicrobeTable() {
  const { rows, order, filter, toggleOrder, setFilter } = useMicrobeTable();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <p className={styles.title}>Microbiome Analysis</p>
          <p className={styles.subtitle}>Skin microorganism data</p>
        </div>

        <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>

          <div className={styles.header}>
            <FilterButton filter={filter} onFilterChange={setFilter} />
          </div>

          <TableContainer>
            <Table aria-label="Microbiome data table">
              <TableHead>
                <TableRow>
                  <TableCell sx={HEADER_CELL_SX}>Name</TableCell>
                  <TableCell sx={HEADER_CELL_SX}>Type</TableCell>
                  <TableCell sx={HEADER_CELL_SX}>
                    <TableSortLabel
                      active
                      direction={order}
                      onClick={toggleOrder}
                      sx={SORT_LABEL_SX}
                    >
                      Abundance
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={HEADER_CELL_SX}>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ color: "var(--color-primary)", py: 4 }}>
                      No microbes found for this filter.
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.map((row) => (
                    <TableRow key={row.id} sx={ROW_SX}>
                      <TableCell sx={{ fontWeight: 500, color: "var(--color-dark)" }}>
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ color: "var(--color-primary)" }}>{row.type}</TableCell>
                      <TableCell sx={{ color: "var(--color-primary)" }}>{row.abundance}%</TableCell>
                      <TableCell>
                        <span className={styles.badge} style={roleStyles[row.role]}>
                          {row.role}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

        </Paper>
      </div>
    </div>
  );
}
