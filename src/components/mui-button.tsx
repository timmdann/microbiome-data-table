import { Button, ButtonGroup } from "@mui/material";
import type { Filter } from "../types/types";

type FilterButtonProps = {
  filter: Filter;
  onFilterChange: (value: Filter) => void;
};

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Bacteria", value: "bacteria" },
  { label: "Fungi",    value: "fungi"    },
];

const activeSx = {
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  "&:hover": { backgroundColor: "var(--color-dark)" },
};

const inactiveSx = {
  color: "var(--color-mid)",
  "&:hover": {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
  },
};

export default function FilterButton({
  filter,
  onFilterChange,
}: FilterButtonProps) {
  return (
    <ButtonGroup
      variant="text"
      size="small"
      sx={{
        flexShrink: 0,
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "var(--color-mid)",
        },
      }}
      aria-label="Filter microbes by type"
    >
      {FILTERS.map(({ label, value }) => (
        <Button
          key={value}
          onClick={() => onFilterChange(value)}
          sx={filter === value ? activeSx : inactiveSx}
          aria-pressed={filter === value}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
