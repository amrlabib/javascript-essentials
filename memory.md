## Memory:

It is very important to understand how memory allocation is done, javascript automatically allocates memory when objects are created and frees it when they are not used anymore(garbage collection)

---

## Memory life cycle:

1. Allocate the memory you need.
2. Use the allocated memory (read, write).
3. Release the allocated memory when it is not needed anymore.

---

## Primitive types memory size:

| Type | Size |
|---|---|
|`undefined`| 0 bytes |
|`boolean`| 4 bytes |
|`number`| 8 bytes |
|`string`| 2 bytes * number of characters |

---

#### Example 14.0:

```javascript
var num = 10; // allocates memory for number
var name = "Amr"; // allocates memory for string

var obj = {
  name: "Amr",
  job: "Software Engineer",
}; // allocates memory for object and contained values

var arr = ['a', 12]; // allocates memory for array and contained values
```

---

## Garbage Collector(Release memory):

Garbage collector is responsible for figuring out when an allocated memory is not needed anymore and then releasing this allocated memory back to the OS, the process of figuring out if an allocated memory is not needed anymore is not easy, but the main key for this is references.

### References

The main notion garbage collection algorithms rely on is the notion of reference. Within the context of memory management, an object is said to reference another object if the former has an access to the latter (either implicitly or explicitly). For instance, a JavaScript object has a reference to its prototype (implicit reference) and to its properties values (explicit reference).

### Reference-counting garbage collection algorithm:

This is the most naive garbage collection algorithm. This algorithm reduces the definition of `an object is not needed anymore` to `an object has no other objects referencing it`. An object is considered garbage collectible if there are zero references pointing at this object.

#### Example 14.1:


```javascript
var obj = {
  innerObj: {
    name: 'Amr',
  },
};
// { innerObj: { name: "Amr" }} has 1 reference => obj
// { name: "Amr" } has 1 reference => innerObj

// So far objects are still allocated in memory, none can be garbage-collected

var objNewRef = obj;
// { innerObj: { name: "Amr" }} has 2 references => obj + objNewRef
// { name: "Amr" } has 1 reference => innerObj

obj = 1;
// { innerObj: { name: "Amr" }} has 1 reference => objNewRef
// { name: "Amr" } has 1 reference => innerObj

var innerObjNewRef = objNewRef.innerObj;
// { innerObj: { name: "Amr" }} has 1 reference => objNewRef
// { name: "Amr" } has 2 reference => innerObj + innerObjNewRef

objNewRef = 1;

// { innerObj: { name: "Amr" }} has 0 reference => can be garbage collected
// { name: "Amr" } has 1 reference => innerObjNewRef

innerObjNewRef = 1;
// { name: "Amr" } has 0 reference => can be garbage collected
```

### Limitation: cycles
