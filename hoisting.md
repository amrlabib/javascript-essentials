# Hoisting
Hoisting is the ability to use a variable or function before its declaration, its very important to understand that hoisting is applied to declaration not initialization.

---

### Declaration VS Initialization:
I know this is basic, but its important to perfectly understand hoisting.
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

variables are hoisted in it's own execution scope, if a variable is hoisted inside a function it will be hoisted at the top of the function implementation, in another word it will be hoisted in its own local scope.

---

### Variable hoisting:

#### Example 3.0;

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
```

---

### Function hoisting:

In case of functions hoisting is applied to function declarations, but not to function expressions

#### Example 3.3:

```javascript

declarationFunc(); // "function declaration is hoisted" --> because function is hoisted

function declarationFunc()
{
    console.log("function declaration is hoisted");
}
```

#### Example 3.4:

```javascript

expressionFunc(); //Uncaught TypeError: expressionFunc is not a function

var expressionFunc = function(){
    console.log("function expression is not hoisted");
}
```

---




## Summary:
1. Hoisting is using variables, or functions before declaring them.
2. Hoisting is applied to declaration not initialization.
3. Declared variables are all initialized to `undefined`
4. Hoisting is done per scope, in global scope variables are hoisted in global scope, while in local "function" scope variables are hoisted in local function scope.

