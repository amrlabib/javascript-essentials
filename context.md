## Context
Context is the value of `this` in each part of your code.


### All cases of this context:

1. Global Execution context:
this is when we call a function in the global window context

2. Entering function code:
-If the function is called on object `this` value is bound to that object
-If the function is just called , `this` is bound to global object

3. Special case functions like , `bind`,`call`,`apply` can change this context to any passed object.

4. Construction of new Object: when we use new key word to construct a new object, this is bound to the new created object.

5. Eval:
-Direct call to eval, will keep this context as is not changed, as the execution context of its caller
-Indirect call

#### Example 6.0:

`this` is bound to global object.

```javascript
console.log(this); //global window object if in browser
```

#### Example 6.1:

`this` inside a function is bound to the object that called the function

```javascript
function globalFunction(){
	console.log(this); //this = window --> because called by global window object
}
globalFunction(); //this line is equivalent to window.globalFunction();


var myObject = {
  myFunc : function(){
    console.log(this);
  }
}

myObject.myFunc(); //this = MyObject --> because the function is called on myObject

var temp = myObject.myFunc;
temp(); //this = window --> because the function is called and executed from global window object

```

---

### `bind`,`call`,`apply`:

These three methods can by used to change `this` context value inside any function to any required object.

---

`bind `: creates a new function that, when called, has its this keyword set to the provided value, it also accept optional arguments that will be prepended to the argument list of the new return function.


#### Example 6.2:

```javascript

var obj= {
	first: "Amr",
	last: "Labib"
}

function printName(){
	console.log(this.first +  " " + this.last , arguments[0] , arguments[1]);
}

printName(); // undefined undefined undefined undefined  --> because this is bound to global window object, also we don't have any argument passed to the function

var boundPrintName = printName.bind(obj); // will return new function with this context bound to obj

boundPrintName(); // Amr Labib undefined undefined

var boundPrintNameWithArgument = printName.bind(obj , "argument 1"); //will return new function with this context bound to obj and first argument set to "Software Engineer"

boundPrintNameWithArgument("argument 2"); //Amr Labib argument 1 argument 2

```

---


`call`: calls a function with a given this value and arguments provided individually.

`apply`: calls a function with a given this value, and arguments provided as an array

#### Example 6.3:

```javascript




```

---

#### Example 6.2:

```javascript

function myFun() {
    console.log(this);
}

var obj = {
    myMethod : function () {
        eval("myFun()");
    }
};

obj.myMethod(); // this = window --> because the eval called the myFunc function without an object
```