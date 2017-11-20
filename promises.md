## Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

### Promise has 3 states:

1. Pending: initial state, neither fulfilled nor rejected.

2. Fulfilled: meaning that the operation completed successfully.

3. Rejected: meaning that the operation failed.

### How to create a promise:

A Promise object is created using the `new` keyword with its constructor, this constructor will accept one function argument called "Executer function".

The Executer function will accept two functions as parameters:

1. resolve: called when asynchronous task completes successfully and returns the results of the task as a value.

2. reject : called when the task fails, and returns the reason for failure, which is typically an error object.

#### Example 10.0:

We will follow the same examples used in callback, and see how they will work with promise

```javascript

var x = 1;

function incrementValue(){
    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){ //to be able to reach reject change setTimeout to setTTimeour to result in an error and end inside catch and finally call reject
                x++;
                resolve(x);
            },1000);
        }
        catch(error){
            reject(error);
        }
    });
}

incrementValue()
.then(function(incrementedValue){
    console.log(incrementedValue);
})
.catch(function(error){
    console.log(error);
});



```

---

### Promise Chaining:

Promise chaining is to return new promise in resolve function of previous promise, its very helpful in situation where multiple async operations needs to be executed sequentially 

#### Example 10.1:

Now we see how promise chain, fix callback hell that result from nested async operations, this example is a copy from [Example 9.4](callbackFunctions.md#example-94) but instead of using nested callback functions we will use promise chaining

```javascript
var x = 1;

function asyncIncrementOne(){

    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=1;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}


function asyncIncrementTwo(){
    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=2;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}

function asyncIncrementThree(){
    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=3;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}

incrementValueOne()
.then(function(asyncIncrementOne){
    console.log(asyncIncrementOne);
    return asyncIncrementTwo();
})
.then(function(asyncIncrementTwo){
    console.log(asyncIncrementTwo);
    return asyncIncrementThree();
})
.then(function(asyncIncrementThree){
    console.log(asyncIncrementThree);
})
.catch(function(error){
    console.log(error);
});

//result
//2
//4
//7


```

---

### `Promise.all`:

Sometimes we encouter a situation where we need to get a final value or execute specific function after a set of non related async operations are all done, this is when `Promise.all` will be useful.

`Promise.all` will accept an array of Promise objects, and when all of them are fulfilled it will fire one `then` containing the result.

#### Example 10.1:

We will get the result of our three async functions inside one `.then` function.

```javascript

var x = 1;


function asyncIncrementOne(){

    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=1;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}


function asyncIncrementTwo(){
    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=2;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}

function asyncIncrementThree(){
    return new Promise(function(resolve , reject){
        try{
            setTimeout(function(){
                x+=3;
                resolve(x);
            },1000);   
        }
        catch(error){
            reject(error);
        }
    });
}

Promise.all([asyncIncrementOne() , asyncIncrementTwo() , asyncIncrementThree()])
.then(function(results){
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})
.catch(function(error){
    console.log(error);
});

//result
//2
//4
//7

```

