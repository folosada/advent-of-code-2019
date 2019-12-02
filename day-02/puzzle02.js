const HALT_PROGRAM = 99;
const OPCODE_ADDITION = 1;
const OPCODE_MULTIPLY = 2;

const RESULT_EXPECTED = 19690720;

const INPUT_VALUES = [
  1, 0, 0, 3,
  1, 1, 2, 3,
  1, 3, 4, 3,
  1, 5, 0, 3,
  2, 6, 1, 19,
  2, 19, 9, 23, 1,
  23, 5, 27, 2,
  6, 27, 31, 1, 31, 5,
  35, 1, 35, 5,
  39, 2, 39, 6,
  43, 2, 43, 10,
  47, 1, 47, 6,
  51, 1, 51, 6,
  55, 2, 55, 6,
  59, 1, 10, 59,
  63, 1, 5, 63,
  67, 2, 10, 67,
  71, 1, 6, 71,
  75, 1, 5, 75,
  79, 1, 10, 79,
  83, 2, 83, 10,
  87, 1, 87, 9,
  91, 1, 91, 10,
  95, 2, 6, 95,
  99, 1, 5, 99,
  103, 1, 103, 13,
  107, 1, 107, 10,
  111, 2, 9, 111,
  115, 1, 115, 6,
  119, 2, 13, 119,
  123, 1, 123, 6,
  127, 1, 5, 127,
  131, 2, 6, 131,
  135, 2, 6, 135,
  139, 1, 139, 5,
  143, 1, 143, 10,
  147, 1, 147, 2,
  151, 1, 151, 13,
  0, 99, 2, 0, 14,
  0];

const runOperation = (values, opcode, positionToRead) => {
  const position01 = values[positionToRead + 1];
  const position02 = values[positionToRead + 2];
  const resultPosition = values[positionToRead + 3];
  const value01 = values[position01];
  const value02 = values[position02];
  if (opcode === OPCODE_ADDITION) {
    values[resultPosition] = value01 + value02;
  } else {
    values[resultPosition] = value01 * value02;
  }
  return values;
}

const runIntcode = (values, positionToRead) => {
  value = values[positionToRead];
  if (value === HALT_PROGRAM) {
    return values;
  }
  values = runOperation(values, value, positionToRead);
  return runIntcode(values, positionToRead + 4);
}

const inputValues = (noun, verb) => {
  const inputValues = Object.assign({}, INPUT_VALUES);
  inputValues[1] = noun;
  inputValues[2] = verb;
  return inputValues;
}

let result = 0;
let noun = 0;
let verb = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    result = runIntcode(inputValues(i, j), 0)[0];
    console.log(`noun=${i}, verb=${j}`);
    if (result === RESULT_EXPECTED) {
      console.log(100 * i + j);
      break;
    }
  }
  if (result === RESULT_EXPECTED) {
    break;
  }
}