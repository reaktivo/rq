import execute from "./execute";
import readInput from "./readInput";
import transform from "./transform";
import writeOutput from "./writeOutput";
import asyncFlow from "./asyncFlow";

export default (input = readInput()) => asyncFlow(execute, writeOutput)(input);
