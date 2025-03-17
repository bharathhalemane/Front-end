//5. functions
// Functions are a group of statements that perform a task.
// Functions are reusable.
// Functions can take parameters and return values.
// Functions are objects.

// Function Declaration
function greet() {
    console.log("Hello!");
}
greet();    //output:- Hello!

// Function Expression
const greet = function () {
    console.log("Hello!");
};
greet();    //output:- Hello!

// Function with parameters
function greet(name) {
    console.log("Hello " + name + "!");
}
greet("Bharath");    //output:- Hello Bharath!

// Function with return value
function greet(name) {
    return "Hello " + name + "!";
}
console.log(greet("Bharath"));    //output:- Hello Bharath!

// Function with multiple parameters
function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old.";
}
console.log(greet("Bharath", 25));    //output:- Hello Bharath! You are 25 years old.

// Function with default parameters
function greet(name = "Bharath", age = 25) {
    return "Hello " + name + "! You are " + age + " years old.";
}
console.log(greet());    //output:- Hello Bharath! You are 25 years old.

// Function with rest parameters
function greet(...args) {
    return args;
}
console.log(greet("Bharath", 25, "India"));    //output:- [ 'Bharath', 25, 'India' ]
// Functions can also be defined using arrow functions.
// Arrow functions are more concise and easier to read.
// Arrow functions do not have their own this value.
// Arrow functions do not have their own arguments object.
// Arrow functions cannot be used as constructors.

// Arrow function
const greet = () => {
    console.log("Hello!");
};
greet();    //output:- Hello!

// Arrow function with parameters
const greet = (name) => {
    console.log("Hello " + name + "!");
};
greet("Bharath");    //output:- Hello Bharath!

// Arrow function with return value
const greet = (name) => {
    return "Hello " + name + "!";
};
console.log(greet("Bharath"));    //output:- Hello Bharath!

// Arrow function with multiple parameters
const greet = (name, age) => {
    return "Hello " + name + "! You are " + age + " years old.";
};
console.log(greet("Bharath", 25));    //output:- Hello Bharath! You are 25 years old.

// Arrow function with default parameters
const greet = (name = "Bharath", age = 25) => {
    return "Hello " + name + "! You are " + age + " years old.";
};
console.log(greet());    //output:- Hello Bharath! You are 25 years old.

// Arrow function with rest parameters
const greet = (...args) => {
    return args;
};
//output:- [ 'Bharath', 25, 'India' ]

// Functions can also be defined using the Function constructor.
// The Function constructor creates a new Function object.
// The Function constructor takes any number of arguments.
// The last argument is the function body.
// The Function constructor is not recommended for use.
// The Function constructor is slower than function declarations and expressions.

// Function constructor
const greet = new Function("name", "return 'Hello ' + name + '!';");
console.log(greet("Bharath"));    //output:- Hello Bharath!

// Functions can be called using the call() and apply() methods.
// The call() method calls a function with a given this value and arguments provided individually.
// The apply() method calls a function with a given this value and arguments provided as an array.

// call() method
//output:- Hello Bharath!

// apply() method
//output:- Hello Bharath!

// Functions can be nested inside other functions.
// Nested functions have access to the variables of the outer function.
// Nested functions can be returned from the outer function.

// Nested function
function outer() {
    let name = "Bharath";

    function inner() {
        return "Hello " + name + "!";
    }

    return inner();
}
console.log(outer());    //output:- Hello Bharath!

// Functions can be stored in variables.
// Functions can be passed as arguments to other functions.
// Functions can be returned from other functions.

// Function stored in a variable
const greet = function () {
    return "Hello!";
};
//output:- Hello!
// Function passed as an argument
function greet(fn) {
    return fn();
}
//output:- Hello!
// Function returned from another function
function outer() {
    return function () {
        return "Hello!";
    };
}
//output:- Hello!
// Functions can be self-invoking.
// Self-invoking functions do not require a function name.
// Self-invoking functions are invoked immediately after their definition.

// Self-invoking function
(function () {
    console.log("Hello!");
})();    //output:- Hello!


