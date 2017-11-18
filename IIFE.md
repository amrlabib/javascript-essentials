## Immediately Invoked Function Expression (IIFE):
It is an anonymous function that get invoked as soon as it is defined.

### Function Declaration VS Expression:
Its is important to understand the difference between function declaration and expression to understand how IIFE works

* **Function Declaration:**
A function declaration defines a named function variable without requiring variable assignment. example: `function printName() { console.log("Amr Labib"); }`

* **Function Expression:**
A function expression, defines a function using a variable assignment expression. example : `var printName = function(){console.log("Amr Labib");}`


### Expression can be invoked not declaration:
* In javascript, trying to invoke function declaration is not possible it will result in an error.

* To be able to immediately invoke a function declaration using `()` you need to tell the parser to expect an expression.


#### Example 5.0:

In this example we will show the differences between declaration, expressions and the result of immediately invoking them.

```javascript

//function declaration
function printName(){
	console.log("Amr Labib");
}() //SyntaxError: Unexpected token ) because parser considers () is a completely different expression than the function and it expected to have an actual expression inside the parentheses like (1+2) but found nothing.


//function expression
var printName = function(){
	console.log("Amr Labib");
}() // Amr Labib --> because parser found function expression before (), and the parentheses are considered to call the function.

```

