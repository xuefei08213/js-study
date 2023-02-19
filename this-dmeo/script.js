function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello,I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: 'feeney',
};

var you = {
  name: 'david',
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);

var prop = 'window';

function baz() {
  console.log(this, 'this');
  console.log('baz');
  var prop = 'baz';
  bar();
}

function bar() {
  console.log(this, 'prop');
  console.log('bar');
  foo();
}

function foo() {
  console.log('foo');
}

baz();
