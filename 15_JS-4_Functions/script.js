'use strict';

// 1

// a)  
function func(a = 0, b = 0) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } 
    return 0;
}

// b)
function func(a = 0, b = 0) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

console.log( func(2, 5) );  // -1
console.log( func(8, 5) );  // 1
console.log( func(5, 5) );  // 0

// 2
function factorial (n) {
    let res = 1, i = 1;
    if (n > 0 && !isNaN(n)) {
        
        while (i <= n) {
            res *= i;
            i++;
        }
    } else if (n < 0) {
        return "Error. n < 0";
    }
    return res;
}

console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-5)); // Error

// 3
function concat (a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        return Number( `${a}${b}${c}` );
    }
    return 'Error. enter positive numbers';
}

console.log(concat(2, 5, 4));
console.log(concat(2, -5, 4));
console.log(concat(7, 8, 1));

// 4
function square (a, b = a) {
    if ( a >= 0 && b >= 0 ) {
        return a * b;
    } 

    return 'Error. Enter positive numbers';
}

console.log(square(7, 8));
console.log(square(6));
console.log(square(5, 5));
console.log(square(7, 0));
console.log(square(-7, 4));
console.log(square('a', 2));

// 5
function isPerfectNumber(num) {        
    let sum = 0;

    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    } 
    
    if (sum === num) {
        return true;
    }
    
    return false;            
}; 
console.log(isPerfectNumber(120)); // false
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(8128)); // true

// 6
