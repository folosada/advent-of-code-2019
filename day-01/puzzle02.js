const fs = require('fs');
const ENCODING = {encoding: 'utf8'};

const fuelRequired = (mass) => {
  let result = 0;
  if (mass <= 6) {
    result = 0;
  } else {
    result = Math.floor(mass / 3) - 2;
    result += fuelRequired(result);    
  }
  return result;
}

const readFileAndSum = file => {
  const fileContent = fs.readFileSync(file, ENCODING);
  const values = fileContent.split('\n');
  let accumulator = 0;
  values.forEach(value => {    
    value = Number(value.trim());
    accumulator += fuelRequired(value);
  });
  return accumulator;
}

console.log(readFileAndSum(__dirname + '/puzzle02.input'));