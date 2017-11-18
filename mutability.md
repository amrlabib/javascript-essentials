## Mutability:

An immutable object is an object whose state cannot be modified after it is created, while a mutable object, can be modified after it is created.

* **Immutable data types:**  [ `Boolean` , `Null` , `Undefined` , `Number` , `String` , `Symbol` (new in ECMAScript 6)  ]


* **Mutable data types:** [ `Object` , `Array` , `Function` ]

---

#### Example 7.0:

Changing a variable value from `1` to `2` means creating a new memory location for value 2, because numbers are immutable.

```javascript

var x = 1;

/*
Memory
-----
| 1 | x
-----
*/

x = 2;

/*
Memory
-----
| 1 |
-----
| 2 | x
-----
*/


```

#### Example 7.1:

changing object from  `{ x : 1  }` to  `{x : 1 , y : 2}` will change it in the current memory location without creating any new object for it.

```javascript

var obj = {
	x : 1
}

/*
Stack          Heap (memory location 0101)
------         -------------
|0101| obj --> | { x : 1 } |
------         -------------
*/

obj.y = 2;

/*
Stack          Heap (memory location 0101)
------         -----------------
|0101| obj --> | { x:1 , y:2 } |
------         -----------------
*/


```

---

### Why Mutability Matters:

We care about mutability mainly because of equality comparison, immutable data types are more reliable than mutable.

#### Example 7.2:

Immutable comparison

```javascript

var x = 1;
var y = x;

x = 2;

console.log(x == y); //false --> because changing x to be equal to 2 created new memory location for it and kept the old value 1 as saved in y.

```

#### Example 7.3:

Mutable comparison

```javascript

var x = [1,2,3,4];
var y = x;

x.push(5);

console.log(x == y); //true --> because arrays are mutable and pushing number 5 is applied to both x and y, this is one of the bad things about mutable data types

```

**Aside:** React is an example for a library that really care about mutability, because ok its architecture the way it depened mainly on `state` and `props` comparison to decide when to render components, thats why its really popular statement that you should never mutate `state` or `props` instead creating new object to make it clear for react that the state actually changed.

---

### Avoid mutable data types comparison issue by making copy instead of reference

1. `Objects` : we can make a deep copy of objects using `JSON.parse(JSON.stringify(obj));`, or Object.freeze(obj) that will not allow property changes in object.

2. `Array` : we can use multiple ways to clone an array like loop, `slice`, and `concat`


#### Example 7.4:

Deep copy object

```javascript

var obj1 = {
	x : 1
};

var obj2 = JSON.parse(JSON.stringify(obj1)); //Deep copy

obj1.x = 2;

console.log(obj1); //{x: 2}
console.log(obj2); //{x: 1}
console.log(obj1 == obj2) //false

```

#### Example 7.5:

Copy Array

```javascript

var arr1 = [1,2,3];

var arr2 = arr1.concat(); //use concat without any argument to clone arr1

arr1.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3]
console.log(arr1 == arr2) //false

```

