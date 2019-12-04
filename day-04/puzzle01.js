const START_VALUE = 356261;
const FINAL_VALUE = 846303;

const runner = () => {
  let count = 0;
  for (let i = START_VALUE; i <= FINAL_VALUE; i++) {
    let previousValue = null;    
    let match = false;
    const number = String(i);
    for (let j = 0; j < number.length; j++) {
      const algarism = Number(number[j]);
      if (previousValue) {
        if (previousValue > algarism) {
          match = false;
          break;
        } else if (previousValue === algarism && !match) {
          match = true;
        }
      }      
      previousValue = algarism;      
    }
    if (match) {
      count++;
    }
  }
  return count;
}

console.log(runner());