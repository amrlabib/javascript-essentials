## Equality

In javascript equality comparison can be done using `==` or `===`

1. Loose equality `==`:  operator will compare for equality after doing any necessary type conversions.

2. Strict Equality `===`:  operator will not do the conversion, so if two values are not the same type === will simply return false, else compare for equality.


#### Example 8.0:

```javascript

var x = 1;
var y = "1";

console.log(x == y) //true --> because type conversion is done and then values are compared

console.log( x === y ) //false  --> because types are different

```

---

### Primitive VS non primitive equality:

Its very important to understand how javascript compare primitives and non primitives in a completely different way.

1. Primitives: javascript will compare primitive types by value.

2. Non Primitives: javascript will compare non primitive types by reference, and by reference we mean comparing memory location referenced by that variable.


#### Example 8.1:

In the example below javascript will compare the values saved in `x`, `y` and `z`

```javascript

var x = 1;
var y = 1;
var z = 2;

console.log(x == y) //true
console.log(x == z) //false


```

#### Example 8.2:

In this example javascript will compare `x`, `y` and `z` by memory location where each variable is referencing.

```javascript

var x = { first : "Amr" , last : "Labib" };
var y = { first : "Amr" , last : "Labib" };
var z = x;

console.log(x == y) //false because x and y are both referencing a different memory location regardless of the object value.
console.log(x == z) //true because x and z are both referencing the same memory location
```

