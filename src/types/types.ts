export type Filter = "all" | "Bacteria" | "Fungi";
export type Order = "asc" | "desc";
export type MicrobeRole = "Beneficial" | "Neutral" | "Pathogenic";

export interface Microbe {
  id: number;
  name: string;
  type: "Bacteria" | "Fungi";
  abundance: number;
  role: MicrobeRole;
}
