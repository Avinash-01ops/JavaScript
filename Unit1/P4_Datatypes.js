/* Datatypes : JavaScript has total 8 data types. JavaScript is a dynamically typed language, 
               which means variables can hold values of any type without explicit type declaration.
    Primitive Datatypes;           
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt

    Non-Primitive Datatypes;
    8. Object 
    9. Array
    10. Date
    11. RegExp*/

//*************************************************     Primitive     *************************************************
// Number: Represents both integer and floating-point numbers
let a = 10, b = 10.55;
console.log("Number a = ",a)
console.log("Number b = ",b);

// String: Represents textual data
let c = "Hello world";
console.log("String = ",a);

// Boolean: Represents logical data true or false.
let d = true;
console.log("Bool value = ",d);

// Undefined: A variable that has been assigned but value is not declared.
let e;
console.log(e);

// Null: Represents intentional absecnce of any object value
let f = null;
console.log(f);

// BigInt: Represents number larger than 2 ^ 53 - 1
let g = 9007199254740991n;
console.log("BigInt value = ",g);

// Symbol: A unique and immutable primitive value
let h = Symbol("Hello");
console.log("Symbol = ",h);


//*************************************************     Non - Primitive     *************************************************

// Object: used to store collection of data and more complex entities
let person = {
    name: "John",
    age: 25
 }
console.log("Object = ",person);

// Array: used to store collection of data and more complex entities
let arr = [1,2,3,4,5];
console.log("Array = ",arr);

// Date: used to store date and time
let date = new Date();
console.log("Date = ",date);

// RegExp: used to store regular expression
let reg = /hello/;
console.log("RegExp = ",reg);



