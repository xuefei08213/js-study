// JavaScript中的值分为对象（Object）和原始类型（primitive）
// 原始类型有七种
// Number let age = 23
// String let firstName = '以码为梯'
// Boolean let fullAge  = true
// Undefined let example
// Null 也表示空值 let example = null
// Symbol(ES2015) 唯一且不会变化的值（目前没有用）
// BigInt(ES2020):当数字很大，Number不能存的时候用

// 类型是属于值的，不是属于变量的

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof '以码为梯');

javascriptIsFun = '是的！';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year); // undefined
console.log(year); // undefined

year = 1990;
console.log(typeof year);
console.log(year);

console.log(typeof null); // object
