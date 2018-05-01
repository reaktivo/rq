import saferEval from "safer-eval";

import createContext from "./createContext";

export default async str => saferEval(str, createContext());
