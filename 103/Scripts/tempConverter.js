// function convertTemperatureRange(startValue, endValue, scale) {
//   const results = document.getElementById("product-results");
//   results.innerHTML = "";
// startValue = Number(prompt("Enter start value:"));
// endValue = Number(prompt("Enter end value:"));
// scale = prompt("Enter C or F:");
//   if (scale === "C" || scale === "F") {
//     let conversion = "";
//     for (let i = startValue; i <= endValue; i++) {
//       if (scale === "C") {
//         const celsius = i;
//         const fahrenheit = (celsius * 9) / 5 + 32;
//         conversion += `<p>Index: ${i}, ${celsius}C = ${fahrenheit}F</p>`;
//         console.log(`Index: ${i}, ${celsius}C = ${fahrenheit}F`);
//       } else if (scale === "F") {
//         const fahrenheit = i;
//         const celsius = ((fahrenheit - 32) * 5) / 9;
//         conversion += `<p>Index: ${i}, ${fahrenheit}F = ${celsius}C</p>`;
//         console.log(`Index: ${i}, ${fahrenheit}F = ${celsius}C`);
//       }
//     }
//     results.innerHTML = conversion;
//   } else {
//     results.innerHTML = `<p>Not a temp</p>`;
//     return console.log("Not a temp!");
//   }
// }

//code without endvalue param
function convertTemperatureRange(startValue, scale) {
  const results = document.getElementById("product-results");
  results.innerHTML = "";

  if (scale === "C" || scale === "F") {
    const value = startValue;
    let conversion = "";
    if (scale === "C") {
      const celsius = value;
      const fahrenheit = (celsius * 9) / 5 + 32;
      conversion = `<p>Index: ${value}, ${fahrenheit}F = ${celsius}C</p>`;
    } else if (scale === "F") {
      const fahrenheit = value;
      const celsius = ((fahrenheit - 32) * 5) / 9;
      conversion = `<p>Index: ${value}, ${fahrenheit}F = ${celsius}C</p>`;
    }

    results.innerHTML = conversion;
  } else {
    results.innerHTML = `<p>Not a temp</p>`;
  }
}
