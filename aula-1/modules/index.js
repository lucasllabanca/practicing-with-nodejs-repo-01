const BMIService = require('./bmi-service');

const decimalDigits = 2;
const height = 1.79;
const weight = 74;

const bmi = BMIService
    .getIndex(weight, height)
    .toFixed(decimalDigits);

console.log('BMI is: ' + bmi);