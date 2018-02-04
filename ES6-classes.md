## ES6 Classes

As we learned in javascript we can create a class by having a constructor function, this is a bit odd compared to all OOP languages like Java and C#.

In ES6 we can start writting classes in a very close way as normal OOP languages.

We will create [Example 12.3](classes-objects.md#example-123) using ES6 classes

#### Example 13.0:

```javascript
//Class Person
class Person {
	//define static utility function that just say hi
	static sayHi(firstName , lastName){
		console.log("Hi " + firstName + " " + lastName);
	}

	//constructor function
	constructor(firstName , lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	//class method -> note that this method is a prototype method not instance method
	printName(){
		console.log(this.firstName + " " + this.lastName);
	}
}

//Class Engineer inherit from Person
class Engineer extends Person{
	constructor(firstName , lastName , job) {
		//Call base class constructor
		super(firstName , lastName);

		//add subclass job property
		this.job = job;
	}

	//class method -> note that this method is a prototype method not instance method
	printNameWithJob(){
		console.log(this.firstName + " " + this.lastName + ", " + this.job)
	}
}

var person1 = new Person("Amr" , "Labib");
var engineer = new Engineer("Amr" , "Labib" , "Software Engineer");


person1.printName(); //Amr Labib
engineer.printName();//Amr Labib  ---> this method is inherited from base class Person
engineer.printNameWithJob();//Amr Labib, Software Engineer  ---> this method is inherited from
Person.sayHi("Amr" , "Labib")// Hi Amr Labib ----> this is a static utility function defined in Person class

person1.sayHi()// Uncaught TypeError: person1.sayHi is not a function ----> because sayHi is a static function and can't be called by a class instance instead it needs to be called on Class directly.
person1.printNameWithJob(); //Uncaught TypeError: person1.printNameWithJob is not a function --> because printNameWithJob is defined in subclass only
```