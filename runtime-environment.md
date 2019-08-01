# Runtime Environment

* Javascript runtime environment is the big picture for a javascript program execution, runtime environment is where your javascript code will be executed by utilizing a set of components together.

* Javascript runtime environment is the reason why we can write asynchronous code given that javascript is single threaded and synchronous, runtime environment will provide us with apis to be able to write asynchronous code.

* Javascript runtime environment is responsible for providing apis to interact with the host application

	* Examples: 
	
		1. Browser runtime environment will provide us with Wep Apis Example `DOM`, `XMLHttpRequest`, `setTimeout`, `setInterval` ... etc 
		2. Node runtime environment will provide us with `FileSystem`, `http` ... etc

### Runtime Environment main components:

1. [Javascript Enginer](engine.md)
2. Environment Apis, Examples: [Browser Web Apis, Node Server Apis, ... etc]
3. Callback Queue
4. Event Table
5. Event Loop
