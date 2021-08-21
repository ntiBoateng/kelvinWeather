// kelvin has been set to 293
const kelvin = 0;
//this finds for celcius
var celcius = kelvin - 273;
//this finds for fahrenheit
let fahrenheit = celcius * (9/5)+32;
//This round to the nearest integer
Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit}.`);
let newton = celcius*(33/100);
newton=Math.floor(newton);
console.log(`The temperature is ${newton}.`);