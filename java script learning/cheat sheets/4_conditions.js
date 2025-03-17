//4. conditions
// Conditions are used to perform different actions based on different conditions.
// if, else, else if, switch.

//1. if statement
// The if statement executes a block of code if a specified condition is true.
if (condition) {
    // code block
}

let a = 10;
let b = 20;

if (a < b) {
    console.log("a is less than b");
}
console.log();

//2. else statement
// The else statement executes a block of code if the same condition is false.
if (condition) {
    // code block
}
else {
    // code block
}

let c = 10;
let d = 20;

if (c > d) {
    console.log("c is greater than d");
}
else {
    console.log("c is less than d");
}
console.log();

//3. else if statement
// The else if statement executes a block of code if the same condition is false and another condition is true.
if (condition1) {
    // code block
}
else if (condition2) {
    // code block
}
else {
    // code block
}

let e = 10;
let f = 20;

if (e > f) {
    console.log("e is greater than f");
}
else if (e < f) {
    console.log("e is less than f");
}
else {
    console.log("e is equal to f");
}
console.log();

//4. switch statement
// The switch statement is used to perform different actions based on different conditions.
// Use the break keyword to prevent the code from running into the next case.
// The default keyword specifies the code to run if there is no case match.
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}

let g = 2;

switch (g) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other");
}
console.log();

//5. ternary operator
// The ternary operator is the only JavaScript operator that takes three operands.
// The operator can have one of two values based on a condition.
// Syntax: condition ? value1 : value2
let h = 10;
let i = 20;

let result = (h < i) ? "h is less than i" : "h is greater than i";
console.log(result); //output:- h is less than i
console.log();

//6. nested if statement
// You can use if...else inside another if...else.
let j = 10;
let k = 20;
let l = 30;

if (j > k) {
    if (j > l) {
        console.log("j is the largest number");
    }
    else {
        console.log("l is the largest number");
    }
}
else {
    if (k > l) {
        console.log("k is the largest number");
    }
    else {
        console.log("l is the largest number");
    }
}
console.log();

//7. short-circuiting
// Short-circuiting is a technique used to avoid unnecessary computation.
// It is used in logical operators to improve performance.
// The && operator returns the first false value it encounters.
// The || operator returns the first true value it encounters.
let m = 10;
let n = 20;
let o = 30;

if (m > n && m > o) {
    console.log("m is the largest number");
}
else if (n > m && n > o) {
    console.log("n is the largest number");
}
else {
    console.log("o is the largest number");
}
console.log();

//8. truthy and falsy values
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).
let p = 10;
let q = 20;

if (p) {
    console.log("p is truthy");
}
else {
    console.log("p is falsy");
}

if (q) {
    console.log("q is truthy");
}
else {
    console.log("q is falsy");
}
console.log();



