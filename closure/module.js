/**
 * 当通过返回一个含有属性引用的对象的方式来将函数传递到词法作用域外部时，我们已经创造了可以观察和实践闭包的条件
 * 模块模式需要具备两个必要条件
 * 1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次创建都会创建一个新的模块实例）
 * 2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态
 *
 * 从模块中返回一个实际的对象并不是必须得，也可以直接返回一个内部函数
 */

// 每次调用都会创建一个新的模块实例
function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();

// 通过立即执行函数来实现单例模式
var foo = (function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();

foo.doSomething();
foo.doAnother();

// 模块也是普通的函数，也可以接受参数
function CoolModule(id) {
  function identify() {
    console.log(id);
  }

  return {
    identify: identify,
  };
}

var foo1 = CoolModule('foo 1');
var foo2 = CoolModule('foo 2');

foo1.identify(); // foo 1
foo2.identify(); // foo 2

/**
 * 模块模式另一个简单但强大的用法是命名将要作为公共API返回的对象
 * 通过在模块实例的内部保留对公共API对象的内部引用，可以从内部对模块实例进行修改，
 * 包括添加或删除方法和属性，以及修改它们的值
 */
var foo = (function CoolModule(id) {
  function change() {
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    identify: identify1,
  };

  return publicAPI;
})('foo module');

foo.identify();
foo.change();
foo.identify();
