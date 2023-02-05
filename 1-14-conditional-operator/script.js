// 三元表达式
const age = 23;
age > 18 ? console.log('我喜欢喝酒！') : console.log('我只能喝饮料！');

const drink = age > 18 ? '酒' : '水';
console.log(drink);

let drink2;
if (age > 18) {
  drink2 = '酒';
} else {
  drink2 = '水';
}
console.log(drink2);

console.log(`我喜欢喝${age > 18 ? '酒' : '水'}`);
