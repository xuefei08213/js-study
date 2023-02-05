// 5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('xuefeeney'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log('别全花完了');
} else {
  console.log('你应该找个工作了');
}

let height; // height等于0时也是false，是个bug
if (height) {
  console.log('height is defined');
} else {
  console.log('height is undefined');
}
