## Classes / Objects

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

### The following will happen when you call a function with `new` keyword

1. A new object gets created (let's call it O).
2. O gets linked to another object, called its `prototype`.
3. The function's `this` value is set to refer to O.
4. The function implicitly returns O.


#### Example 12.1:


```javascript

//This is called constructor function, basically this is the class constructor
function Person(firstName , lastName , job){
	this.firstName = firstName;
	this.lastName = lastName;
	this.job = job;
	this.printName  = function(){
		console.log(this.firstName +  " " + this.lastName);
	}
}

//create 2 instances of Person class using new keyword with its constructor function
var person1 = new Person("Amr" , "Labib" , "Software Engineer");
var person2 = new Person("John" , "Adam" , "Doctor");

console.log(person1.job); //Software Engineer
person1.printName(); //Amr Labib

console.log(person2.job); //Doctor
person2.printName(); //John Adam

```

**Note:**
When we define a constructor function as in the previous example, by convention we capitalize the first letter in the function name, so constructor functions should start with capitalized letter.


---

### Javascript `prototype`

Every javascript object created using `new` keyword will contain an object called `prototype`.

We usually use object `prototype` for: 

1. Properties sharing between multiple instances of the same class

2. Inheritance between classes/objects.

---

#### Example 12.2:

In this example we will see how we can use object `prototypes` to share `printName` method.

```javascript

function Person(firstName){
	this.firstName = firstName;
}

//Here we define a new method called printName that will be shared by all instances created from Person class
Person.prototype.printName = function(){
	console.log(this.firstName);
}

var person1 = new Person("Amr");
var person2 = new Person("John");

//Both instances share the same method printName
person1.printName(); //Amr
person2.printName(); //John

```

---

### Prototype Chain

From Example 12.2 we can see that we can call `printName` method on both instances `person1` and `person2`.

Javascript will check first if the current object instance has a property called `printName` if its not found it will start looking for that property inside the Object prototype, this is called prototype chain

---

### Why to use Object `prototype` ?

Now we have a very important question, why can't we just define `printName` method inside Person class as a class property like `firstName` ?

* We can do that, but using `prototype` will give us a better memory performance, as we are not creating the function `printName` with each `Person` instance instead we have a single `printName` function that is shared by all created instances `person1` and `person2`.

---

### `prototype` object notes:

1. `prototype` is set automatically when we create an object instance using `new` keyword

2. We set `prototype` only on the Object not on the object instance, as we can see in Example 12.2 we set `printName` function on `Person` not on `person1` or `person2`

3. Using `prototype` will give a better memory performance specially when we need to create multiple instances of an Object as we create the function once instead of creating it with each instance.

---

### Difference between `prototype` and `__proto__`

* `prototype` is associated with Objects `Person.prototype.printName()` is valid while `person1.prototype` is `undefined`

* `__proto__` is associated with objects instances `person1.__proto__.printName()` is valid while `Person.__proto__` is `undefined`

In few words `__proto__` is created from `prototype` and we should never change the value of `__proto__`

---

### Object inheritance using `prototype`

In the previous examples we learned how we use object `prototype` to make multiple instances share a specific method, and how this is good interms of performance.

Now we will see how to make Object inheritance, where we can have a subclass that inherit all properties and methods from a base class using `prototype`

#### Example 12.3

```javascript


//Base class Person
function Person (firstName , lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

//printName method is defined in base class prototype
Person.prototype.printName = function(){
	console.log(this.firstName + " " + this.lastName);
}

//Subclass Engineer
function Engineer(firstName , lastName , job) {
	//The line below is to adjust this context for inheritance
	//Remember calling a function using call will make sure that the function `this` context is changed to whatever object is passed in the first argument.
	//Here we call Person constructor with Engineer `this` context
	Person.call(this, firstName , lastName);

	this.job  = job;
}
//This line will make sure that Engineer prototype is referencing its base class Person prototype
Engineer.prototype = Object.create(Person.prototype);
//We need this line because now constructor function of prototype object is set to Person constructor, so we need to change the reference back to Engineer constructor
Engineer.prototype.constructor = Engineer;

//printNameWithJob method is defined in sub class prototype only
Engineer.prototype.printNameWithJob = function() {
	console.log(this.firstName + " " + this.lastName + ", " + this.job)
}


var person1 = new Person("Amr" , "Labib");
var engineer = new Engineer("Amr" , "Labib" , "Software Engineer");


person1.printName(); //Amr Labib
engineer.printName();//Amr Labib  ---> this method is inherited from base class Person
engineer.printNameWithJob();//Amr Labib, Software Engineer  ---> this method is inherited from
person1.printNameWithJob(); //Uncaught TypeError: person1.printNameWithJob is not a function --> because printNameWithJob is defined in subclass only

```

---

### Class static methods

We usually create static methods when we need to add a utility function to a class, that can be called with any arguments, example `Math.abs(-2)` will return `2`


#### Example 12.4

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

---