## Type Coercion:

* Type coercion is the process of converting value from one type to another example: string to number, or number to string.
* Since javascript is a weakly typed language type coercion can be done to values implicitly or explicitly

### Explicit type conversion

When we convert value from type to another explicitly it is called type casting example: `Number('10')` this is a way of converting value from `string` to `number` explicitly

### Implicit type conversion(type coercion):

Implicit type conversion can happen when we apply some operators on values, example: `!10` here value 10 is converted from number to boolean implicitly with type coercion because of logical operator `NOT` that we added before the number

---

### Types of conversion

1. to string: Explicitly using `String(value)` or implicitly using `value + ''`
2. to boolean: Explicitly using `Boolean(value)` or implicitly using logical operators `(|| && !)`
3. to number: Explicitly using `Number(value)` or implicitly using more operators

#### Important note:
conversion logic for primitives and objects works differently but both can be converted to any of the three types mentioned above

---

## Conversion to string:

We can convert any primitive type to string explicitly using `String()` and we can do it implicitly using the `+` operator with a string


#### Example 19.0:

Conversion to string

```javascript
// Explicit conversion to string
String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'

// Implicit conversion to string
123 + ''                      // '123'
```

---

## Conversion to boolean:

We can convert any primitive to boolean type explicitly using `Boolean()` and we can do it implicitly using logical operators `(|| && !)`

#### Example 19.1:

Conversion to boolean

```javascript
// Explicit conversion to string
Boolean(2)        // true

// Implicit conversion to string
if (2) {  }       // if condition will return true
!2                // false
2 || 'hello'      // this will return 2
```

## Boolean implicit conversion will return operand value:

`||` and `&&` operators will do implicit conversion internally but it will return the operand value


---

## Conversion to number:

We can convert any primitive to number type explicitly using `Number()` and implicitly using the following operators

1. Comparison operators `>` `<` `<=` `>=`
2. Bitwise operators `|` `&` `^` `~`
3. Arithmetic operators `-` `+` `*` `/` `%` the `+` will not make number conversion if any side is string
4. Unary `+` operator
5. Loose equality operator `==` only when both sides are not strings and they are not `null` or `undefined`

```javascript
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```

---

## Some conversion values

```javascript
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
null == false                  // false -> because the false is coerced to 0 so the comaprison is null == 0
undefined == false             // false -> because the false is coerced to 0 so the comparison is undefined == 0
"1" == true                    // true  -> because the true is coerced to 1 and then the "1" is coerced to 1 so the comparison is 1 == 1
"0" == false                   // true  -> because the false is coerced to 0 and then the "0" is coerced to 0 so the comparison is 0 == 0
3 + "1"                        // "31" -> 3 will be coerced to "3"
3 + +"1"                       // 4 -> the right unary + will convert "1" to 1 and it will be 3 + 1 = 4
3 + true                       // 4 -> true is coerced to 1 so it will be 3 + 1
3 + false                      // 3 -> false is coerced to 0
true + false                   // 1 -> true is coerced to 1 and false is coerced to 0

```
