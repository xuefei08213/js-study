'use strict';

let hasDriversLicense = false;
const passTest = true;
// 在严格模式下会报错 hasDriverLicense is not defined
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('我会开车');

// 在严格模式下，对于这种未来可能是关键字的变量也会报错
// const interface = 'Audio';
// const private = 534;
