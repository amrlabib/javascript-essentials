# Scope
A scope is where a variable can be accessed inside your code.

---

### Why Scope matters ?
The existance of scope is important to keep a maintanable less colliding code, this will help in separating libraries variables, from your own program variables, resulting in code with less errors.

---

### Javascript Scopes:
1. **Global Scope:** Variables not contained by any function, defined directly under `window` object, and can be accessed everywhere inside your code.

2. **Local Scope:** Variables defined inside a function and accessible inside that function only.

3. **Lexical Scope (nested scopes):** Variables defined inside a function where this function is contained by another function, we can consider this as a nested local scopes.

---

### Function scope:
In javascript variables can be scoped using functions.

#### Example 1.0:
**Hint:** we will start every variable name with its scope type example: globalVarName , localVarName, lexicalVarName

```javascript
var globalName = "amr";

function scopeFunction() {
    globalMessage = "hello"; //undeclared variable defined without using var keyword thats why its a global variable.

    var localName = "labib"; //Scoped by the current function

    console.log(localName);  //labib ->  local variable
}

scopeFunction();

console.log(globalName);       //amr  ->  global variable, defined in the global scope
console.log(globalMessage);    //hello -> global variable because its defined without using var keyword
console.log(localName);        //undefined  -> local variable because its scoped by scopeFunction function
```

**Hint**: Any undeclared variable is added in global scope.
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

#### Example 1.2:

```javascript
var x = 1;
function scopeFunc(){
    var x = 2;

    console.log(x); //2 -> innermost scope
}
scopeFunc();
console.log(x); //1
```
