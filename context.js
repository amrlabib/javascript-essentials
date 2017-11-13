/*
All cases of this context:

1- Global Execution context:
this is when we call a function in the global window context

2- Eval:
-Direct call to evan, will keep this context as is not changed, as the execution context of its caller
-Indirect call 


3- Entering function code:
-If the function is called on object the this value is bound to that object
-If the function is just called , this is bound to global object

4- Special case functions like , bind,call,apply can change this context

5- Construction of new Object: when we use new key word to construct a new object, this is bound to the new created object.

*/


////


var myObject = {
  myFunc : function(){
    console.log(this);
  }
}



myObject.myFunc(); //this line will print this as MyObject because the function is called on an object

var temp = myObject.myFunc;
temp(); //this line will print window because the function is called and executed without an object









function myFun() {
    console.log(this);
}
var obj = {
    myMethod : function () {
        eval("myFun()");
    }
};
obj.myMethod(); //this will print window because the eval called the myFunc function without an object





