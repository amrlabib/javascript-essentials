## Equality

In javascript equality comparison can be done using `==` or `===`

1. `==`:  operator will compare for equality after doing any necessary type conversions.

2. `===`:  operator will not do the conversion, so if two values are not the same type === will simply return false, else compare for equality.


#### Example 8.0:

```javascript

var x = 1;
var y = "1";

console.log(x == y) //true --> because type conversion is done and then values are compare

console.log( x === y ) //false  --> because types are different

```