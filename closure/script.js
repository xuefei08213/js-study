// function foo() {
//   var a = 2;
//   function bar() {
//     // 基于词法作用域的查找规则，bar()可以访问外部作用域中的变量a
//     console.log(a);
//   }
//   bar();
// }
// foo();

// foo执行之后，其返回（也就是内部的bar()函数）赋值给变量baz并调用baz()，实际上只是通过不同的标识符引用调用了内部的函数bar()
// bar()显然可以被正常执行。但是在这个例子中，它在自己定义的词法作用域以外的地方执行

// 函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的词法作用域。

// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }

//   return bar;
// }

// var baz = foo();
// console.log(baz, 'baz');
// console.log(typeof baz);
// baz();

// 无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到闭包

// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   bar(baz);
// }

// function bar(fn) {
//   console.log(fn, 'fn');
//   console.log(typeof fn);
//   fn();
// }

// foo();

// 间接的传递函数
// var fn;
// function foo() {
//   var a = 2;

//   function baz() {
//     console.log(a);
//   }

//   fn = baz;
// }

// function bar() {
//   console.log(fn, 'fn');
//   console.log(typeof fn);
//   fn();
// }

// foo();
// bar();

// 无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包
// 当函数可以记住兵访问所在的词法作用域时，就产生了闭包，即使当函数是在当前词法作用域之外执行。

// 在定时器、事件监听器、ajax请求、跨窗口通信、Web Workers或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包。

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// 如果作用域是空的，那么仅仅将它们进行封闭式不够的。我们生命的IIFE只是一个什么都没有的空作用域
// for (var i = 1; i <= 5; i++) {
//   (function () {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);
//   })();
// }

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// 在迭代内使用IIFE会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代内部
// 每个迭代中都会含有一个具有正确之的变量供我们访问
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
