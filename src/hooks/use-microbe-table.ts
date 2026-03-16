import { useState, useMemo } from "react";
import { microbes } from "../data/microbes";
import type { Filter, Order } from "../types/types";

export function useMicrobeTable() {
  const [order, setOrder] = useState<Order>("desc");
  const [filter, setFilter] = useState<Filter>("all");

  const toggleOrder = () => setOrder((prev) => (prev === "asc" ? "desc" : "asc"));

  const rows = useMemo(() => {
    const filtered = filter === "all" ? microbes : microbes.filter((m) => m.type === filter);
    return [...filtered].sort((a, b) =>
      order === "asc" ? a.abundance - b.abundance : b.abundance - a.abundance,
    );
  }, [filter, order]);

  return { rows, order, filter, toggleOrder, setFilter };
}
