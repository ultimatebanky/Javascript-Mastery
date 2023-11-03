// NUMBER
 const wholeNumber = 5555;
 const decimalNumber = 0.56;

 console.log(wholeNumber);
 console.log(decimalNumber);

 const firstNumber = 8;
 const secondNumber = 10;

 const result = firstNumber / secondNumber;
 console.log(result)
 console.log(typeof result);


//  Data Type
//  BOOLEARNS
// Boolearn can only have 2 values such as :
// True - Yes, correct, 1 
// false - No, incorrect, 0

// const isCool = true;
// console.log(typeof isCool)

// const isCool1 = false;
// console.log(typeof isCool1)

// // With boolean we can create if statement. 
// if (isCool) {
//     console.log("You are welcome Remight.");
// }else {
//     console.log("I'm angry with you");
// }

const isRight = false;

if (isRight) {
    console.log("I'm the righful owner of the project.");
}else {
    console.log("You're not the rightful owner of the project.");
}
 
// const age = 20;
// console.log(age < 19)

const age1 = 20

if (age1 < 20) {
    console.log("i am 15 years old")
}else{
    console.log(" i am 20 years old")
}

const birth = 30;

if (birth < 30) {
    console.log("I'm older")
}else {
    console.log("I'm not older")
}

// NULL 
// Null has only one value 
let age = null;

// AND UNDEFINED:
let x;

console.log(typeof age)

// OBJECTS : is a collection of data type or variable

const person = {
    name: "Jane",
    age: 20,
}
console.log(typeof person);

// Dot(.)notation
// to get a specific value from the variable then we introduce dot notification.
console.log(typeof person.name);
console.log(person.age);

// ARRAY
const arr = [1, 2, 3, 4];
console.log(arr);

const date = new Date();
console.log(date);