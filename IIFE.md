## Immediately Invoked Function Expression (IIFE):
It is an anonymous function that get invoked as soon as it is defined.

It is all about this block of code

```javascript
(function(){
	//body
}());
```

---

### Function Declaration VS Expression:
Its is important to understand the difference between function declaration and expression to understand how IIFE works

* **Function Declaration:**
A function declaration defines a named function variable without requiring variable assignment. example `function printName() { console.log("Amr Labib"); }`

* **Function Expression:**
A function expression, defines a function using a variable assignment expression. example `var printName = function(){console.log("Amr Labib");}`

---

### Expression can be invoked but not declaration:
* In javascript, trying to invoke function declaration is not possible it will result in an error.

* To be able to immediately invoke a function declaration using `()` you need to tell the parser to expect an expression.


#### Example 5.0:

In this example we will show the difference between immediately invoking declaration and expression.

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

---

### Tell parser to expect function expression

We have multiple ways to tell the parser to expect an expression instead of declaration when it encouter function keyword, and this will make it possible to immediately invoke the function.

1. Wrap the function declaration inside parentheses (). "this is the most used way"

2. Prefix function with unary operation, or add the function declaration in logical operation.

#### Example 5.1:

```javascript

(function(){
	console.log("this function is immediately invoked");
}()); // this function is immediately invoked

!function(){
	console.log("this function is immediately invoked");
}(); // this function is immediately invoked

true && function(){
	console.log("this function is immediately invoked");
}(); // this function is immediately invoked

```

---

### Pass parameters to IIFE:

One of the most confusing things about IIFE is the way it accept its parameters, because we pass them at the bottom of the function while invoking them.

#### Example 5.2:

One of the common mistakes while passing parameters is to mix function definition parameters and the actual passed parameter.

```javascript

// Wrong way
var x = 1;
var y = 2;
(function(x,y){
	console.log(x + y);
}()); 
//NaN --> because x and y are both undefined


// The right way
var x = 1;
var y = 2;
(function(x,y){ //x and y here are just the expected parameters by the function
	console.log(x + y);
}(x,y)); //Here we pass actual values of x and y
// 3 --> because we passed x and y at the bottom of the function while invoking it.


// Better less confusing way
var x = 1;
var y = 2;
(function(num1,num2){ //changed funtion expected parameters names to make it clear that they are different from the actual passed values
	console.log(num1 + num2);
}(x,y)); 
// 3 --> because we passed x and y at the bottom of the function while invoking it.

```

---

### Why IIFE ? :

1. One of the common uses of IIFE is the module pattern (namespace) implemented as a singleton.

2. Commonly used with closures.

3. Generally any situation when you need to invoke an anonymous function once, without adding any variables.

--- 

#### Example 5.3:

Module pattern

```javascript
var Module = (function () {
  //private variable and method can't be accessed using Module.increment
  var num = 1;
  var logNum = function () {
  	console.log(num);
  };

  return {
  	//public methods, we say they are public because we can access them using Module.increment or Module.decrement
    increment: function () {
    	num++;
    	logNum();
    },
    decrement: function () {
    	num--;
    	logNum();
    }
  };

})();

Module.increment(); //2
Module.increment(); //3
Module.decrement(); //2

Module.logNum(); //TypeError Module.logNum is not a function --> becaise logNum is private method inside the module
```


#### Example 5.4:

Save state with IIFE and closure, this is a copy from example 4.3 used in closure but using IIFE instead of named function

Capture the value of `i` inside each loop using closure (fix Example 4.1)

```javascript
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    printValuesArr.push((function(capturedI){
    	return function(){
            console.log(capturedI);
        };
    })(i)); //the i we passed here is how we capture the i value
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9
```










