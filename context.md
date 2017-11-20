## Context
* Context is the value of `this` in each part of your code.

* Function context depends on how the function is called, this is called the innvocation pattern.


### All cases of this context:

1. Global context:
`this` is bound to global object when used globally.

2. Function Context:
 * As Function: function is just called , `this` is bound to global `window` object.

 * As Method: function is called under object, `this` is bound to that object.

3. Special case functions like , `bind`,`call`,`apply` can change this context to any passed object.

4. Construction of new Object: when we use new key word to construct a new object, this is bound to the new created object.

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

### `bind`,`call` and `apply` methods:

These three methods can be used to change `this` context value inside any function to any required object.

---

`bind `: creates a new function that, when called, has its `this` keyword set to the provided value, it also accept optional arguments that will be prepended to the argument list of the new returned function.


#### Example 6.2:

```javascript

var obj= {
	first: "Amr",
	last: "Labib"
}

function printName(){
	console.log(this.first +  " " + this.last , arguments[0] , arguments[1]);
}

printName(); // undefined undefined undefined undefined  --> because `this` is bound to global window object, also we don't have any argument passed to the function

var boundPrintName = printName.bind(obj); // will return a new function with `this` bound to obj

boundPrintName(); // Amr Labib undefined undefined

var boundPrintNameWithArgument = printName.bind(obj , "argument 1"); //will return new function with `this` bound to obj and first argument set to "argument 1"

boundPrintNameWithArgument("argument 2"); //Amr Labib argument 1 argument 2

```

---


`call`: calls a function with a given `this` value and arguments provided individually.

`apply`: calls a function with a given `this` value, and arguments provided as an array

#### Example 6.3:

Notice the difference between `call` and `apply` is just how they accept arguments after passed `this` object.

```javascript

var obj= {
  first: "Amr",
  last: "Labib"
}

function printName(){
  console.log(this.first +  " " + this.last , arguments[0] , arguments[1] );
}

printName(); // undefined undefined undefined undefined  --> because this is bound to global window object, also we don't have any argument passed to the function

printName.call(obj); // Amr Labib undefined undefined
printName.call(obj , "argument 1" , "argument 2");    //Amr Labib argument 1 argument 2

printName.apply(obj); // Amr Labib undefined undefined
printName.apply(obj , ["argument 1" , "argument 2"]); //Amr Labib argument 1 argument 2

```

---

#### Example 6.4:

Construction of new object

```javascript

var Name = function(){
	this.first = "Amr";
	this.last = "Labib";
}

var obj1 = new Name(); //this == Name Object

console.log(obj1.first);

```

**Hint:**
By Convention we capitalize the first letter in function when we use it as constructor.

---

#### Example 6.5:

Use `call` with self invoked function to set `this` context inside each loop iteration

```javascript
var numbers = [{
  number : {
  	value : 1 
  }
},{
  number : {
  	value : 2
  }
},{
  number : {
  	value : 3
  }
}];

for (var i = 0; i < numbers.length; i++) {
  (function () {
    console.log(this);
  }).call(numbers[i].number);
}


```

