'use strict';

// 1
// const car = {
//     manufacturer: 'Renault',
//     model: 'Megan',
//     year: 2008,
//     averageSpeed: 80,
//     showInfo() {
//         console.log(`Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `);
//     },
//     getTravelTime(s = 0, restInterval = 1) {
//         if (isNaN(s) || isNaN(restInterval)) {
//             return 'Error';
//         }
//         let travelTime = s / this.averageSpeed;
//         let numberOfStops = Math.floor(travelTime / 4);
//         travelTime += numberOfStops * restInterval; 
//         return travelTime;
//     },
// }

// car.showInfo();
// console.log(car.getTravelTime(500));    // 7.25
// console.log(car.getTravelTime(800));    // 12

// 2
const fraction1 = {
    numerator : 1,
    denominator : 5,
}

const showFraction = () => console.log(`${fraction1.numerator}/${fraction1.denominator}`); 
console.log(showFraction(fraction1));    // 1/5

function makeFraction(numerator, denominator) {
    return {
        numerator, 
        denominator, 
    };
}

const fraction2 = makeFraction(2, 9);
console.log(fraction2);  // {numerator: 2, denominator: 9}

// общий знаменатель:
const commonDenominator = (fraction1 = {}, fraction2 = {}) => {
    return fraction1.denominator * fraction2.denominator;
}

// сложение дробей
const sumOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(sumOfFractions(fraction1, fraction2));      // 19/45
console.log(sumOfFractions({numerator: 3, denominator: 5}, {numerator: 4, denominator: 5}));    // 35/25

// вычитание дробей
const subtractionOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(subtractionOfFractions(fraction1, fraction2));      // -1/45
console.log(subtractionOfFractions({numerator: 7, denominator: 9}, {numerator: 2, denominator: 8}));    // 38/72

// умножение дробей
