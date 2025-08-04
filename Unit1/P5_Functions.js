/* Functions
   These are fundamental building block of code that performs a particular task. 
   The fucntions make code modular, reusable and easier to understand. 
   Fucntions are executed when they are called and envoked*/

// Function syntax
function Hello(){
    console.log("Hello world");
}
Hello();

// Practice functions
function Addition(a,b){
    console.log("Sum = ", a+b);
}
Addition (5,10);

function subraction(c,d) {
    console.log("Subraction = ", c - d);
}
subraction (10,5);

function multiply (e,f) {
    console.log("Multiplication = ", e * f);
}
multiply (4,8);

function division (g,h) {
    console.log("Division = ", g / h);
}
division (20,5);

function DL(age) {
    if (age > 18){
        console.log("Your age is "+age+". You are eligible for Driving License");
    } else {
        console.log("Your age is "+age+".You are not eligible");
    }
}
DL(12);

// Function to convert mm to cm
function ConvertToCM(mm){
    let CM = mm/1000;
    console.log(mm +"mm is = "+CM+"cm");
}
ConvertToCM (5000);

function ConvertToKM(meter) {
    let KM = meter/1000;
    console.log(meter+"meter is = "+KM+"KM");
}
ConvertToKM(9000);

//***********************************   Declaring function    ***********************************

//Before Arrow
let myFunction = function(a,b) { return a*b }

// After Arrow
let newFunction = (c,d) => c * d;

//***********************************   Local Variables    ***************************************

/*  Local variables are declared inside a function or block and can only be accessed within that scope..
    variables with same name can be declared ans used in different funcs.
    local variable is created when func is started abd deleted when func is completed. */

function mymessage() {
    let msg = "Hello";      // delcared variable inside func
    console.log("My message is: "+msg);     // works here
}
mymessage();
//console.log(msg);   // Error: message is not defined (outside scope)

