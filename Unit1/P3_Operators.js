/* Operators : Operators are used to perform operations on variables and return values.

 Types of Operators;
    Arithmetic Operators
    Assignment Operators
    Comparison Operators
    String Operators
    Logical Operators
    Bitwise Operators
    Ternary Operators
    Type Operators
// -------------------------------------------------Arithmetic Operators--------------------------------------------------------
    +   : Addition
    -   : Subtraction
    *   : Multiplication
    /   : Division
    %   : Modulo
    **  : Exponent */

//Addition
let a = 10,  b = 20, c = a + b;
console.log("Sum of a and b is =" + c);

// Subraction
let i = 15, j = 5, k = i - j;
console.log("Subracting j from i = ",k);

//Multiplication
let p = 3, q = 4, r = p * q;
console.log("Multiplication of p and q is = ",r);

//Division
let l = 50, m = 10, n = l / m;
console.log("Division of l from m is = ",n);

//Modulo
let x = 14, y = 3, z = x % y;
console.log("Modulo of x and y is = ",z);

//Exponent
let e = 2, f = 2, g = e ** f;
console.log("Exponent of e and f is = ",g);

//Increamenting 
let h = 5;
h++;
console.log("Incremented value of h = ",h);

// Decrementing
h--;
console.log("Decremented value of h = ",h);

/*  Operator Precedence: 
The order in which operations are performed in an arithmetic expression.

    ()  : Parentheses
    **  : Exponent
    *   : Multiplication
    /   : Division
    %   : Modulo
    +   : Addition
    -   : Subtraction */
let t = 100 + 50 * 3;
console.log("Value of t = ",t);

/* -------------------------------------------------Assignment  Operators--------------------------------------------------------

    =   : Assignment
    +=  : Add and assign
    -=  : Subtract and assign
    *=  : Multiply and assign
    /=  : Divide and assign
    %=  : Modulo and assign 
    **= : Exponent and assign */

 let u = 19;     //simple assignment operator =
 console.log("Value of u = ",u);
 console.log("Add and assign operator ",u += 1);
 console.log("Subract and assign operator ",u -= 1);
 console.log("Multiply and assign operator ", u *= 2);
 console.log("Divide and assign operator ", u /= 2);
 console.log("Modulo and assign operator ", u %= 2);
 console.log("Exponent and assign operator ", u **= 2);


/*  Shift Operators
    << : Left shift                 : The << operator is used to shift the bits of a number to the left.
    >> : Right shift                : The >> operator is used to shift the bits of a number to the right.
    >>> : Zero fill right shift     : The >>> operator is used to shift the bits of a number to the right and fill the leftmost bits with zeros. */

let v = 10;
console.log("Left shift operator ", v << 2);
console.log("Right shift operator ", v >> 2);
console.log("Zero fill right shift operator ", v >>> 2);



/* -------------------------------------------------Logical  Operators--------------------------------------------------------

    Logical AND (&&) : Returns true if both operands are true.
    Logical OR (||)   : Returns true if either of the operands is true.
    Logical NOT (!)   : Returns true if the operand is false. */

let w = 100;
console.log("Logical AND operator ", w > 50 && w < 200);
console.log("Logical OR operator ", w > 50 || w < 75);
console.log("Logical NOT operator ", !(w > 50));