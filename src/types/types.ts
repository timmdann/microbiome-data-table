export type Filter = "all" | "bacteria" | "fungi";
export type Order = "asc" | "desc";
export type MicrobeRole = "beneficial" | "neutral" | "pathogenic";
export type MicrobeType = "bacteria" | "fungi";

export interface Microbe {
  id: string;
  name: string;
  type: MicrobeType;
  abundance: number;
  role: MicrobeRole;
}
