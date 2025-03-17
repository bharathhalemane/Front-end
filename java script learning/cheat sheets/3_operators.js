//3. operators
// JavaScript has the following types of operators:
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. String operators
// 7. Conditional (ternary) operator
// 8. Comma operator
// 9. Unary operators
// 10. Relational operators
// 11. Spread operator
// 12. Destructuring assignment
// 13. typeof operator
// 14. instanceof operator

// 1. Arithmetic operators
// Arithmetic operators are used to perform arithmetic on numbers.
// Addition (+), Subtraction (-), Multiplication (*), Division (/), Exponentiation (**), Modulus (%), Increment (++), Decrement (--).

let a = 10;
let b = 20;

console.log(a + b);     //output:- 30
console.log(a - b);     //output:- -10
console.log(a * b);     //output:- 200
console.log(a / b);     //output:- 0.5
console.log(a ** b);    //output:- 100000000000000000000
console.log(a % b);     //output:- 10
console.log(a++);       //output:- 10
console.log(a);         //output:- 11
console.log(b--);       //output:- 20
console.log(b);         //output:- 19
console.log(++a);       //output:- 12
console.log(--b);       //output:- 18   
console.log();

//operator precedence
// 1. ()
// 2. ++, --
// 3. **
// 4. *, /, %
// 5. +, -

let c = 10;
let d = 20;
let e = 30;

console.log(c + d * e);     //output:- 610
console.log((c + d) * e);   //output:- 900
console.log();

//for practice :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//2. Assignment operators
// Assignment operators are used to assign values to variables.
// =, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |=.

let x = 10;
let y = 20;

x += y;     // x = x + y
console.log(x);     //output:- 30

x -= y;     // x = x - y
console.log(x);     //output:- 10

x *= y;     // x = x * y
console.log(x);     //output:- 200

x /= y;     // x = x / y
console.log(x);     //output:- 10

x %= y;     // x = x % y
console.log(x);     //output:- 10

x **= y;    // x = x ** y
console.log(x);     //output:- 100000000000000000000
console.log();

//3. Comparison operators
// Comparison operators are used to compare two values.
// ==, ===, !=, !==, >, <, >=, <=.

let p = 10;
let q = 20;

console.log(p == q);    //output:- false
console.log(p === q);   //output:- false
console.log(p != q);    //output:- true
console.log(p !== q);   //output:- true
console.log(p > q);     //output:- false
console.log(p < q);     //output:- true
console.log(p >= q);    //output:- false
console.log(p <= q);    //output:- true
console.log();

//4. Logical operators
// Logical operators are used to determine the logic between variables or values.
// &&, ||, !.

let r = true;
let s = false;

console.log(r && s);    //output:- false
console.log(r || s);    //output:- true
console.log(!r);        //output:- false
console.log(!s);        //output:- true
console.log();

//5. Bitwise operators
// Bitwise operators are used to perform bitwise operations on integers.
// &, |, ^, ~, <<, >>, >>>.

let t = 10;
let u = 20;

console.log(t & u);     //output:- 0
console.log(t | u);     //output:- 30
console.log(t ^ u);     //output:- 30
console.log(~t);        //output:- -11
console.log(t << 1);    //output:- 20
console.log(t >> 1);    //output:- 5
console.log(t >>> 1);   //output:- 5
console.log();

//6. String operators
// The + operator can be used to concatenate (join) strings.
// The += operator can also be used to concatenate strings.

let v = "Hello";
let w = "World";

console.log(v + " " + w);    //output:- Hello World
console.log(v += " " + w);   //output:- Hello World
console.log();

//7. Conditional (ternary) operator
// The conditional operator assigns a value to a variable based on a condition.
// condition ? value1 : value2.

let x1 = 10;
let y1 = 20;

let result = (x1 > y1) ? "x1 is greater than y1" : "y1 is greater than x1";
console.log(result);    //output:- y1 is greater than x1
console.log();

//8. Comma operator
// The comma operator allows multiple expressions to be evaluated in a single statement.
// expr1, expr2, expr3, ...
// The value of the last expression is returned.

let x2 = 10, y2 = 20, z2 = 30;
console.log(x2, y2, z2);    //output:- 10 20 30
console.log();

//9. Unary operators
// Unary operators are used to perform operations on a single operand.
// +, -, ++, --, !, typeof, delete.

let x3 = 10;
let y3 = -20;

console.log(+x3);    //output:- 10
console.log(-y3);    //output:- 20
console.log(++x3);   //output:- 11
console.log(--y3);   //output:- -21
console.log(!true);  //output:- false
console.log(typeof x3); //output:- number
console.log(delete x3); //output:- false (delete operator returns true if the property is successfully deleted) 
console.log();

//10. Relational operators
// Relational operators are used to determine the relationship between two operands.
// in, instanceof.

let obj1 = { name: "Bharath", age: 25 };
console.log("name" in obj1);    //output:- true

let arr1 = [1, 2, 3, 4, 5];
console.log(5 in arr1);         //output:- false (5th index is not present in the array)
console.log(0 in arr1);         //output:- true (0th index is present in the array)

let date1 = new Date();
console.log(date1 instanceof Date);  //output:- true (date1 is an instance of Date)
console.log();

//11. Spread operator
// The spread operator allows an iterable to expand in places where 0+ arguments are expected.
// It copies properties from one object to another.

let obj2 = { name: "Bharath", age: 25 };
let obj3 = {obj2, city: "Bangalore" }; //copying properties from obj2 to obj3
console.log(obj3);    //output:- { name: 'Bharath', age: 25, city: 'Bangalore' } 
console.log();

//12. Destructuring assignment
// Destructuring assignment allows you to assign the properties of an array or object to variables.

let arr2 = [1, 2, 3, 4, 5];
let [a1, b1, c1, d1, e1] = arr2;
console.log(a1, b1, c1, d1, e1);  //output:- 1 2 3 4 5

let obj4 = { name: "Bharath", age: 25 };
let { name, age } = obj4;
console.log(name, age);    //output:- Bharath 25

let obj5 = { name1: "Bharath", age: 25, city: "Bangalore" };
let { name1, ...rest } = obj5;  //rest operator
console.log(name1);    //output:- Bharath
console.log(rest);    //output:- { age: 25, city: 'Bangalore' }
console.log();

//13. typeof operator
// The typeof operator returns the data type of a variable or an expression.

let num1 = 10;
let str1 = "Hello!";
let bool1 = true;
let und1 = undefined;
let nul1 = null; 

console.log(typeof num1);    //output:- number
console.log(typeof str1);    //output:- string
console.log(typeof bool1);   //output:- boolean
console.log(typeof und1);    //output:- undefined
console.log(typeof nul1);    //output:- object
console.log();

//14. instanceof operator
// The instanceof operator returns true if an object is an instance of a specific object.

let obj6 = { name: "Bharath", age: 25 };
console.log(obj6 instanceof Object);    //output:- true (obj6 is an instance of Object)

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3 instanceof Array);    //output:- true (arr3 is an instance of Array)
console.log();

