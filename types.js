//Conditional statements and Data types Practical task//

let string = "Hello";
let number = 13;
let trueBoolean = true;
let falseBoolean = false;


let sum1 = string + " " + trueBoolean;
console.log(sum1);

let sum2 = string + " " + number;
console.log(sum2);

let sum3 = number + " " + falseBoolean;
console.log(sum3);

let mult1 = string * trueBoolean;
console.log(mult1);

let mult2 = string * number;
console.log(mult2);

let mult3 = number * trueBoolean;
console.log(mult3);

let mult4 = number * falseBoolean;
console.log(mult4);

let div1 = string / trueBoolean;
console.log(div1)

let div2 = string / number;
console.log(div2)

let div3 = number / trueBoolean;
console.log(div3)

let div4 = number / falseBoolean;
console.log(div4)

//boolean to string//
trueBoolean = String(trueBoolean);
console.log(typeof (trueBoolean));

//string to number//
let num = Number("25");
console.log(typeof (num));

//  Boolean to  number //

trueBoolean = Number(trueBoolean);
console.log(trueBoolean);

falseBoolean = Number(falseBoolean);
console.log(falseBoolean);


