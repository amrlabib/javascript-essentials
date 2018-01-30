## Objects

In javascript we can create an object using multiple ways, we will mention the most 2 common and used ways

1. Object literal : `var obj = { first : "Amr" , last : "Labib" }`

2. using `new` keyword:  `var obj = new MyObjContructor("Amr" , "Labib")`

I believe that the above 2 ways can be used to cover any use case for creating an object.

---

### Object literal

We use object literal, when we have a simple object with key-value pairs and we don't need to have multiple instances of that Object, in another word with singleton pattern.

#### Example 12.0:

```javascript

var person = {
	firstName : "Amr",
	lastName : "Labib",
	job : "Software Engineer",
	printName : function() {
		console.log(this.firstName +  " " + this.lastName);
	}
}

console.log(person.job); //Software Engineer
person.printName(); //Amr Labib

```

---

### Using `new` keyword:

We use `new` keyword when we start working with javascript in an OOP (Object Oriented Programming) way.
So to make use of Class multiple instances creation, constructors, inheritance and static functions we need to create our object using `new` keyword


#### Example 12.1:


```javascript

function Person(firstName , lastName , job){
	this.firstName = firstName;
	this.lastName = lastName;
	this.job = job;
	this.printName  = function(){
		console.log(this.firstName +  " " + this.lastName);
	}
}

var person1 = new Person("Amr" , "Labib" , "Software Engineer");
var person2 = new Person("John" , "Adam" , "Doctor");

console.log(person1.job); //Software Engineer
person1.printName(); //Amr Labib

console.log(person2.job); //Software Engineer
person2.printName(); //John Adam

```

**Note:**
When we define a function as a class constructor as in the previous example, by convention we capitalize the first letter in the function name.

So constructor functions should start with capitalized letter.


---

### Javascript `prototype`

Every javascript object created using `new` keyword will contain an object called `prototype`.

we usually use object `prototype` for properties inheritance.

#### Example 12.2:

In this example we will see how we can use object `prototypes` to inherit `printName` method.

```javascript

function Person(firstName){
	this.firstName = firstName;
}

Person.prototype.printName = function(){
	console.log(this.firstName);
}

var person1 = new Person("Amr");
var person2 = new Person("John");

person1.printName(); //Amr
person2.printName(); //John

```

---

### Prototype Chain

From Example 12.2 we can see that we can call `printName` method on both instances `person1` and `person2`.

Javascript will check first if the current object instance has a property called `printName` if its not found it will start looking for that property inside the Object prototype, this is called prototype chain

---

### Why to use Object `prototype` ?

Now we have a very important question, why can't we just define `printName` method inside Person class ?

* We can do that, but using `prototype` will give us a better memory performance, as we are not creating the function `printName` with each `Person` instance instead we have a single `printName` function that is shared by all created instances `person1` and `person2`.

---

### `prototype` notes:

1. `prototype` is set automatically when we create an object instance using `new` keyword

2. We set `prototype` only on the Object not on the object instance, as we can see in Example 12.2 we set `printName` function on `Person` not on `person1` or `person2`

3. Using `prototype` will give a better memory performance specially when we need to create multiple instances of an Object as we create the function once instead of creating it with each instance.

---

### Difference between `prototype` and `__proto__`

* `__proto__` is associated with objects instances `person1.__proto__.printName()` is valid while `Person.__proto__` is `undefined`

* `prototype` is associated with Objects `Person.prototype.printName()` is valid while `person1.prototype` is `undefined`

In few words `__proto__` is created from `prototype` and we should never change `__proto__`

---

### Static methods

We usually create static methods when we need to add a utility function to a class, that can be called with any arguments, example `Math.abs(-2)` will return `2`


#### Example 12.3

```javascript

var Calculator = function(){

}

Calculator.sum = function(num1 , num2){
	return num1 + num2;
}

var calc1 = new Calculator();

console.log(Calculator.sum(1,2)); //3 ---> we can call sum directly on Calculator class
console.log(calc1.sum(1,2)); //Uncaught TypeError: calc1.sum is not a function ---> because sum is a static function.

```

As we can see in this example we can call `sum` method without creating an instance of Calculator class, also if we tried to access `sum` method from an instance it will return an error because its a static method.

