# Javascript Engine:

javascript is an interpreted programming language, which means it will run through a program whenever it needs to be executed, the program will interpret the javascript code, and compile it during runtime to machine code, this program is the engine, one of the most known engines is v8 engine, that is used in both chrome browser and node js runtime environments.

## Some of the popular javascript engines:

| Engine | Used in | written in | 
|---|---|---|
| v8 | Chrome browser, node runtime environment | C++ |
| JavascriptCore | Safari browser, React Native |  |
| SpiderMonkey | Firefox |  |



### Side note: difference between compiled and interpreted language:

1. Compiled language: the program is compiled directly to machine code, the final result of a compiled program is a binary file that can be executed now or later, and it is very fast because it is just a machine code that get executed.

2. Interpreted language: the program is interpreted by another program during runtime and then it get compiled also during runtime to machine code, this makes it slower than compiled language but with some advantages like flexibility and easier dynamic language implementation.


---

## Main javascript engine components: 

1. Memory Heap: this contains all memory allocations for objects, functions ... etc

2. Call Stack: Also known as execution call stack, this is a where all execution context of function calls are stored, so basically the stack is used during javascript code execution.

---

## Execution Call Stack:

Whenever a javascript code is executed, all function calls are pushed into the call stack, remember stack is a data structure that follows LIFO (Last in first out), and whenever a function is returned it get poped from stack.

Javascript engines contain single call stack, this is why javascript is a single threaded language that can do one thing at a time.

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

Below is the state of execution call stack for each function execution context, each column will describe a new call stack state after a function call, `main()` is the global execution context.

| line-14 <br /> `printSquare(4)` | line-10 <br /> `sqaure(n)` | line-6 <br /> `multiply(n,n)` | line-2 <br /> `return` | line-6 <br /> `return` | line-11 <br /> `console.log(squared)` | <br /> `console.log` is returned | line-12 <br /> `implicit return` |
|---|---|---|---|---|---|---|---|
| | | `multiply(n,n)` | | | | | |
| | `square(n)` | `square(n)` | `square(n)` |  | `console.log(squared )` | | |
|`printSquare(4)`| `printSquare(4)` | `printSquare(4)` | `printSquare(4)` |  `printSquare(4)` | `printSquare(4)` | `printSquare(4)` | |
|`main()`| `main()` | `main()` | `main()` |  `main()` | `main()` | `main()` | `main()` |

---

## Execution context:

What happens inside each execution context from previous example ? so what happens when we enter execution context of `printSquare` function, to understand this we need to know what the engine will do while working on the top most execution context in the stack.


### Execution context stages:

1. Creation stage: This is when function is called and before it execute any code inside.

2. Code Execution stage: Assign values to variables, references to functions and execute the code.


### Conceptual representation of execution context:

```javascript
executionContextObj = {
	'scopeChain': { /* variableObject + all parent execution context's variableObject */ },
	'variableObject': { /* function arguments / parameters, inner variable and function declarations */ },
	'this': {}
}
```

---

## Execution context (Creation stage):

During execution context (creation stage) the following steps will be followed:

1. Initialize `scope chain`
2. Create `variable object` that consists of 
	1. create argument object for functions by checking function parameters, initialize the name and value and create a heap memory reference copy.
	2. Scan context for function declarations, for each function declaration found create a property with same function name in `variable object` which has a reference pointer to function in memory (Memory Heap), if the name already exist the reference pointer will be overwritten.
	3. Scan the context for variable declarations, for each variable declaration found, create a property with same variable name in `variable object` and initialize the value as `undefined`, if the variable name already exist do nothing and continue scanning
3. Determine the value of `this` inside the context


#### Hint:

Notice that during creation stage we always scan declarations not initialization, this explains why declaration is hoisted while initialization is not. [hoisting](hoisting.md)


## Execution context (Code execution stage):

During execution context (code execution stage), variable assignment will be done while code is executed line by line


#### Example 17.1: 

```javascript
function foo(i) {
    var a = 'hello';
    var b = function privateB() {

    };
    function c() {

    }
}

foo(22);
```

Now lets see what the execution context object will look like once `foo` is called and pushed to execution call stack


##### During creation stage 
```
fooExecutionContext = {
	scopeChain: { ... },
	variableObject: {
		arguments: {
			0: 22,
			length: 1,
		},
		i: 22,
		a: undefined,
		b: undefined,
		c: pointer to function c() in heap memory
	},
	this: { ... }
}
```

One exception that we can see during creation stage is that function parameters values are assigned to variables, while everything else is not.

#### During code execution stage

```
fooExecutionContext = {
	scopeChain: { ... },
	variableObject: {
		arguments: {
			0: 22,
			length: 1,
		},
		i: 22,
		a: 'hello',
		b: pointer to function privateB() in memory heap,
		c: pointer to function c() in memory heap,
	},
	this: { ... }
}
```


---

## Summary:

1. Javascript is a synchronous single thread programming language with single execution call stack inside the engine, that means it can do only one thing at a time.

[If you wonder how we can write asynchronous code in javascript, read about [Runtime Environment, Callback Queue and Event Loop](runtime-environment.md)]

2. Execution context for each function is contructed in 2 stages, creation then execution, now [hoisting](hoisting.md) should make more sense.

3. Primitive data type are stored directly in stack, while non primitive data types are stored in memory heap and has a variable in stack that reference the memory location in heap. [Value Or Reference](valueOrReference.md)




