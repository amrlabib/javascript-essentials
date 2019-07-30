# Event Loop:

Javascript is a single threaded synchronous language, this means that it can do one thing at a time.

So the question is how are we able to write asynchronous code as in `callback functions` or `setTimeout` ?

The answer to that question is the event loop and call stack, in this topic we will understand how we can write asynchronous code in a single threaded synchronous language using both event loop and call stack.


---

## Call Stack:

Whenever a javascript code is executed, all function calls are pushed into the call stack, remember stack is a data structure that follows LIFO (Last in first out), and whenever a function is returned it get poped from stack.

#### Example 17.0:

```javascript
1  function multiply(a, b) {
2	return a * b;
3  }
4
5  function square(n) {
6	return multiply(n, n);
7  }
8
9  function printSquare(n) {
10	var squared = sqaure(n);
11	console.log(squared);
12 }
13
14 printSquare(4);

// 16
```

| line-14 <br /> `printSquare(4)` | line-10 <br /> `sqaure(n)` | line-6 <br /> `multiply(n,n)` | line-2 <br /> `return` | line-6 <br /> `return` | line-11 <br /> `console.log(squared)` | <br /> `console.log` is returned | line-12 <br /> `implicit return` |
|---|---|---|---|---|---|---|---|
| | | `multiply(n,n)` | | | | | |
| | `square(n)` | `square(n)` | `square(n)` |  | `console.log(squared )` | | |
|`printSquare(4)`| `printSquare(4)` | `printSquare(4)` | `printSquare(4)` |  `printSquare(4)` | `printSquare(4)` | `printSquare(4)` | |


