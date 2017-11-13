# Scope, Hoisting , and Closure

### What is a scope ?
A scope is where a variable can be accessed inside your code.

---

### Why Scope matters ?
The existance of scope is important to keep a maintanable less colliding code, this will help in separating libraries variables, from your own program variables, resulting in code with less errors.

---

### Javascript Scopes:
**1.Global Scope:** Variables not contained by any function, defined directly under `window` object, and can be accessed everywhere inside your code.

**2.Local Scope:** Variables defined inside a function and accessible inside that function only.

**3.Lexical Scope (nested scopes):** Variables defined inside a function where this function contains another function, we can consider this as a nested local scopes.

---

### Function scope:
In javascript variables can be scoped using functions.

#### Example 1.0:
**Hint:** we will start every variable name with its scope type example: globalVarName , localVarName, lexicalVarName

```javascript
var globalName = "amr";

function scopeFunction() {
    globalMessage = "hello"; //Defined without using var keyword thats why its a global variable.

    var localName = "labib"; //Scoped by the current function

    console.log(localName);  //labib ->  local variable
}

scopeFunction();

console.log(globalName);       //amr  ->  global variable, defined in the global scope
console.log(globalMessage);    //hello -> global variable because its defined without using var keyword
console.log(localName);        //undefined  -> local variable because its scoped by scopeFunction function
```

---

### No Block Scope!: (if, for, while, switch):
Variables defined inside a block statement will take the parent scope.

#### ES6 `let` keyword: 
In ES6 you can use `let` keyword instead of `var` inside block statement to create local scope variable to that block statement.

#### Example 1.1:
```javascript
if (true) { 
    var globalJob = "Software Engineer"; //block statement does not create new scope for variables
    let localTitle = "Mr"; //we can define local variables inside block statement using es6 let keyword
}
console.log(globalJob);  //Software Engineer -> global variable because its defined inside a block statement
console.log(localTitle); //undefined ->  local variable defined with let inside block statement
```

---

### Scope Chain: 
It’s always the position in the code that defines the scope. When resolving a variable, JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for.

---

### Variable hoisting:
Hoisting is the ability to use a variable before its declaration, its very important to understand that hoisting is applied to declaration not initialization.


#### Example 1.2:
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

In case of functions, hoisting is applied to function declaration, but not to function expressions

#### Example 1.3:

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

### Closure: 
A closure is an inner function that has access to the outer (enclosing) function's variables.

#### Example 1.4:
```javascript
var testClosure = function() {
    var counter = 0; //counter is a private property
    return function() {
        return counter += 1;
    }
};

var add = testClosure();

add();
add();
add();
```


#### Aside hint:
In javascript when we use a variable we are using a reference to that variables.

In the example below console.log(y) will print 2 not 1 because this assignment operation y = x means that i need to keep a reference to x saved by y,

so whenever x is changed y will also return the changed number because it is saving a reference to a value.

#### Example 1.5:
```javascript
var x = 1;
var y = x;

x+=1;
console.log(y);
```

---

### Capture variable values using closure: 

we can use closure to help us capture a variable value in specific time before it get changed,
//as we leared in the previous section that we save a reference to the variable.

#### Example 1.6:
```javascript
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    printValuesArr.push(function(){
        console.log(i);
    });
}

//All the calls below will print 10, this is because the console.log inside each function is having a reference to i variables,
//which already changed to become 10.
printValuesArr[0]();
printValuesArr[5]();
printValuesArr[9]();
```

as we can see the example 1.5 the correct value of `i` is not captured because we are passing reference to i that already changed by the time we called the function.

#### Example 1.7:
Capture the value of `i` inside each loop using closure

```javascript
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    var captureValue = function(value){
        return function(){
            console.log(value);
        }
    }

    printValuesArr.push(captureValue(i));
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9
```
