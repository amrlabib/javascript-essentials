# Hoisting
Hoisting is the ability to use a variable or function before its declaration, its very important to understand that hoisting is applied to declaration not initialization.


### `undefined` VS `ReferenceError`:

`undefined` and `ReferenceError` are two completely different things.

* `undefined`:
An undeclared variable is assigned the value undefined at execution and is also of type undefined.

* `ReferenceError`:
A `ReferenceError` is thrown when trying to access a previously undeclared variable.

**Important Hint:** variables are hoisted in it's own execution scope, if a variable is hoisted inside a function it will be hoisted at the top of the function body implementation, in another word it will be hoisted in its local scope.

### Variable hoisting:

Variables can be used before its declaration.

#### Example 3.0;

```javascript
console.log(x); //undefined --> because declaration of x is hoisted and initialized to undefined.

var x = "hoisted"; //only declaration is hoisted

```

#### Example 3.1:

To emphasize that only variable declaration is hoisted lets check the next example
```javascript

console.log(x);    //ReferenceError: x is not defined

x = "not hoisted"; //variable x is not hoisted as we didn't declare it, here we just initialized undeclared variable.
```

#### Example 3.2:

```javascript

console.log(x); //ReferenceError: x is not defined

function hoistingTest()
{
    console.log(x); // undefined because x is hoisted

    var x = 10;     // hoisted in its own local (function) scope
}
```

The code above is equivalent to

```javascript

console.log(x); //ReferenceError: x is not defined

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

