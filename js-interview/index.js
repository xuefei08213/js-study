// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// function foo(bar, getBar = () => bar) {
//   var bar = 10;
//   console.log(getBar());
// }

// foo(5);

console.log('index.js');

import { sum } from './helper.js';

console.log(sum(1, 2));
