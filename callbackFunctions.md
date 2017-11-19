## Callback Functions:

A callback also known as Higher-order Functions is a function passed as a parameter to another function, then executed inside that function.

Note that a callback is also a closure because its is called inside a function and it has access to all variables inside that function.


---

### Why callback function is possible in javascript:

The answer is that functions are First class citizen, which means the following:

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
	},1000);
}

asyncIncrement();
console.log(x); //1 --> because asyncIncrement is an async function the value of x is incremented later after 1 second, and our console.log picked the old value.

```

---


### How to create callback functions to fix [Example 9.0](callbackFunctions.md#example-90) ?

Lets illustrate that dirrectly using an example

#### Example 9.1:

```javascript

var x = 1;

function asyncIncrement(callback){ //we added a parameter, which is a function that will be executed later
	setTimeout(function(){
		x = 2;
		callback(x);
	},1000);
}


asyncIncrement(function(incrementedValue){
	console.log(incrementedValue); //2 --> because we used callback function to capture the value when it is ready after 1 second
});

```

As you can see the value is printed correctly after 1 second, by following the following steps

1. Changed `asyncIncrement` function definition to accept 1 argument (the callback function)

2. While executing `asyncIncrement` we passed an anonymous function with 1 argument, and its implementation.

3. After 1 second we execute the callback function and pass the incremented value of `x`.

---

### Callback function context:

usually callback function is executed with incorrect `this` value, as we learned from [Context section](context.md) we can use `bind` , `apply` , or `call` to pass the desired `this` value.

#### Example 9.2:

In this example we will not pass the value of `x` as parameter to callback function, instead we will use the context value `this` of the object to access `x` value correctly.

```javascript

var obj = {
	x : 1,
	asyncIncrement : function(callback){
		setTimeout(function(){
		    this.x += 1;  //in this line `this` value is bound to global window object, not the current object, thats why the result of this.x is undefined and undefined += 1 is NaN
			callback();
		}, 1000);
	}
};


obj.asyncIncrement(function(){
	console.log(this.x); //NaN
});

```

As we can see from the previous example we have incorrect `this` context, inside 2 callback functions

1. The callback function of `setTimeout`.

2. The callback function of our own `asyncIncrement` function.


#### Example 9.3:

In this example we will see how `bind`, `call` and `apply` are useful to give us the correct `this` context to fix our previous [example](callbackFunction.md#example-92)

```javascript

var obj = {
	x : 1,
	asyncIncrement : function(callback){
		setTimeout(function(){
		    this.x += 1;
			callback.apply(this);  // notice how we called the callback function using apply to pass the correct `this` context 
		}.bind(this), 1000); // notice how we bound the anonymous callback function of setTimeout using bind(this)
	}
};


obj.asyncIncrement(function(){
	console.log(this.x); //2  --> because `this` context now is bound correctly to obj
});


```

---

## Callback Hell, or thats how they call it!:

Callback function is very powerful but in large scale applications where multiple nested asynchronous results are expected, will result in too many nested callback functions, this is what is known by callback hell.

### Example 9.4:

In this example we will see how 3 nested callback function will look like

```javascript

var x = 1;

function asyncIncrementOne(callback){
	setTimeout(function(){
		x += 1;
		callback(x);
	},1000);
}

function asyncIncrementTwo(callback){
	setTimeout(function(){
		x += 2;
		callback(x);
	},1000);
}

function asyncIncrementThree(callback){
	setTimeout(function(){
		x += 3;
		callback(x);
	},1000);
}


function asyncIncrement(){
	asyncIncrementOne(function(oneIncrement){
		console.log(oneIncrement);
		asyncIncrementTwo(function(twoIncrement){
			console.log(twoIncrement);
			asyncIncrementThree(function(threeIncrement){
				console.log(threeIncrement);
			});
		});
	});
}

asyncIncrement();

//result
// 2
// 4
// 7

```

As we can see from this example three nested callback functions are really confusing in terms of code readability and tracking what is going where, we can reduce this by defining each callback function separately and then call it, but still the code will be a bit confusing.

Fortunately we have a much better solution in javascript which is [promises](promises.md)








