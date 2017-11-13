//What is a scope ?
//A scope is where a variable can be accessed inside your code.


//Why Scope matters ?
//The existance of scope is important to keep a maintanable less colliding code, this will help in separating libraries variables, from your own program variables.
//Resulting in code with less errors


//In Javascript we have 2 main types of scopes and 1 derived from compining local scopes
//1- Global Scope: Any variable defined outside all the functions and objects in our code, usually can be accessed under the window object in all browsers.
//2- Local Scope : Any variables defined inside a function is accessible inside that function only
//3- Lexical Scope (nested scopes): Any variables defined inside a function where this function contains another function, we can consider this as a nested local scopes.



//Function scope:
//In javascript variables can be scoped by functions.

//Lets check the example below:
//we will start every variable name with its scope type example: globalVarName , localVarName, lexicalVarName

var globalName = "amr";

function scopeFunction() {

    globalMessage = "hello"; //Defined without using var keyword thats why its a global variable.

    var localName = "labib"; //Scoped by the current function

    console.log(localName);
}

scopeFunction();

console.log(globalName);       //amr  ->  global variable, defined in the global scope
console.log(globalMessage);    //hello -> global variable because its defined without using var keyword
console.log(localName);        //undefined  -> local variable because its scoped by scopeFunction function




// No Block scope (if, for, while, switch, ...): any variable defined inside a block statement will take the parent scope, usually global scope if defined in global context
// ES6: in ES6 you can use let inside block statement to scope the vairable.

//Example:
if (true) {
    var globalJob = "Software Engineer"; //block statement does not create new scope for variables
    let localTitle = "Mr"; //we can define local variables inside block statement using es6 let keyword
}
console.log(globalJob);  //Software Engineer -> global variable because its defined inside a block statement
console.log(localTitle); //undefined ->  local variable defined with let inside block statement



//Variable hoisting: Hoisting is the ability to use a variable before its declaration, its very important to understand that hoisting is applied to declaration not initialization.
//The example below: Although the variable is defined after the console.log line but the value is printed correctly, this is called variable hoisting
console.log(globalHoistedNum); //10 -> global hoisted variable
var globalHoistedNum = 10;


//Scope Chain: It’s always the position in the code that defines the scope. When resolving a variable, JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for.


//Closure: a closure is an inner function that has access to the outer (enclosing) function's variables
var testClosure = function() {
    var counter = 0; //counter is a private property
    return function() {
        return counter += 1;
    }
};

var add = testClosure();

add();
add();
add();



//In javascript when we use a variable we are using a reference to that variables.

//In the example below: console.log(y) will print 2 not 1 because this assignment operation y = x means that i need to keep a reference to x saved by y,
//so whenever x is changed y will also return the changed number because it is saving a reference to a value.

var x = 1;
var y = x;

x+=1;
console.log(y);

//Capture variable values using closure: we can use closure to help us capture a variable value in specific time before it get changed,
//as we leared in the previous section that we save a reference to the variable.

//Example:


var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    printValuesArr.push(function(){
        console.log(i);
    });
}

//All the calls below will print 10, this is because the console.log inside each function is having a reference to i variables,
//which already changed to become 10.
printValuesArr[0]();
printValuesArr[5]();
printValuesArr[9]();


//Now we need to capture the value of i inside each loop using closure
var printValuesArr = [];
for(var i = 0 ; i < 10 ; i++)
{
    var captureValue = function(value){
        return function(){
            console.log(value);
        }
    }

    printValuesArr.push(captureValue(i));
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9



//Resources
//https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
//http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
