const convertToCelsius = function(fahrenheit) {
  let newCelcius = parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
  return newCelcius;
};

const convertToFahrenheit = function(celsius) {
  let newFahrenheit = parseFloat(((celsius * 9/5) + 32).toFixed(1));
  return newFahrenheit;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
