## Closure: 
A closure is an inner function that has access to the outer (enclosing) function's variables, in JavaScript, if you use the function keyword inside another function, you are creating a closure.

#### Example 1.6:
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

As we already learned that we save a reference to the variable.

#### Example 1.7:
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

as we can see the example 1.6 the correct value of `i` is not captured because we are passing reference to i that already changed by the time we called the function.

#### Example 1.8:
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

    printValuesArr.push(captureValue(i));
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9
```
