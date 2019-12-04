const START_VALUE = 356261;
const FINAL_VALUE = 846303;

const runner = () => {
  let count = 0;
  for (let i = START_VALUE; i <= FINAL_VALUE; i++) {
    let previousValue = null;    
    let match = true;
    const number = String(i);
    const repeatedValues = {};
    for (let j = 0; j < number.length; j++) {
      const algarism = Number(number[j]);
      if (previousValue) {
        if (previousValue > algarism) {
          match = false;
          break;
        } else if (previousValue === algarism) {
          if (repeatedValues[algarism]) {
            repeatedValues[algarism]++;  
          } else {
            repeatedValues[algarism] = 1;
          }
        }
      }      
      previousValue = algarism;      
    }
    if (match) {
      match = false;
      for (let algarism in repeatedValues) {
        if (repeatedValues[algarism] === 1) {
          match = true;
          break;
        }
      }      
    }
    if (match) {
      count++;
    }
  }
  return count;
}

console.log(runner());