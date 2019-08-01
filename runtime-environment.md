# Runtime Environment

* Javascript runtime environment is the big picture for a javascript program execution, runtime environment is where your javascript code will be executed by utilizing a set of components together.

* Javascript runtime environment is the reason why we can write asynchronous code given that javascript is single threaded and synchronous, runtime environment will provide us with apis to be able to write asynchronous code.


### Runtime Environment main components:

1. [Javascript Engine](engine.md)
2. Environment Apis, Examples: [Browser Web Apis, Node Server Apis, ... etc]
3. Task Queue
4. Event Table
5. Event Loop

---

## Environment Apis:

Javascript runtime environment is responsible for providing apis to interact with the host application

* Examples:

	1. Browser runtime environment will provide us with Wep Apis like `DOM`, `XMLHttpRequest`, `setTimeout`, `setInterval` ... etc 
	2. Node runtime environment will provide us with `FileSystem`, `http` ... etc

---

## Javascript Asynchronous implementation:

Task Queue, Event Table and Event loop are the three components that give us asynchronous capability in javascript.

### Event Loop|Task Queue|Event Loop:

* Whenever javascript engine finds a method from runtime environment asynchronous api like `setTimeout`, it will pop it from execution stack and send it to `Event Table` inside runtime environment, this way execution of synchronous code will not be blocked, and javascript engine will be able to execute next execution context in execution call stack

* `setTimeout` will stay in `Event Table` until specified delay is finished and then it will be sent to `Task Queue`.

* `Event Loop` will keep checking both `Execution Call Stack` in engine and `Task Queue`, and whenever there is a queued task in `Task Queue` it will push it to `Execution Call Stack` if it is empty.

* It is very important to understand that `Event loop` cannot push any task to `Execution Call Stack` until it is empty.

---

#### Example: 18.0

```javascript
1 console.log('start');
2 const startTime = new Date();
3 setTimeout(function myCallbackFunction() {
4 	const endTime = new Date();
5 	const timeDiff = endTime.getTime() - startTime.getTime();
6 	console.log(`${timeDiff / 1000} seconds`);
7 	console.log('setTimeout callback is executed');
8 }, 1000);
9 console.log('end');

// start
// end
// 1.001 seconds
// setTimeout callback is executed
```

Now lets see how runtime environment components will work together for the above asynchronous code snippet:
1. Line 1: Engine will push `console.log('start')` to execution call stack and then will pop it once finished
2. Line 2: Engine will push `new Date()` to execution call stack and then will pop it once finished
3. Line 3: Engine will push `setTimeout` to execution call stack and then will realize that it is a runtime asynchronous api, so it will pop it and send it to runtime environment that will insert it in `Event Table`
4. Line 9: Engine will push `console.log('end')` to execution call stack and then will pop it once finished
5. Now engin's execution call stack is empty and nothing is happening
6. 1 second passed since we called Line 3, so runtime environment will remove `setTimeout` from `Event Table` and queue `myCallbackFunction` task inside `Task Queue`
7. `Event Loop` will check if any task is there in `Task Queue` and will push that task to execution call stack only if it is empty, so it will be pushed immediately.
8. Now `myCallbackFunction()` is in execution call stack
9. Line 4: Engine will push `new Date()` to execution call stack and then will pop it once finished
10. Line 5: Engine will push `startTime.getTime()` and pop it then push `endTime.getTime()` and pop it
11. Line 6: Engine will push `console.log(`${timeDiff / 1000} seconds`);` and pop it
12. Line 6: Engine will push `console.log('setTimeout callback is executed');` and pop it


---

#### Example: 18.1

```javascript
console.log('start');
const startTime = new Date();
setTimeout(function() {
	const endTime = new Date();
	const timeDiff = endTime.getTime() - startTime.getTime();
	console.log(`${timeDiff / 1000} seconds passed`);
	console.log('setTimeout callback is executed');
}, 1000);

let i = 0;
while(true) {
	if(i >= 10000000000) {
		break;
	}
	i++;
}
console.log('end');
// start
// end
// 12.058 seconds passed!
// setTimeout callback is executed
```

