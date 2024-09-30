let bill = 300;

const tip = bill * (15 / 100);
const tip2 = bill * (20 / 100);

let calTips = bill >= 50 && bill <= 300
  ? tip : tip2;
console.log("tip is " +calTips);
let total = bill + calTips;
console.log("The bill was " + bill + ", the tip was " + calTips +", and the total value = " + total);