(function () {
    'use strict';

    // 1
    // const age = prompt('Введите свой возраст');
    // if (age < 12 ) {
    //     alert(' Вы являетесь ребенком');
    // } else if ((12 <= age) && (age < 18)) {
    //     alert(' Вы являетесь подростком');
    // } else if ((18 <= age) && (age < 60)) {
    //     alert(' Вы уже взрослый');
    // } else {
    //     alert(' Вы пенсионер');
    // }

    // 2
    // const numeral = prompt('Введите цифру от 0 до 9');
    // switch (Number(numeral)) {
    //     case 0:
    //         alert('Этой цифре соответствует символ ) на клавиатуре');
    //         break;
    //     case 1:
    //         alert('Этой цифре соответствует символ ! на клавиатуре');
    //         break;
    //     case 2:
    //         alert('Этой цифре соответствует символ @ на клавиатуре');
    //         break;
    //     case 3:
    //         alert('Этой цифре соответствует символ # на клавиатуре');
    //         break;
    //     case 4:
    //         alert('Этой цифре соответствует символ $ на клавиатуре');
    //         break;
    //     case 5:
    //     alert('Этой цифре соответствует символ % на клавиатуре');
    //     break;
    //     case 6:
    //         alert('Этой цифре соответствует символ ^ на клавиатуре');
    //         break;
    //     case 7:
    //         alert('Этой цифре соответствует символ & на клавиатуре');
    //         break;
    //     case 8:
    //         alert('Этой цифре соответствует символ * на клавиатуре');
    //         break;
    //     case 9:
    //         alert('Этой цифре соответствует символ ( на клавиатуре');
    //         break;
    //     default:
    //         alert('Это не цифра');
    //         break;
    // }

    // 3
    // const number = prompt('Введите трехзначное число', '123');
    // if (number.length > 3 || number.length < 3) {
    //     alert('Введено не трехзначное число');
    // } else if (isNaN(number)) {
    //     alert('Введено не число');
    // }
    // else if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
    //     alert('Число содержит одинаковые цифры');
    // } else {
    //     alert('Число не содержит одинаковых цифр');
    // }

    // 4
    // const year = Number(prompt('Введите какой-нибудь год'));
    // if (isNaN(year)) {
    //     alert('Это не число');
    // }
    //  else if (year % 4 === 0 || year % 400 === 0) {
    //     alert('Этот год високосный');
    // } else {
    //     alert('Этот год невисокосный');
    // }


    // 5
    // const number5 = prompt(' Введите 5-значное число');
    // if (number5.length > 5 || number5.length < 5) {
    //         alert('Введено не 5-значное число');
    // } else if (isNaN(number5)) {
    //     alert('Введено не число');
    // } else if (number5[0] === number5[4] && number5[1] === number5[3]) {
    //     alert('Это число палиндром');
    // } else {
    //     alert(' Это число не палиндром');
    // }

    // 6
    // const moneySum = prompt(' Введите сумму в USD для конвертации');
    // const currency = prompt(' Введите в какую валюту конвертировать, EUR, UAH, PLN', 'EUR').toUpperCase();
    // const KURS_USD_EUR = 0.9;
    // const KURS_USD_UAH = 26.9;
    // const KURS_USD_PLN = 4.12;

    // if (!Number(moneySum)) {
    //     alert('Введено не число');  
    // }

    // switch (currency) {
    //     case 'EUR':
    //         alert(`Эта сумма равна ${Number(moneySum) * KURS_USD_EUR} EUR`);
    //         break;
    //     case 'UAH':
    //         alert(`Эта сумма равна ${Number(moneySum) * KURS_USD_UAH} UAH`);
    //         break;
    //     case 'PLN':
    //         alert(`Эта сумма равна ${Number(moneySum) * KURS_USD_PLN} PLN`);
    //         break;

    //     default:
    //         alert('Неверно введено название валюты');
    //         break;
    // }
    
    // 7
    // const amountOfMoney = prompt(' Введите сумму покупки');
    
    // !Number(amountOfMoney) ? alert('Введено не число') : Number(amountOfMoney).toFixed(2);

    // if (amountOfMoney < 200 ) {
    //     alert(`Скидка 0%. Сумма к оплате ${amountOfMoney} y.e.`);
    // } else if (amountOfMoney >= 200 && amountOfMoney < 300) {
    //     alert(`Скидка 3%. Сумма к оплате ${(amountOfMoney - (amountOfMoney * 0.03)).toFixed(2)} y.e.`);
    // } else if (amountOfMoney >= 300 && amountOfMoney < 500) {
    //     alert(`Скидка 5%. Сумма к оплате ${(amountOfMoney - (amountOfMoney * 0.05)).toFixed(2)} y.e.`);
    // } else if (amountOfMoney >=500) {
    //     alert(`Скидка 7%. Сумма к оплате ${(amountOfMoney - (amountOfMoney * 0.07)).toFixed(2)} y.e.`);
    // } else {
    //     alert(' Ошибка. Неправильно введено число');
    // }
    
    // 8
    // const circleLength = prompt(' Введите значение длины окружности в см');
    // const squarePerimeter = prompt(' Введите значение периметра квадрата в см');

    // const circleDiameter = (Number(circleLength) / (Math.PI).toFixed(2)).toFixed(2);
    // const sideOfSquare = (Number(squarePerimeter) / 4).toFixed(2);

    // if (isNaN(circleDiameter) || isNaN(sideOfSquare)) {
    //     alert('Введено не число');  
    // }

    // circleDiameter <= sideOfSquare 
    // ? alert(' Эта окружность может быть вписана в указанный квадрат') 
    // : alert(' Эта окружность не может быть вписана в указанный квадрат')

    // 9
    

})();
