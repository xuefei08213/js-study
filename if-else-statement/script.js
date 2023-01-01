// 判断是否可以拥有驾照
const age = 15;

const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("已满18岁，可以开车");
} else {
  const yearsLeft = 18 - age;
  console.log(`未满18岁，不可以开车,还需要${yearsLeft}年`);
}

if (age >= 18) {
  console.log("已满18岁，可以开车");
} else {
  const yearsLeft = 18 - age;
  console.log(`未满18岁，不可以开车,还需要${yearsLeft}年`);
}

// 2000年之前出生的是在20世纪
// 2000年之后出生的是在21世纪
const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
