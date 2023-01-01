// 手动转换
// 将字符串转换为数字
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number('xuefeeney')); // NaN (Not a number)

console.log(typeof NaN); // number

// 数字转化为字符串
console.log(String(23), 23);

// 类型强制转换
console.log('我' + 23 + '岁'); // 23是数字，被强制转换为字符串,跟下面的语句一样
console.log('我' + '23' + '岁');
console.log('我' + String(23) + '岁');

// 字符串被强制转换为数字
console.log('23' - '10' - '3'); // 10

console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1; // 11
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // 95
console.log('10' - '4' - '3' - 2 + '5'); // 15
