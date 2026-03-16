import type { Microbe } from "../types/types";

export const microbes: Microbe[] = [
  { id: "1", name: "Cutibacterium acnes",       type: "bacteria", abundance: 32, role: "beneficial" },
  { id: "2", name: "Staphylococcus epidermidis", type: "bacteria", abundance: 24, role: "beneficial" },
  { id: "3", name: "Malassezia globosa",         type: "fungi",    abundance: 18, role: "neutral"    },
  { id: "4", name: "Candida albicans",           type: "fungi",    abundance: 6,  role: "pathogenic" },
];
