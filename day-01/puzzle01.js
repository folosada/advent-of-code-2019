const fs = require('fs');
const ENCODING = {encoding: 'utf8'};

const readFileAndSum = file => {
  const fileContent = fs.readFileSync(file, ENCODING);
  let values = fileContent.split('\n');
  values = values.map(mass => Math.floor(Number(mass.trim()) / 3) - 2);
  return values.reduce((accumulator, value) => accumulator + value);
}

console.log(readFileAndSum(__dirname + '/puzzle01.input'));