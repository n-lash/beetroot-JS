;(function() {
    'use strict';

    // 1
    let num1 = Number(prompt('Для подсчета суммы чисел в заданном диапазоне введите начальную цифру диапазона'));
    let num2 = Number(prompt('Введите конечную цифру'));
    let sum = 0;
    if (num1 < num2) {
        while (num1 <= num2) {
            sum += num1;
            num1++;
        }
    } else if (num1 > num2) {
        while (num1 >= num2) {
            sum += num2;
            num2++;
        }
    }
    alert(`Сумма всех чисел в указанном диапазоне ${sum}`);

    // 2
    let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
    let number2 = Number(prompt('Введите вторую цифру'));

    while (number1 != 0 && number2 != 0) {
        if (number1 > number2) {
            number1 = number1 % number2;
        } else {
            number2 = number2 % number1;
        }
    }
    alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);

    // 3
    let number = Number(prompt(' Введите число'));
    let divisor = [];
    for (let i = 2; i <= number; i++) {
        if (number % i == 0 && number !== 1 ) {
            console.log(i);
            divisor.push(i);
        }
    }
    alert(`Все делители числа ${number}:  ${divisor}`);

    // 4
})();
