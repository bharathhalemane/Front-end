//2. Data types
//Primitive data types
//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol
//7. BigInt
//
//Non-primitive data types
//1. Object
//2. Array
//3. Function
//4. Date
//5. RegExp
//6. Map
//7. Set
//8. WeakMap
//9. WeakSet
//10. Promise
//11. Error
//
let num = 10;
console.log(num);                           //output:- 10        

let str = "Hello!";
console.log(str);                           //output:- Hello!

let bool = true;
console.log(bool);                          //output:- true

let und = undefined;
console.log(und);                           //output:- undefined

let nul = null;
console.log(nul);                           //output:- null

let sym = Symbol("symbol");
console.log(sym);                           //output:- Symbol(symbol)

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);                        //output:- 1234567890123456789012345678901234567890n

let obj = { name: "Bharath", age: 25 };
console.log(obj);                           //output:- { name: 'Bharath', age: 25 }

let arr = [1, 2, 3, 4, 5];
console.log(arr);                           //output:- [ 1, 2, 3, 4, 5 ]

let func = function () {
    return "This is a function";
};
console.log(func());                        //output:- This is a function

let date = new Date();
console.log(date);                          //output:- 2025-03-17T10:00:00.000Z

let regExp = /hello/;
console.log(regExp);                        //output:- /hello/

let map = new Map();
map.set("name", "Bharath");
console.log(map);                           //output:- Map { 'name' => 'Bharath' }

let set = new Set();
set.add(1);
console.log(set);                           //output:- Set { 1 }

let weakMap = new WeakMap();
console.log(weakMap);                       //output:- WeakMap {}

let weakSet = new WeakSet();
console.log(weakSet);                       //output:- WeakSet {}

let promise = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});
console.log(promise);                       //output:- Promise { 'Promise resolved' }

let error = new Error("This is an error");  //output:- Error: This is an error
console.log(error); 

