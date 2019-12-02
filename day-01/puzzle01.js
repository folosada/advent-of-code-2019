const fs = require('fs');
const ENCODING = {encoding: 'utf8'};

const fuelRequired = mass => {
  const result = Math.floor(mass / 3) - 2;
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

console.log(readFileAndSum(__dirname + '/puzzle01.input'));