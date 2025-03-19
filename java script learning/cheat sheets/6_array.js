//6. Array
//Array is a special variable, which can hold more than one value at a time.
//Array items are stored in indexed locations.

//Creating an Array
var cars = ["Saab", "Volvo", "BMW"];

//Accessing the Elements of an Array
console.log(cars[0]); //Saab
console.log(cars[1]); //Volvo
console.log(cars[2]); //BMW

//Changing an Array Element
cars[0] = "Opel";
console.log(cars[0]); //Opel

//Array Length
console.log(cars.length); //3

//Array indexOf
console.log(cars.indexOf("Volvo")); //1

//Looping Array Elements
//Method 1
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);

//Method 2
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
console.log(text);

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//method 3
for(let item of fruits){
    console.log(item);
}

//Adding Array Elements
//Method 1
fruits.push("Lemon");
console.log(fruits);

//Method 2
fruits[fruits.length] = "Lemon";
console.log(fruits);

//removing Array Elements
//Method 1
fruits.pop();
console.log(fruits);

//Method 2
delete fruits[0];
console.log(fruits);

//Associative Arrays
//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.
//But, you can create an object and assign array elements to it.
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person);

//Array Methods
//Method 1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //output:- Banana,Orange,Apple,Mango

//Method 2
console.log(fruits.join(" * ")); //output:- Banana * Orange * Apple * Mango

//Method 3
console.log(fruits.pop()); //output:- Mango
//The pop() method removes the last element from an array and returns that element.

//Method 4
console.log(fruits.push("Kiwi")); //output:- 4
//The push() method adds a new element to an array (at the end) and returns the new array length.

//Method 5
console.log(fruits.shift()); //output:- Banana
//The shift() method removes the first array element and "shifts" all other elements to a lower index.

//Method 6
console.log(fruits.unshift("Lemon")); //output:- 4
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.

//Method 7
console.log(fruits); //output:- [ 'Lemon', 'Orange', 'Apple', 'Kiwi' ]
console.log(fruits[0]); //output:- Lemon

//With the concat() method you can create a new array by combining two or more arrays:
var vegetables = ["Tomato", "Potato"];
var allGroceries = fruits.concat(vegetables);   
console.log(allGroceries); //output:- [ 'Lemon', 'Orange', 'Apple', 'Kiwi', 'Tomato', 'Potato' ]

//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
var citrus = fruits.slice(1);
console.log(citrus); //output:- [ 'Orange', 'Apple', 'Kiwi' ]
var citrus = fruits.slice(1, 3);
console.log(citrus); //output:- [ 'Orange', 'Apple' ]
var citrus = fruits.slice(1, 2);
console.log(citrus); //output:- [ 'Orange' ]
var citrus = fruits.slice(0, 1);
console.log(citrus); //output:- [ 'Lemon' ]
var citrus = fruits.slice(0, 2);
console.log(citrus); //output:- [ 'Lemon', 'Orange' ]

//The splice() method can be used to add new items to an array:
//This example inserts a new element at the first position in fruits:
fruits.splice(0, 0, "Lemon");
console.log(fruits); //output:- [ 'Lemon', 'Orange', 'Apple', 'Kiwi' ]
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon") define the new elements to be added.

//The splice() method can also be used to remove elements from an array:
//This example removes the elements from array element 1 to array element 3:    
fruits.splice(1, 3);
console.log(fruits); //output:- [ 'Lemon' ]
//The first parameter (1) defines the position where new elements should be added (spliced in).
//The second parameter (3) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.

fruits = ['Lemon', 'Orange', 'Apple', 'Kiwi', 'Tomato', 'Potato'];
//The sort() method sorts an array alphabetically:
console.log(fruits.sort()); //output:- [ 'Apple', 'Kiwi', 'Lemon', 'Orange', 'Potato', 'Tomato' ]

//The reverse() method reverses the elements in an array.
console.log(fruits.reverse()); //output:- [ 'Tomato', 'Potato', 'Orange', 'Lemon', 'Kiwi', 'Apple' ]
//Note: This method will change the original array.

//Numeric Sort
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.

//You can fix this by providing a compare function:
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b})); //output:- [ 1, 5, 10, 25, 40, 100 ]

//The compare function defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like this:
//function(a, b){return a - b}
//When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

//When comparing 40 and 100, the sort() method calls the compare function(40, 100).
//The function calculates 40 - 100 (a - b), and returns -60 (a negative value).
//The sort function will sort 40 as a value lower than 100.


//6.1 Array Iteration
//forEach() method
//The forEach() method calls a function (a callback function) once for each array element.

//Syntax
//array.forEach(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
console.log(txt); //output:- 45,4,9,16,25,

function myFunction(value, index, array) {
  txt = txt + value + ",";
}

//map() method
//The map() method creates a new array by performing a function on each array element.

//Syntax
//array.map(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var numbers2 = numbers.map(myFunction);
console.log(numbers2); //output:- [ 90, 8, 18, 32, 50 ]
function myFunction(value, index, array) {
  return value * 2;
}

//filter() method
//The filter() method creates a new array with array elements that passes a test.

//Syntax
//array.filter(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
console.log(over18); //output:- [ 45, 25 ]
function myFunction(value, index, array) {
  return value > 18;
}

//reduce() method
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.

//The reduce() method works from left-to-right in the array. See also reduceRight().

//Syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//Parameter Values
//Parameter	Description

//function(total, currentValue, currentIndex, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//total	Required. The initialValue, or the previously returned value of the function
//currentValue	Required. The value of the current element
//currentIndex	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//initialValue	Optional. A value to be passed to the function as the initial value

//Example
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);
console.log(sum); //output:- 99
function myFunction(total, value, index, array) {
  return total + value;
}

//reduceRight() method
//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

//The reduceRight() works from right-to-left in the array. See also reduce().

//Syntax
//array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

//Parameter Values
//Parameter	Description

//function(total, currentValue, currentIndex, arr)	Required. A function to be run for each element in the array.

//Function arguments:
//total	Required. The initialValue, or the previously returned value of the function
//currentValue	Required. The value of the current element
//currentIndex	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//initialValue	Optional. A value to be passed to the function as the initial value

//Example
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduceRight(myFunction);
console.log(sum); //output:- 99
function myFunction(total, value, index, array) {
  return total + value;
}

//every() method
//The every() method check if all array values pass a test.

//The every() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
//If no false occur, every() returns true

//Syntax
//array.every(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
console.log(allOver18); //output:- false
function myFunction(value, index, array) {
  return value > 18;
}

//some() method
//The some() method check if some array values pass a test.

//The some() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
//If no true occur, some() returns false

//Syntax
//array.some(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);
console.log(someOver18); //output:- true
function myFunction(value, index, array) {
  return value > 18;
} 

//find() method
//The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of) the first element that is larger than 18:
//Syntax
//array.find(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var first = numbers.find(myFunction);
console.log(first); //output:- 45
function myFunction(value, index, array) {
  return value > 18;
}


//findIndex() method
//The findIndex() method returns the index of the first array element that passes a test function.

//This example finds the index of the first element that is larger than 18:
//Syntax
//array.findIndex(function(currentValue, index, arr), thisValue)

//Parameter Values
//Parameter	Description
//function(currentValue, index, arr)	Required. A function to be run for each element in the array.
//Function arguments:
//currentValue	Required. The value of the current element
//index	Optional. The array index of the current element
//arr	Optional. The array object the current element belongs to
//thisValue	Optional. A value to be passed to the function to be used as its "this" value.

//Example
var numbers = [45, 4, 9, 16, 25];
var first = numbers.findIndex(myFunction);
console.log(first); //output:- 0
function myFunction(value, index, array) {
  return value > 18;
}


