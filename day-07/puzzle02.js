const ORIGINAL_INPUT = [3,8,1001,8,10,8,105,1,0,0,21,46,67,76,97,118,199,280,361,442,99999,3,9,1002,9,3,9,101,4,9,9,102,3,9,9,1001,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,101,5,9,9,1002,9,2,9,101,2,9,9,4,9,99,3,9,101,4,9,9,4,9,99,3,9,1001,9,4,9,102,2,9,9,1001,9,4,9,1002,9,5,9,4,9,99,3,9,102,3,9,9,1001,9,2,9,1002,9,3,9,1001,9,3,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,99];
let AMPLIFIERS = [[...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT]];
let AMPLIFIERS_INSTRUCTION_POINTERS = [0, 0, 0, 0, 0];
const HALT_PROGRAM_CODE = 99;
const IMMEDIATE_PARAM_MODE = 1;
const POSITION_PARAM_MODE = 0;
const START_COMBINATION = [5, 6, 7, 8, 9];
const OUTPUTS = [];
let PARAM_OUTPUT = [[], [], [], [], []];
let input = [];
let programOutput = '';
let firstInput = 0;
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

const doOutput = (currentPosition, amplifier) => {
  programOutput = `${programOutput}${getParameterValue(currentPosition, 1)}`;
  PARAM_OUTPUT[amplifier].push(programOutput);
  return currentPosition + 2;
};

const saveParameter = (currentPosition, amplifier) => {
  let paramAmplifier = 0;
  if (amplifier > 0) {
    paramAmplifier = amplifier - 1;
  } else {
    paramAmplifier = 4;
  }
  const position = getParameterValue(currentPosition, 1, true);
  let value = 0;
  if (executedFirstInput) {
    value = Number(PARAM_OUTPUT[paramAmplifier][0]) || 0;
    PARAM_OUTPUT[paramAmplifier].splice(0, 1);
  } else {
    value = firstInput;
  }
  input[position] = value;  
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
  return false;
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

const generateCombination = inputArray => {
  let combinations = [];
  for (let i = 0; i < inputArray.length; i++) {
    let rest = generateCombination(inputArray.slice(0, i).concat(inputArray.slice(i+1)));
    if (!rest.length) {
      combinations.push([inputArray[i]]);
    } else {
      for (let j = 0; j < rest.length; j++) {
        combinations.push([inputArray[i]].concat(rest[j]));  
      }
    }
  }
  return combinations;
}

const runIntcode = amplifier => {
  let halted = false;
  while ((!programOutput || !executedFirstInput) && !halted) {
    const instructionPointer = AMPLIFIERS_INSTRUCTION_POINTERS[amplifier];
    const instruction = String(input[instructionPointer]);
    opcode = Number(getOpCode(instruction));
    if (opcode !== HALT_PROGRAM_CODE) {
      AMPLIFIERS_INSTRUCTION_POINTERS[amplifier] = operations[opcode](instructionPointer, amplifier);
      halted = false;
    } else {
      halted = true;
    }
  }
  return !halted;
}

const runner = combinations => {
  for (let combination of combinations) {
    AMPLIFIERS = [[...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT], [...ORIGINAL_INPUT]];
    AMPLIFIERS_INSTRUCTION_POINTERS = [0, 0, 0, 0, 0];
    PARAM_OUTPUT = [[], [], [], [], []];
    let countInput = 0;
    let conitnueProgram = true;
    while (conitnueProgram) {
      for (let i = 0; i < combination.length; i++) {
        input = AMPLIFIERS[i];         
        executedFirstInput = !(countInput < 5);            
        firstInput = combination[i];
        secondInput = Number(programOutput) || 0;
        programOutput = '';           
      
        conitnueProgram = runIntcode(i);
        if (!conitnueProgram && i === 4) {
          OUTPUTS.push(PARAM_OUTPUT[i][0]);
          break;
        }
        countInput++;
      }
    }
  }
};

runner(generateCombination(START_COMBINATION));
OUTPUTS.sort((a, b) => b - a);
console.log(OUTPUTS[0]);