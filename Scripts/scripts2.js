// let userName = prompt("Enter your name");
// let email = prompt("Enter your email");
// console.log(userName, email);

function userInfo() {
  let fullName = prompt("Enter full name");
  let email2 = prompt("Enter email");
  let password = prompt("Enter password");
  let age = prompt("Enter age");
  let country = prompt("Country you live");
  console.log(fullName, email2, password, age, country);
  let monthlySalary = prompt("Enter monthly salary");
  let total = Number(monthlySalary) * 12;
  console.log(total);
}

//create a function adding the sum
function sum() {
  let a = Number(prompt("Enter a:"));
  let b = Number(prompt("Enter b:"));

  let sum = a + b;
  console.log(sum);
}

//create a function that gets two grades(0-100) and calculate the average
function averageOfGrades() {
  let studentName = prompt("Enter students name");
  let grade1 = Number(prompt("Enter grade 1"));
  let grade2 = Number(prompt("Enter grade 2"));
  let totalGrades = grade1 + grade2;

  let averageOfGrades = totalGrades / 2;
  document.getElementById("results").innerHTML = `
    <li>
      <p>${studentName}</p>
      <p>${grade1}</p>
      <p>${grade2}</p>
      <p>${totalGrades}</p>
      <p>${averageOfGrades}</p>
    </li>
  `;
}
