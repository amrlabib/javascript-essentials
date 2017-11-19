## Callback Functions:

A callback also known as Higher-order Functions is a function passed as a parameter to another function, then executed inside that function.

Note that a callback is also a closure because its is called inside a function and it has access to all variables inside that function.


---

### First class citizen functions make callbacks possible:

1. Function objects can be assigned to variables.

2. Can be passed around as arguments.

3. They can be returned from a function.


---

### Why we need callback functions:

Callback function is very powerful when it comes to capturing asynchronous operations results.


#### Example 9.0:

Async example where the callback function will be needed

```javascript

var x = 1;

function asyncIncrement(){
	setTimeout(function(){
		x = 2;
	},3000);
}

asyncIncrement();
console.log(x); //1 --> because asyncIncrement is an async function the value of x is incremented later after 3 seconds, and our console.log picked the old value.

```

---


### How to create callback functions to fix [Example 9.0](callbackFunctions.md#example-90) ?

Lets illustrate that dirrectly using an example

#### Example 9.1:

```javascript

var x = 1;

function asyncIncrement(callback){
	setTimeout(function(){
		x = 2;
		callback(x);
	},3000);
}


asyncIncrement(function(incrementedValue){
	console.log(incrementedValue); //2 --> because we used callback function to capture the value when it is ready after 3 seconds
});

```

As you can see the value is printed correctly after 3 seconds






