# Value Or Reference

### Variable assignment by (Value Or Reference):
* **Primitive types** are assigned by value **(Boolean, Null, Undefined, Number, String, Symbol (new in ES 6))**

* **Non Primitive types** are assigned by reference **(Object, Array , Functions)**


#### Example 2.0:
Primitive data types are saved in stack directly.

Both `x` and `y` hold the same value but each one has its own copy in memory.

```javascript

var x = 1; //x is initialized by 1
var y = x; //y is initialized by 1


/*
Stack
-----
| 1 | x
-----
-----
| 1 | y
-----
*/


x+=1;  // x is incremented, and since numbers are immutable type, the variables x will be assigned to a new object and will keep the old value as is because its immutable.

/*
Stack
-----
| 1 | x
-----
-----
| 2 | y
-----
*/

console.log(x); // 2
console.log(y); // 1 because y is still holding the old value.

```


#### Example 2.1:
Non Primitive data types actual values are saved in heap, while variables are saved in stack with the memory location in heap.

Both `x` and `y` are holding memory locaion where the array is saved.


```javascript

var x = [1,2,3];
var y = x;

/*
Stack          Heap (memory 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3]   |
------         |           |
|0101| y  ---> |           |
------         -------------
*/


x.push(4);


/*
Stack          Heap (memory 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3,4] |
------         |           |
|0101| y  ---> |           |
------         -------------
*/

console.log(x); //[1,2,3,4]
console.log(y); //[1,2,3,4]

```

#### Example 2.2:

Equality with primitives

```javascript

var x = 1;
var y = x;
var z = 1;

/*
Stack
-----
| 1 | x
-----
-----
| 1 | y
-----
-----
| 1 | z
-----
*/

console.log(x == y) //true ---> comparing 1 == 1
console.log(x == z) //true ---> comparing 1 == 1
```

#### Example 2.3:

Equality with non primitives

```javascript

var x = { name : "Amr"};
var y = x;
var z = { name : "Amr"};

/*
Stack          Heap (memory 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3,4] |
------         |           |
|0101| y  ---> |           |
------         -------------

               Heap (memory 0110)
------         -------------
|0110| z  ---> | [1,2,3,4] |
------         -------------
*/

console.log(x == y) //true ---> comparing 2 identical memory locations 0101 == 0101 is true
console.log(x == z) //false ---> although both arrays are exactly the same but the result is false because we are comparing 2 different memory locations 0101 == 0110 is false

```

