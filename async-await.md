## Aync/Await

Async/Await is a way to handle asynchronous calls but in a way that will make our code look more synchronous and as a result more readable.

---

### Important to know that:

Aync/Await is not a replacement for Promise, its actually using promise.

---

### Async:

1. `async` is used while declaring a function `async function getData(){}`

2. `async` will convert a function to a `Promise` that can be handled using `.then` or `.catch`

3. Since it converts the function to a Promise the resolved value is whatever get returned from the `async` function

4. Only Inside `async` function we can use `await`

---

### Await:

1. `await` is used to pause the execution of a function.

2. We use `await` before calling a Promise to pause the rest of code execution until that promise is resolved.

3. `await` works only with Promises, it does not work with callback functions

4. `await` can be used only inside `async` functions

---

### Hint:

Anything that can be done by async/await can be done using only Promises, to show how it works we will have 2 examples where we will see the same result first using Promises, and then using async/await

---

#### Example 11.0: 

Promise solution

```javascript
// This function is just simulation to asynchronous call
function getAsyncData(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve({
				name: "Amr"
			});
		},2000);
	});
}

//Handle asynchronous call using Promise only
function getData(){
	return new Promise(function(resolve){
		getAsyncData().then(function(data){
			resolve(data);
		});
	})
}

getData()
.then(function(data){
	console.log(data); //will print {name: "Amr"} after 2 seconds
});
```

---

#### Example 11.1: 

async/await solution

```javascript
// This function is just simulation to asynchronous call
function getAsyncData(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve({
				name: "Amr"
			});
		},2000);
	});
}

//Handle asynchronous call using async/await 
//As you can see using async while declaring a function will convert it to promise
//Also using await will pause the function execution until the Promise getAsyncData is resolved
async function getData(){
	var data = await getAsyncData();
	return data;
}

//Notice how getData is handled normally the same way we handle promise because once we used async the function is converted to a promise and whatever was returned from the function is the resolved value
getData()
.then(function(data){
	console.log(data); //will print {name: "Amr"} after 2 seconds
});
```

---

### Hint:

Its very important to know the consequences of using `await` as it completely pause the function execution, in the next example we will see how using `await` incorrectly can result in performance issues.

---

#### Example 11.2:

In this example we will call our `getAsyncData` that simulates the async call 3 times

```javascript
// This function is just simulation to asynchronous call
function getAsyncData(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve(1);
		},2000);
	});
}

async function getData(){
	var num1 = await getAsyncData();
	var num2 = await getAsyncData();
	var num3 = await getAsyncData();

	return num1 + num2 + num3;
}


getData()
.then(function(data){
	console.log(data); // 3 --> this will print 3 after 6 seconds because getAsyncData is called sequentially
});
```

As we can see from the result the value 3 is returned after 6 seconds because getAsyncData is called 3 times sequentially, num2 will wait 2 seconds until num1 is returned and num3 will wait 4 seconds until num1 and num2 are both returned.

This is a performance issue because num1, num2, and num3 are all not related to each other which means we don't need to wait until num1 or num2 are returned to start execution of num3.

To fix that we can use await only in return statement to indicate that the functions are all going to be executed directly but we need to wait for all results

---

#### Example 11.3:

In this example we will call our `getAsyncData` that simulates the async call 3 times

```javascript
// This function is just simulation to asynchronous call
function getAsyncData(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve(1);
		},2000);
	});
}

async function getData(){
	var num1 = getAsyncData();
	var num2 = getAsyncData();
	var num3 = getAsyncData();

	return await num1 + await num2 + await num3;
}


getData()
.then(function(data){
	console.log(data); // 3 --> this will print 3 after 2 seconds because all getAsyncData calls are executed without pausing execution
});
```

This is a more optimized code for example 11.2 as the result 3 will be printed after 2 seconds

---

### try/catch:

All the above examples are not utilizing `try/catch` blocks which is very important while using `await` if a promise is called with `await` and the promise got rejected, an exception will be thrown.

Whenever `await` is used it's important to use `try/catch` to be able to catch errors correctly.

---

### Hint:

The above unrelated async calls can be acheived easily with Promises using `Promise.all([getAsyncData , getAsyncData , getAsyncData])`





