function convertTemperatureRange(startValue, endValue, scale) {
  if (scale === "C" || scale === "F") {
    for (let i = startValue; i <= endValue; i++) {
      if (scale === "C") {
        const celsius = i;
        const fahrenheit = (celsius * 9) / 5 + 32;
        console.log(`Index: ${i}, ${celsius}C = ${fahrenheit}F`);
      } else if (scale === "F") {
        const fahrenheit = i;
        const celsius = ((fahrenheit - 32) * 5) / 9;
        console.log(`Index: ${i}, ${fahrenheit}F = ${celsius}C`);
      } else {
        return console.log("Not a temp!");
      }
    }
  } else {
    return console.log("Not a temp!");
  }
}
convertTemperatureRange();
