/**
 * 根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断
 * 1、函数是否在new中调用（new绑定），如果是的话this绑定的是新创建的对象。var bar = new foo()
 * 2、函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this绑定的是指定的对象。var bar = foo.call(obj2)
 * 3、函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this绑定的是那个上下文对象。var bar = obj1.foo()
 * 4、如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。var bar = foo()
 */

/**
 * 隐式绑定和显式绑定的优先级
 * 显式绑定的优先级高于隐式绑定
 */
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo,
};

var obj2 = {
  a: 3,
  foo: foo,
};

obj1.foo(); // 2
obj2.foo(); // 3
obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2

/**
 * new绑定和隐式绑定
 * new绑定比隐式绑定的优先级高
 */

function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo,
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4

function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);

console.log(obj1.a); // 2
console.log(baz.a); // 3
