// == 会进行类型转换
// ===不会进行类型转换
// 建议使用===，如果要进行类型转换可以使用手动类型转换

// const age = 18;
const age = '18';
if (age === 18) {
  console.log('你已经成年了');
}

if (age == 18) {
  console.log('你已经成年了');
}

// const favourite = prompt('你最喜欢的数字是多少？');
const favourite = Number(prompt('你最喜欢的数字是多少？'));
console.log(favourite);
console.log(typeof favourite); // 输入的是一个string类型，需要强制转换才行
if (favourite === 23) {
  console.log('太棒了！23是一个神奇的数字！');
} else if (favourite === 7) {
  console.log('7也是一个很酷的数字');
} else {
  console.log('数字不是23以及7');
}

if (favourite !== 23) {
  console.log('为什么不是23？');
}
