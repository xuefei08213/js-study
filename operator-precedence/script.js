const now = 2037;

// Math Operator
const ageJohn = now - 1991;
const ageMary = now - 2018;

// 表达式之所以先算减法再做比较是因为JavaScript内部有一套默认的运算符优先级
console.log(now - 1991 > now - 2018); 

// 关于运算符的优先级，可以搜索mdn operator precedence查看

// 从左往右的运算符
console.log(25 - 10 -5);

let x,y;

// 减法的优先级高于=
// 等于是从右往左，如果是从左往右的，那么x的值将是undefined，因为此时y还没有赋值
x = y = 25 - 10 -5; // x = y = 10 
console.log(x,y);

// 求平均年龄 averageAge = ageJohn + ageMary / 2
// 上面的写法是不对的，因为/的优先级高于+
// 应该用()，它的优先级最高
const averageAge = (ageJohn + ageMary) / 2