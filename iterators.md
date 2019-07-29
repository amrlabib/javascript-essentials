
# Iterable and Iterator Protocols

As ES6 introduced new syntax, it also introduced new protocols, these protocols can be implemented by any object respecting some conventions.

---

## Iterable protocol:

iterable protocol allows javascript objects to define or customize their iteration behavior such as what values are looped over in a `for .. of` construct.

### Iterable Built-in types:

some types has built-in interation behavior, this means that you can directly contrcut `for .. of` on these types example:

1. Array
2. Map
3. String

#### Example 14.0:

```javascript
const myArray = [1,2,3];
for(const num of myArray) {
	console.log(num);
}

// 1
// 2
// 3

```

As we can see in this example myArray (of type `Array`) has a built-in iteration behavior

---

### Non-iterable type: 

An example of non iterable type is `Object`, but we can make an `Object` iterable by implementing `@@iterator` method, this means that the Object or its prototype needs to have a property with key `@@iterator` this is available via a constant `Symbol.iterator`


`Symbol.iterator` is a zero argument function that returns an object, conforming to the iterator protocol


---


## Iterator protocol:

Iterator protocol defines a standard way to produce a sequence of values, an object is iterator when it implements a `next()` method with the following semantics

1. 0 argument function `next()` that returns an object 
2. The returned object should contain 2 properties `done` (Boolean) and `value` (Any javascript type value)

---


## How to make an iterable object

As we discussed for an object to be iterable it has to contain a property with key `Symbol.iterator` that contains a 0 argument function, where that function should return an iterator Object that contains `next()` method, where that method returns an Object that contains `value` and `done` properties :D !!!


#### Example 14.1: 

```javascript
let numbersIterable = {};
// After implementing `Symbol.iterator` numbersIterable became iterable object
numbersIterable[Symbol.iterator] = function() {
    let number = 0;
    // This returned object is called iterator object
    return {
        next: function() {
            if(number < 10) {
                return { done: false, value: ++number };
            } else {
                return { done: true };
            }
        }
    }
}
// for..of is introduced in ES6 and it is a consumer to iterables, you can't use for..of on non iterable objects
// Since we change `numberIterable` to be iterable now we can use for..of
for(let num of numbersIterable) {
    console.log(num);
}
```

---

## How to make an iterator(not iterable) object

As we can see from example 14.1 we had to create iterator object to make `numberIterable` iterable, but it is very important to differentiate between `iterable` and `iterator`, in the next example we will create iterator

#### Example 14.2: 

```javascript
let numbersIterator = function(max) {
    let number = 0;
    return {
        next: function() {
            if(number < max) {
                return { done: false, value: ++number };
            } else {
                return { done: true };
            }
        }
    }
}
const myNumbersIterator = numbersIterator(6);
while (true) {
    const current = myNumbersIterator.next();
    console.log(current.value);
    if (current.done) {
        break;
    }
}
// 1 2 3 4 5 6 undefined
```
---

## Javascript iterable based constructs:

1. `for-of` loop
2. `[]` array destrcuturing pattern 
3. `...` spread operator
