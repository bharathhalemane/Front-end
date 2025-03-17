// Date: 2025-03-17
// Creator: Bharath
// Description: This is my first practice file in java script

//1.  let, var and const
// let and const are block-scoped, while var is function-scoped.
// var can be redeclared and updated, while let can be updated but not redeclared.
// const cannot be redeclared or updated.


let greet = "hello!";
console.log(greet);

var fullName = "Bharath Halemane.";
console.log(fullName);



function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);     // ✅ Works, because var is function-scoped
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);     // ❌ ReferenceError: y is not defined
}

testVar();              // ✅ 10
// testLet();           // ❌ ReferenceError: y is not defined

const PI = 3.14;
// PI = 3.15;           // ❌ TypeError: Assignment to constant variable.

console.log(PI);        // TypeError will be thrown and the code will not be executed.

