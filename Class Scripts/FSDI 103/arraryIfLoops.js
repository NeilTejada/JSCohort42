//Arrays
let myArray = ["string", 5, true];

myArray.push("just added", 78, false); //push inserts at the end

myArray.unshift("added to the front of the line!"); //unshift moves to the beginning

myArray.pop(); //removes the last element

myArray.shift(); //removes first element

myArray.splice(2, 1); //removes a specific element

console.log(myArray);

//loop statement
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//if statement
let num1 = 9;
let num2 = 2;
let num3 = 10;

if (num1 == num2) {
  console.log("Yes it's TRUE!");
} else if (num1 === num3) {
  console.log("YES!");
} else {
  console.log("Nope none are equal!");
}

//example using loop
let days = ["monday", "Tuesday", "wednesday", "thursday", "Friday"];
let DaysWithE = [];

for (let i = 0; i < days.length; i++) {
  if (days[i].toLocaleLowerCase().includes("e")) {
    DaysWithE.push(days[i]);
  }
}
console.log(days, DaysWithE);

//example of a login page
let username = "Example Name";
let password = "admin";
let maxTriesToLogin = 0;

function compare() {
  let value1 = document.getElementById("input1").value;
  let value2 = document.getElementById("input2").value;

  if (value1 == username && value2 == password) {
    console.log("Login Successful!");
    maxTriesToLogin = 0;
  } else {
    maxTriesToLogin++;
    if (maxTriesToLogin >= 3) {
      console.log("You can no longer login for 24hrs!");
      return;
    }
    console.log("Faled!");
  }
}
