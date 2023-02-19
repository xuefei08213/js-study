/**
 * this的四种绑定规则
 * 默认绑定
 * 隐式绑定
 * 显式绑定
 * new绑定
 */
/**
 * 默认绑定主要出现在函数独立调用
 */
function foo() {
  // 函数调用时应用了this的默认绑定，因此this指向全局对象
  console.log(this.a);
}
var a = 2;
foo(); // 2

/**
 * 隐式绑定
 * 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含
 */

function foo() {
  console.log(this.a);
}
// 函数被调用时obj对象“拥有”或者“包含”它
// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2

// 对象属性链中只有上一层或者说最后一层在调用位置中起作用
function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo,
};

var obj1 = {
  a: 2,
  obj2: obj2,
};

obj1.obj2.foo(); // 42

// 隐式丢失
/**
 * 隐式绑定的函数会丢失绑定对象，也就是说会应用默认绑定，
 * 从而把this绑定到全局对象或者undefined上
 */

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo;
var a = 'oops,global';

bar(); // oops,global

/**
 * 传入回调函数时也会出现隐式绑定丢失
 */
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  // fn其实引用的是foo
  fn();
}

var obj = {
  a: 2,
  foo: foo,
};
var a = 'oops,global';
doFoo(obj.foo); // oops,global

/**
 * 将函数传入内置的函数而不是自己写的函数也是一样的
 */
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};
var a = 'oops,global';
setTimeout(obj.foo, 1000);

/**
 * 显式绑定
 * 通过call和apply方法来显式绑定
 */
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

foo.call(obj);

/**
 * 显式绑定仍然无法解决丢失绑定的问题
 */
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};
var a = 'oops,global';
setTimeout(foo.call(obj), 1000); // oops,global

// 硬绑定
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = function () {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 1000); // 2
bar.call(window); // 2

// 硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接收到的所有值：
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = { a: 2 };

var bar = function () {
  return foo.apply(obj, arguments);
};

var b = bar(3); // 2 3 console.log( b ); // 5

// 使用方法是创建一个 i 可以重复使用的辅助函数

function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
// 简单的辅助绑定函数
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}
var obj = { a: 2 };
var bar = bind(foo, obj);
var b = bar(3); // 2 3 console.log( b ); // 5

// 由于硬绑定是一种非常常用的模式，所以在 ES5 中提供了内置的方法 Function.prototype. bind，
// bind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = { a: 2 };
var bar = foo.bind(obj);
var b = bar(3); // 2 3 console.log( b ); // 5

/**
 * API调用的“上下文”
 * 第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，
 * 都提供了一 个可选的参数，通常被称为“上下文”（context），
 * 其作用和 bind(..) 一样，确保你的回调 函数使用指定的 this
 */

function foo(el) {
  console.log(el, this.id);
}
// 调用 foo(..) 时把 this 绑定到 obj [1, 2, 3].forEach( foo, obj ); // 1 awesome 2 awesome 3 awesome

var obj = { id: 'awesome' };

/**
 * new 绑定
 * 在 JavaScript 中，构造函数只是一些 使用 new 操作符时被调用的函数。
 * 它们并不会属于某个类，也不会实例化一个类。
 * 实际上， 它们甚至都不能说是一种特殊的函数类型，它们只是被 new 操作符调用的普通函数而已。
 *
 * 实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。
 *
 * 使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
 * 1. 创建（或者说构造）一个全新的对象。
 * 2. 这个新对象会被执行 [[ 原型 ]] 连接。
 * 3. 这个新对象会绑定到函数调用的 this。
 * 4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
 */

function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
