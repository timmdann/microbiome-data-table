import type { Microbe } from "../types/types";

export const microbes: Microbe[] = [
  { id: 1, name: "Cutibacterium acnes",       type: "Bacteria", abundance: 32, role: "Beneficial" },
  { id: 2, name: "Staphylococcus epidermidis", type: "Bacteria", abundance: 24, role: "Beneficial" },
  { id: 3, name: "Malassezia globosa",         type: "Fungi",    abundance: 18, role: "Neutral"    },
  { id: 4, name: "Candida albicans",           type: "Fungi",    abundance: 6,  role: "Pathogenic" },
];
