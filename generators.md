# Generators:

Generators are based on iterators, every generator is an iterator, basically they are just an easier and cleaner way to write iterators، as you don't need to keep state of value, or done.

Generator is just a function that has slightly different behaviour, that give the function the ability to pause and then continue execution later.


### Generator functions main characteristics ? 

1. Generator function is created by adding `*` in function signature example: `function* myGenerator() { /* body */ }`
2. Generator function will pause execution whenever `yield` is reached
3. When Generator function is executed it will return iterator that we can use to iterate all values.
4. We can use iterable based constructs on generators example [ `for-of`, `[] array destrcuturing`, `...` ]


#### Example 15.0:

We will write [Example 14.2](iterators.md#example-142) using generators

```javascript
let numbersGenerator = function*(max) {
    let num = 0;
    while(num < max) {
        yield ++num;
    }
}
const numbersIterator = numbersGenerator(6);
while (true) {
    const current = numbersIterator.next();
    console.log(current.value);
    if (current.done) {
        break;
    }
}
// 1 2 3 4 5 6 undefined
```

Generator will simplify the code of iterator, and when a generator function is executed it will just return an iterator, and we can start calling `next` the same way we did it for iterator implemenation

---

### Generator delegation:

We can delegate another generator or iterable Object to do the work of current generator using `yield*` expression.

#### Example 15.1: 

```javascript
function* delegateGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function* numberGenerator() {
    yield* delegateGenerator();
}

const myIterator = numberGenerator();
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
// 1 2 3
```

---

### Generator function argument

When we declare a generator function with argument this argument will be passed only once when we execute the function and it returns iterator, and will be available during all calls of `next`

#### Example 15.2:


```javascript
function* myGeneratorFunction(x) {
    console.log(x);
    yield x;
}

const myIterable1 = myGeneratorFunction();
const myIterable2 = myGeneratorFunction(22); 


myIterable1.next(); // undefined { value: undefined, done: false }
myIterable2.next(); // 22 { value: 22, done: false}
```

---

### Generator `next` method argument


The rule of arguments passed to `next` method is that, the argument will replace the previous `yield` expression, this means that passing an argument to the first `next` call will simply be ignored!

#### Example 15.3

```javascript
function* myGeneratorFunction() {
    const x = yield 1;
    console.log(`x = ${x}`);
    const y = yield 2;
    console.log(`y = ${y}`);
}

const myIterable = myGeneratorFunction();

console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());

// { value: 1, done: false}
// x = undefined
// { value: 2, done: false}
// y = undefined
// { value: undefined, done: true}
```

As we can see from previous example, both values `x` and `y` are `undefined` because whenever we call `next` (starting from second call of `next`) the previous yield will be set to that argument, and since we don't pass anything the previous yield is set to `undefined`

#### Example 15.4

This is a copy of example 15.3 but we will make sure to pass values while calling `next` method

```javascript
function* myGeneratorFunction() {
    const x = yield 1;
    console.log(`x = ${x}`);
    const y = yield 2;
    console.log(`y = ${y}`);
}

const myIterable = myGeneratorFunction();

console.log(myIterable.next(22));
console.log(myIterable.next(33));
console.log(myIterable.next(44));

// { value: 1, done: false}
// x = 33
// { value: 2, done: false}
// y = 44
// { value: undefined, done: true}
```

As we can see from previous example

1. 22 passed in first `next` call is completely ignored
2. 33 replaced the entire previous `yield 1` expression which means x is set to 33
3. 44 replaced the entire previous `yield 2` expression which means y is set to 44

From previous example we can also track easily the behaviour of generator function execution and where exactly it will pause.

1. on execution of this line `myIterable.next(22)` generator function will `yield 1` and pause execution, even the assignment of x is not done
2. on execution of this line `myIterable.next(33)` generator function will assign `33` to `x` and will `yield 2` and pause, even the assignment of y is not done
3. on execution of this line `myIterable.next(44)` generator function will assign `44` to `y` and will return `{ value: undefined, done : true}`

