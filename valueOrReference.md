# Value Or Reference

### Variable assignment by (Value Or Reference):
**Primitive** types are assigned by value **(Boolean, Null, Undefined, Number, String, Symbol (new in ES 6))**

**Non Primitive** types are assigned by reference **(Object, Array , Functions)**


#### Example 1.5:
Primitive data types are saved in stack directly.

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

x+=1;  // x is incremented, and since numbers are immutable type, the varaibles x will be assigned to a new object and will keep the old value as is because its immutable.

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

#### Example 1.6:
Non Primitive data types are saved in heap, variables are just saved in stack with the memory location in heap

```javascript

var x = [1,2,3];
var y = x;

/*
Stack         Heap (memory 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3]   |
------         |           |
|0101| y  ---> |           |
------         -------------
*/

x.push(4);


/*
Stack         Heap (memory 0101)
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
