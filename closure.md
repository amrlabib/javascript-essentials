# Closure
A closure is an inner function that has access to the outer (enclosing) function's variables and parameters, in JavaScript, if you use the function keyword inside another function, you are creating a closure.

Notes about closures:
* Closure will have access to its containing function variables and parameters even after the containing function is returned.
* Inner function will have a reference to its containing function variables not a copy, this means that if the containing function variable is changed the inner function will have the updated value.

#### Example 4.0:
```javascript
var testClosure = function() {
    var counter = 1; //counter is a private property
    return function() {
        return counter += 1;
    }
};

var add = testClosure();

add();
add();
console.log(add()); 4 --> because counter is incremented to 3 times
```

#### Example 4.1:

Closure function has reference to variables in containing function, not a copy

```javascript

var testClosure = function(){
    var counter = 1;
    var printCounter = function(){
        console.log(counter);
    }

    counter++;

    return printCounter;
}

var printCounterValue = testClosure();

printCounterValue(); //2  --> because value is incremented and inner function has reference to its containing function variables not copy

```

---


### Capture variable values using closure:

we can use closure to help us capture a variable value in specific time before it get changed.

#### Example 4.2:
```javascript
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    printValuesArr.push(function(){
        console.log(i);
    });
}

//All the calls below will print 10, this is because the console.log inside each function is having a reference to i variables,
//which already changed to become 10.
printValuesArr[0](); //10
printValuesArr[5](); //10
printValuesArr[9](); //10
```

as we can see the example 4.1 the correct value of `i` is not captured because the value of `i` already changed by the time we called the function.

#### Example 4.3:
Capture the value of `i` inside each loop using closure fix [Example 4.2](closure.md#example-42)

```javascript
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    var captureValue = function(value){
        return function(){
            console.log(value);
        }
    }

    //the line below will capture the value of i because of execution context.
    //remember that each function has its own execution context, this is how closure is capturing the value of i.
    //the key point here is that we executed the function captureValue with specific i value, and it return a new function that is saving the parent function parameter value (i) correctly.
    printValuesArr.push(captureValue(i));
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9
```
