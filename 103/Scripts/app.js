//strings
let myName = "Neil";
var myLastName = "Tejada";

//numerical variables
let myAge = 67;

//booleans
let isAProfessor = true;
let isAStudent = false;

//create two other variables
let myAddress = "555 Finch Lane, Orange, CA 92626";
let mySize = 3.78;

console.log(
  "Hello my name is " +
    myName +
    " " +
    myLastName +
    " I'm " +
    myAge +
    " years old!" +
    " I will add my address, " +
    myAddress
);

//numbers/operations
let number1 = 5;
let number2 = 9;
let number3 = 10;

//addition/multiplication
let sum = number1 + number2 - number3;
let multiplication = number1 * number2 * number3;

console.log(sum);
console.log(multiplication);

//boolean operations//
console.log(3 < 2);
console.log(3 > 2);

//CONSTANTS-we cannot change the value of the variable//
const tax = 11;
console.log(tax);

//practice 1//
let numberOfChildren = 1;
let partnerName = "I'd rather be single!";
let geoLocation = "Dubia";
let jobTitle = "Millionaire";

console.log(
  "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    "," +
    " and married to " +
    partnerName +
    " with " +
    numberOfChildren +
    " child! "
);

//practice 2//
let personalInfo = {
  name: "Neil Tejada",
  email: "neil123@aol.com",
  password: "example123",
  age: 37,
  country: "USA",
  monthlySalary: 5,
};

console.log(personalInfo.monthlySalary * 12);

