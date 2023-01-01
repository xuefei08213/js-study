const now = 2037;

// Math Operator
const ageJohn = now - 1991;
const ageMary = now - 2018;
console.log(ageJohn,ageMary);

console.log(ageJohn * 2,ageMary /2 , 2 ** 3);
// 2 ** 3 表示2的三次方，即 2*2*2

// + 操作符可以用于拼接字符串
const firstName = '以码';
const lastName = '为梯';
console.log(firstName + lastName); // 输出为 以码为梯

// Assignment operator
// + 操作符也可以用于数学加法
let x =  10 + 5; // 15
 x += 10; // 表示x = x + 10 结果为25
 x *= 4; // 表示 x= x* 4 结果为100
 x++; // x = x + 1 结果为101
 x--; // x = x - 1 结果为100
console.log(x);

// Comparision operator 输出为boolean类型
// > < >= <= ==  !=
// 在实际开发中通过变量来存储结果
console.log(ageJohn > ageMary);
console.log(ageMary >= 18);

const isFullAge = ageMary >= 18;
console.log(now - 1991 > now - 2018) // JavaScript是先计算还是先进行比较？