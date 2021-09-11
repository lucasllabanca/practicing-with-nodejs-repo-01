import { BMIService } from './bmi-service';

const weight = 74;
const height = 1.79;
const decimalDigits = 2;

const bmi = BMIService
    .getIndex(weight, height)
    .toFixed(decimalDigits);

console.log('BMI is: ' + bmi);