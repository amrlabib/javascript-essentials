# Hoisting
Hoisting is the ability to use a variable or function before its declaration, it's very important to understand that hoisting is applied to declaration not initialization.

### How and why javascript has hoisting:
This is because in javascript variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top.

---

### Declaration VS Initialization:
I know this is basic, but it's important to perfectly understand hoisting.
* Declaration: `var x;`
* Initialization: `x = 10;`

---

### `undefined` VS `ReferenceError`:

`undefined` and `ReferenceError` are two completely different things.

* `undefined`:
An undeclared variable is assigned the value undefined at execution.

* `ReferenceError`:
A ReferenceError is thrown when trying to access a previously undeclared variable.

---

### Hoisting is scoped:

Variables are hoisted in it's own execution scope, a local scope declared variable will be hoisted locally, while a global scope declared variable will be hoisted globally.

---

### Variable hoisting:

#### Example 3.0:

Variables can be used before its declaration.

```javascript
console.log(x); //undefined --> because declaration of x is hoisted and initialized to undefined.

var x = "hoisted"; //only declaration is hoisted

```

#### Example 3.1:

Emphasize that only variable declaration is hoisted.

```javascript

console.log(x);    //ReferenceError: x is not defined

x = "not hoisted"; //variable x is not hoisted as we didn't declare it, here we just initialized undeclared variable.
```

#### Example 3.2:

Emphasize that hoisting is applied inside current execution scope.

```javascript

console.log(x); //ReferenceError: x is not defined

function hoistingTest()
{
    console.log(x); // undefined because x is hoisted inside the function

    var x = 10;     // hoisted in its own local (function) scope
}
hoistingTest();
```

The code above is equivalent to

```javascript

console.log(x);

function hoistingTest()
{
    var x;

    console.log(x);

    x = 10;
}
hoistingTest();
```

#### Example 3.3:

Tricky

```javascript
console.log(x); //undefined
console.log(y); //ReferenceError: y is not defined --> because y is undeclared variable and hoisting is applied to declaration not initialization
var x = y = 10;
```

The right way

```javascript
console.log(x); //undefined
console.log(y); //undefined --> because y is now a declared variable
var x, y = 10;
```

---

### ES6 declaration keywords (`let` and `const`):
Variable declaration is not hoisted when we use `let` or `const`

#### Example 3.4:

```javascript

console.log(x); //ReferenceError: x is not defined
console.log(y); //ReferenceError: y is not defined

let x = 1;
const y = 0;
```

---

### Function hoisting:

In case of functions hoisting is applied to function declarations, but not to function expressions

#### Example 3.5:

Function declaration is hoisted.

```javascript

declarationFunc(); // "function declaration is hoisted" --> because function is hoisted

function declarationFunc()
{
    console.log("function declaration is hoisted");
}
```

#### Example 3.6:

Function expression is not hoisted.

```javascript

expressionFunc(); //Uncaught TypeError: expressionFunc is not a function

var expressionFunc = function(){
    console.log("function expression is not hoisted");
}
```

---

### Class hoisting:
An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not, generally class declarations and expressions are not hoisted.

---

### Side note:
Hoisting is not a feature that we need to use or even looks cool to use, or thats how i think about it, it's just one of the language characteristics, i prefer to always declare varaibles and functions before using them, it's even more readable for those who does not completely understand hoisting.

