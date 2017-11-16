# Closure
A closure is an inner function that has access to the outer (enclosing) function's variables, in JavaScript, if you use the function keyword inside another function, you are creating a closure.

#### Example 4.0:
```javascript
var testClosure = function() {
    var counter = 0; //counter is a private property
    return function() {
        return counter += 1;
    }
};

var add = testClosure();

add();
add();
add();
```

---

### Capture variable values using closure:

we can use closure to help us capture a variable value in specific time before it get changed.

#### Example 4.1:
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

#### Example 4.2:
Capture the value of `i` inside each loop using closure

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
