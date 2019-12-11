const originalInput = [3,8,1001,8,10,8,105,1,0,0,21,46,67,76,97,118,199,280,361,442,99999,3,9,1002,9,3,9,101,4,9,9,102,3,9,9,1001,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,101,5,9,9,1002,9,2,9,101,2,9,9,4,9,99,3,9,101,4,9,9,4,9,99,3,9,1001,9,4,9,102,2,9,9,1001,9,4,9,1002,9,5,9,4,9,99,3,9,102,3,9,9,1001,9,2,9,1002,9,3,9,1001,9,3,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,99];
let input = [];
const HALT_PROGRAM_CODE = 99;
const IMMEDIATE_PARAM_MODE = 1;
const POSITION_PARAM_MODE = 0;
let firstInput = 0;
let PROGRAM_OUTPUT = '';
let executedFirstInput = false;
let secondInput = 0;

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
  input[value] = !executedFirstInput ? firstInput : secondInput; 
  executedFirstInput = true;
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
  return PROGRAM_OUTPUT;
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

const runner = inputList => {
  PROGRAM_OUTPUT = '';
  for (let i = 0; i < inputList.length; i++) {
    input = Object.assign({}, originalInput);
    executedFirstInput = false;
    secondInput = Number(PROGRAM_OUTPUT) || 0;    
    firstInput = inputList[i];
    PROGRAM_OUTPUT = '';
    let opcode = 0;
    let currentPosition = 0;
    while (opcode != HALT_PROGRAM_CODE) {
      const instruction = String(input[currentPosition]);
      opcode = Number(getOpCode(instruction));
      currentPosition = operations[opcode](currentPosition);
    }
  }
};

const changeNumber = (combination, numberOfDigits, index) => {  
  level = level+1;
  combination[index] = level;

  if (level == (numberOfDigits-1)) {
    runner(combination);
    outputs.push(PROGRAM_OUTPUT);    
  } else {
    for (let i = 0; i < numberOfDigits; i++) {
      if (combination[i] == 0) {
        changeNumber(combination, numberOfDigits, i);
      }
    }
  }
  level = level-1;
  combination[index] = 0;
}


const generateCombination = () => {
  const numberOfDigits = 5;
  let combination = new Array(numberOfDigits);
  for (let i = 0; i < numberOfDigits; i++) {
    combination[i] = 0;
  }
  changeNumber(combination, numberOfDigits, 0);
}

let level = -1;
const outputs = [];

generateCombination();

outputs.sort((a,b) => b - a);
console.log(outputs[0]);