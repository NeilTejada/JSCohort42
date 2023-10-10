let myFName = "Neil";
let myLName = "Tejada";
var age = 37;

document.write(
  "My name is, " + myFName + " " + myLName + " I'm, " + age + " years old."
);

document.write("<br>");

let childName = "Kharis";
var inSchool = true;
let howOld = 11;

document.write(
  "My daughters name is, " +
    childName +
    " she is " +
    howOld +
    " years old. Does she go to middle school? " +
    inSchool
);

document.write("<br>");

let hobby1 = "Coaching soccer";
let hobby2 = "Camping";
let hobby3 = "Going to the beach";
var hobby4 = "Snowboarding";
var hobby5 = "Traveling";

document.write([hobby1, hobby2, hobby3, hobby4, hobby5]);

document.write("<br>");

const placesIHaveBeen = [
  "New York",
  "Miami",
  "Colombia",
  "Puerto Rico",
  "California",
  "Chicago",
  "Okinawa, Japan",
  "Hong Kong",
  "Thailand",
  "And a few other countries!",
];

document.write(placesIHaveBeen);

document.write("<br>");

let exampleInfo = {
  name: "John Dev",
  age: 22,
  email: "JohnDev@123.com",
  isADeveloper: true,
  isASmoker: false,
  salary: 10000,
};

document.write(exampleInfo.isASmoker);
