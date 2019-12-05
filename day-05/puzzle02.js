const input = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1102, 31, 68, 225, 1001, 13, 87, 224, 1001, 224, -118, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 223, 224, 223, 1, 174, 110, 224, 1001, 224, -46, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 223, 224, 223, 1101, 13, 60, 224, 101, -73, 224, 224, 4, 224, 102, 8, 223, 223, 101, 6, 224, 224, 1, 224, 223, 223, 1101, 87, 72, 225, 101, 47, 84, 224, 101, -119, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 223, 224, 223, 1101, 76, 31, 225, 1102, 60, 43, 225, 1102, 45, 31, 225, 1102, 63, 9, 225, 2, 170, 122, 224, 1001, 224, -486, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 223, 224, 223, 1102, 29, 17, 224, 101, -493, 224, 224, 4, 224, 102, 8, 223, 223, 101, 1, 224, 224, 1, 223, 224, 223, 1102, 52, 54, 225, 1102, 27, 15, 225, 102, 26, 113, 224, 1001, 224, -1560, 224, 4, 224, 102, 8, 223, 223, 101, 7, 224, 224, 1, 223, 224, 223, 1002, 117, 81, 224, 101, -3645, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 6, 224, 224, 1, 223, 224, 223, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 329, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 101, 1, 223, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 359, 101, 1, 223, 223, 7, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 374, 101, 1, 223, 223, 1007, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 389, 101, 1, 223, 223, 8, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 404, 1001, 223, 1, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 419, 101, 1, 223, 223, 1108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 434, 1001, 223, 1, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 449, 101, 1, 223, 223, 107, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 464, 101, 1, 223, 223, 1108, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 479, 1001, 223, 1, 223, 7, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 494, 1001, 223, 1, 223, 1107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 524, 101, 1, 223, 223, 1008, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 539, 101, 1, 223, 223, 7, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 554, 101, 1, 223, 223, 108, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 569, 101, 1, 223, 223, 1008, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 584, 101, 1, 223, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 599, 101, 1, 223, 223, 1007, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 614, 101, 1, 223, 223, 1107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 629, 101, 1, 223, 223, 107, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 644, 1001, 223, 1, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 659, 101, 1, 223, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];
const HALT_PROGRAM_CODE = 99;
const IMMEDIATE_PARAM_MODE = 1;
const POSITION_PARAM_MODE = 0;
const PROGRAM_INPUT = 5;
let PROGRAM_OUTPUT = '';

const getParameterValue = (currentPosition, parameterPosition, outputParameter) => {
  const instruction = String(input[currentPosition]);
  const parameterMode = Number(instruction[instruction.length - 2 - parameterPosition]);
  const parameter = input[currentPosition + parameterPosition];
  if (parameterMode || outputParameter) {
    return parameter;
  } else {
    return input[parameter];
  }
};

const addition = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  const value02 = getParameterValue(currentPosition, 2);
  const output = getParameterValue(currentPosition, 3, true);
  input[output] = value01 + value02;
  return currentPosition + 4;
};

const multiply = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  const value02 = getParameterValue(currentPosition, 2);
  const output = getParameterValue(currentPosition, 3, true);
  input[output] = value01 * value02;
  return currentPosition + 4;
};

const doOutput = currentPosition => {
  PROGRAM_OUTPUT += getParameterValue(currentPosition, 1);
  return currentPosition + 2;
};

const saveParameter = currentPosition => {
  const value = getParameterValue(currentPosition, 1, true);
  input[value] = PROGRAM_INPUT;
  return currentPosition + 2;
};

const jumpIfTrue = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  if (value01) {
    return getParameterValue(currentPosition, 2);
  }
  return currentPosition + 3;
}

const jumpIfFalse = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  if (!value01) {
    return getParameterValue(currentPosition, 2);
  }
  return currentPosition + 3;
}

const lessThan = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  const value02 = getParameterValue(currentPosition, 2);
  const output = getParameterValue(currentPosition, 3, true);
  input[output] = value01 < value02 ? 1 : 0;
  return currentPosition + 4;
}

const equals = currentPosition => {
  const value01 = getParameterValue(currentPosition, 1);
  const value02 = getParameterValue(currentPosition, 2);
  const output = getParameterValue(currentPosition, 3, true);
  input[output] = value01 === value02 ? 1 : 0;
  return currentPosition + 4;
}

const haltProgram = () => {
  console.log(PROGRAM_OUTPUT);
};

const operations = {
  01: addition,
  02: multiply,
  03: saveParameter,
  04: doOutput,
  05: jumpIfTrue,
  06: jumpIfFalse,
  07: lessThan,
  08: equals,
  99: haltProgram
};

const getOpCode = instruction => {
  if (instruction.length >= 2) {
    return instruction.substring(instruction.length - 2);
  }
  return instruction;
};

const runner = () => {
  let opcode = 0;
  let currentPosition = 0;
  while (opcode != HALT_PROGRAM_CODE) {
    const instruction = String(input[currentPosition]);
    opcode = Number(getOpCode(instruction));
    currentPosition = operations[opcode](currentPosition);
  }
};

runner();