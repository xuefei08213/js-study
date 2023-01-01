const firstName = "xuefeeney";
const job = "程序员";
const birthYear = 1990;
const year = 2037;

const xuefeeny =
  "我是" + firstName + ",一个" + (year - birthYear) + "年" + job + "!";
console.log(xuefeeny);

const xuefeeneyNew = `我是${firstName},一个${year - birthYear}年${job}!`;
console.log(xuefeeneyNew);

// 换行字符串
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);
