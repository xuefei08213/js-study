// let bill = 275;
// let bill = 40;
let bill = 430;
let tip = (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
let total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${total}`);
