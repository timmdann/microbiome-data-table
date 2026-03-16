import { Button, ButtonGroup } from "@mui/material";
import type { Filter } from "../types/types";

type MuiButtonProps = {
  filter: Filter;
  onFilterChange: (value: Filter) => void;
};

function MuiButton({ filter, onFilterChange }: MuiButtonProps) {
  return (
    <ButtonGroup sx={{ mb: 2 }}>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => onFilterChange("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "Bacteria" ? "contained" : "outlined"}
        onClick={() => onFilterChange("Bacteria")}
      >
        Bacteria
      </Button>
      <Button
        variant={filter === "Fungi" ? "contained" : "outlined"}
        onClick={() => onFilterChange("Fungi")}
      >
        Fungi
      </Button>
    </ButtonGroup>
  );
}

export default MuiButton;
