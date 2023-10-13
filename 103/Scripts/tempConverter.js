let startValue;
let endValue;
let scale;

function temperatureRange() {
  startValue = Number(prompt("Enter start value:"));
  endValue = Number(prompt("Enter end value:"));
  scale = prompt("Enter C or F:");
}

function singleTemperature() {
  let singleStartValue = Number(prompt("Enter a temperature:"));
  let singleScale = prompt("Enter C or F:");
  return [singleStartValue, singleScale];
}

function convertTemperatureRange() {
  temperatureRange();
  const results = document.getElementById("product-results");
  results.innerHTML = "";

  if (scale === "C" || scale === "F") {
    let conversion = "";
    for (let i = startValue; i <= endValue; i++) {
      if (scale === "C") {
        const celsius = i;
        const fahrenheit = (celsius * 9) / 5 + 32;
        conversion += `<p>Index: ${i}, ${celsius}C = ${fahrenheit}F</p>`;
        console.log(`Index: ${i}, ${celsius}C = ${fahrenheit}F`);
      } else if (scale === "F") {
        const fahrenheit = i;
        const celsius = ((fahrenheit - 32) * 5) / 9;
        conversion += `<p>Index: ${i}, ${fahrenheit}F = ${celsius}C</p>`;
        console.log(`Index: ${i}, ${fahrenheit}F = ${celsius}C`);
      }
    }
    results.innerHTML = conversion;
  } else {
    results.innerHTML = `<p>Not a temp</p>`;
    console.log("Not a temp!");
  }
}

//single temp conversion
function convertSingleTemperature() {
  const [singleStartValue, singleScale] = singleTemperature();
  const results = document.getElementById("product-results");
  results.innerHTML = "";

  if (singleScale === "C" || singleScale === "F") {
    const value = singleStartValue;
    let conversion = "";
    if (singleScale === "C") {
      const celsius = value;
      const fahrenheit = (celsius * 9) / 5 + 32;
      conversion = `<p>Index: ${value}, ${celsius}C = ${fahrenheit}F</p>`;
      console.log(`Index: ${value}, ${celsius}C = ${fahrenheit}F`);
    } else if (singleScale === "F") {
      const fahrenheit = value;
      const celsius = ((fahrenheit - 32) * 5) / 9;
      conversion = `<p>Index: ${value}, ${fahrenheit}F = ${celsius}C</p>`;
      console.log(`Index: ${value}, ${fahrenheit}F = ${celsius}C`);
    }

    results.innerHTML = conversion;
  } else {
    results.innerHTML = `<p>Not a temp</p>`;
    console.log("Not a valid temperature scale");
  }
}
