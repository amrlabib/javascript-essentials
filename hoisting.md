# Hoisting
Hoisting is the ability to use a variable or function before its declaration, its very important to understand that hoisting is applied to declaration not initialization.


### Variable hoisting:

#### Example 3.0:
Note in the example below that the value printed inside the function is `undefined` not `ReferenceError: x is not defined` or `10` , this is because variable declaration is hoisted not initialization.

```javascript
function hoistingTest()
{
    console.log(x); // undefined because x is hoisted

    var x = 10;
}
```

The code above is equivalent to

```javascript
function hoistingTest()
{
    var x;

    console.log(x);

    x = 10;
}
```

---

### Function hoisting:

In case of functions, hoisting is applied to function declarations, but not to function expressions

#### Example 3.1:

```javascript
declarationFunc(); //this will print "function declaration is hoisted"
function declarationFunc()
{
    console.log("function declaration is hoisted");
}

expressionFunc(); //Uncaught TypeError: expressionFunc is not a function
var expressionFunc = function(){
    console.log("function expression is not hoisted");
}
```

---
