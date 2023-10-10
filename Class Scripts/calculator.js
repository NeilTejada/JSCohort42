document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn-calculator")
    .addEventListener("click", function calculate() {
      let num1 = Number(document.getElementById("number1").value);
      let num2 = Number(document.getElementById("number2").value);
      let option = parseInt(
        prompt(
          "Choose an operator: 1) add, 2) subtract, 3) multiply, 4) divide"
        )
      );
      let result;
      if (option === 1) {
        result = num1 + num2;
      } else if (option === 2) {
        result = num1 - num2;
      } else if (option === 3) {
        result = num1 * num2;
      } else if (option === 4) {
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert("Cannot divide by zero!");
          return;
        }
      } else {
        alert("We don't have that optoin.");
        return false;
      }
      alert("The result is " + result.toFixed(2));
    });
});

// function init() {
//   calculate();
// }
// init();
