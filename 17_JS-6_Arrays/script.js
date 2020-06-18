'use strict';

// 1
const shoppingList = [
    {
        name: 'bread',
        count: 2,
        isBought: true,
    },
    {
        name: 'butter',
        count: 1,
        isBought: true,
    },
    {
        name: 'milk',
        count: 3,
        isBought: false,
    },
    {
        name: 'egg',
        count: 6,
        isBought: false,
    },
    {
        name: 'tomato',
        count: 8,
        isBought: false,
    },
    {
        name: 'sauce',
        count: 1,
        isBought: true,
    },
]

// 1.1 Сортировка - сначала некупленные товары, потом купленные
const sortedShoppingList = [...shoppingList];

// a)
sortedShoppingList.sort( (a, b) => {

    if (a.isBought === true && b.isBought === false) {
        return 1;
    }
    if (a.isBought === false && b.isBought === true) {
        return -1;
    }
    return 0;
})

// b)
sortedShoppingList.sort( (a, b) => a.isBought - b.isBought);

console.log(sortedShoppingList);  // 0: {name: "milk", count: 3, isBought: false}
                                    // 1: {name: "egg", count: 6, isBought: false}
                                    // 2: {name: "tomato", count: 8, isBought: false}
                                    // 3: {name: "bread", count: 2, isBought: true}
                                    // 4: {name: "butter", count: 1, isBought: true}
                                    // 5: {name: "sauce", count: 1, isBought: true}
                                    // length: 6


// 1.2 Добавление покупки в список
let addPurchase = (name = '', count = 0, arr = []) => {
   let res = [...arr];
    if (res.find(item => item.name === name)) {
        for (let i = 0; i < res.length; i++) 
            if (name === res[i].name) {
                res[i].count += count;
            }
    } else {
        res.push({
                name,
                count,
                isBought: false,
        }) 
    }

    return res; 
}

const newList1 = [...shoppingList];
console.log(newList1);                      // 0: {name: "bread", count: 2, isBought: true}
                                            // 1: {name: "butter", count: 1, isBought: true}
                                            // 2: {name: "milk", count: 3, isBought: false}
                                            // 3: {name: "egg", count: 6, isBought: false}
                                            // 4: {name: "tomato", count: 8, isBought: false}
                                            // 5: {name: "sauce", count: 1, isBought: true}

console.log(addPurchase('egg', 4, newList1));       // 0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}

console.log(addPurchase('banana', 2, newList1));    //0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}
                                                    // 6: {name: "banana", count: 2, isBought: false}


// 1.3   Покупка продукта
// a)
const addBuyingProduct = (arr = [], name = '') => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        if (name === res[i].name) {
            res[i].isBought = true;
        }
    }

    return res;
}

// b)
const addPurchasedProduct = (arr = [], name = '') => {
    let res = [...arr];

    res.forEach(product => {
        if (name === product.name) {
            product.isBought = true;
        }        
    });
    return res;
}

console.log(addPurchasedProduct(shoppingList, 'milk'));

console.log(addBuyingProduct(shoppingList, 'milk'));    //0: {name: "bread", count: 2, isBought: true}
                                                        // 1: {name: "butter", count: 1, isBought: true}
                                                        // 2: {name: "milk", count: 3, isBought: true}
                                                        // 3: {name: "egg", count: 6, isBought: false}
                                                        // 4: {name: "tomato", count: 8, isBought: false}
                                                        // 5: {name: "sauce", count: 1, isBought: true}

console.log(addBuyingProduct(shoppingList, 'egg'));     // 0: {name: "bread", count: 2, isBought: true}
                                                        // 1: {name: "butter", count: 1, isBought: true}
                                                        // 2: {name: "milk", count: 3, isBought: true}
                                                        // 3: {name: "egg", count: 6, isBought: true}
                                                        // 4: {name: "tomato", count: 8, isBought: false}
                                                        // 5: {name: "sauce", count: 1, isBought: true}                                               


// 2
const receipt = [
    {
        name: 'bread',
        count: 2,
        price: 8,
    },
    {
        name: 'butter',
        count: 1,
        price: 30,
    },
    {
        name: 'milk',
        count: 3,
        price: 23,
    },
    {
        name: 'egg',
        count: 6,
        price: 2,
    },
    {
        name: 'tomato',
        count: 8,
        price: 26,
    },
    {
        name: 'sauce',
        count: 1,
        price: 18,
    },
];

// 2.1, 2.2 Распечатка чека на экран; Подсчет общей суммы покупки;
const showReceipt = (arr = []) => {
    let res = [...arr];

  res.forEach(product => {
    let sum = product.count * product.price;
    console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
    
  });

  let total = res.map((product) => product.count * product.price )  
                 .reduce((sum, current) => sum + current, 0);

  console.log(`Total: ${total}`);

  return res;
}

showReceipt(receipt);   //2 x 8
                        // bread.....Sum: 16
                        // 1 x 30
                        // butter.....Sum: 30
                        // 3 x 23
                        // milk.....Sum: 69
                        // 6 x 2
                        // egg.....Sum: 12
                        // 8 x 26
                        // tomato.....Sum: 208
                        // 1 x 18
                        // sauce.....Sum: 18
                         
                        // Total: 353


// 2.3  Получение самой дорогой покупки в чеке;
const mostExpensivePurchase = (arr = []) => {
    let res = [...arr];
    let maxCost = 0;
    for (const product of res) {
        let cost = product.price * product.count
        if ( cost > maxCost) {
            maxCost = cost;
        }
    }
    return maxCost;
}

console.log(mostExpensivePurchase(receipt));  // 208


// 2.4  Подсчет средней стоимости одного товара в чеке.
const averageCost = (arr = []) => {
    
    let res = [...arr];
    let sum = 0;

    for (const product of res) {
        sum += product.price * product.count;
    }

    return (sum / res.length).toFixed(2);
}

console.log(averageCost(receipt));   // 58.83


// 3 
const classRoom = [
    { 
        name: "105", 
        places: "24", 
        faculty: "Software" 
    },
    { 
        name: "112", 
        places: "12", 
        faculty: "Cybernetics" 
    },
    { 
        name: "113", 
        places: "20", 
        faculty: "Techical Cybernetics" 
    },
    { 
        name: "118", 
        places: "14", 
        faculty: "Engineering" 
    },
    { 
        name: "117", 
        places: "25", 
        faculty: "Economic cybernetics" 
    },
    { 
        name: "115", 
        places: "20", 
        faculty: "Software" 
    },
    { 
        name: "100", 
        places: "15", 
        faculty: "Languages" 
    },
    { 
        name: "110", 
        places: "10", 
        faculty: "Techical Cybernetics" 
    },
    { 
        name: "120", 
        places: "28", 
        faculty: "Software" },
];

const group = {
    name: "SW-2019",
    count: "25",
    faculty: "Software",
  };

// 3.1 Вывод на экран всех аудиторий;
const showClassRoom = (arr = []) => {
    let classRooms = [];
    for (let i of arr) {
        classRooms.push(i.name);
    }
    return `All rooms: ${classRooms.join('; ')}.`;
}

console.log(showClassRoom(classRoom));  // All rooms: 105; 112; 113; 118; 117; 115; 100; 110; 120.

// 3.2 Вывод на экран аудиторий для указанного факультета;
const showFacultyRooms = (arr = [], faculty = '') => {
    let facultyRooms = [];

    for (const i of arr) {
        if (i.faculty.toLowerCase() === faculty.toLowerCase()) {
            facultyRooms.push(i.name);
        }
    }
    return `All rooms for "${faculty}" faculty: ${facultyRooms.join('; ')}.`;
}

console.log(showFacultyRooms(classRoom, 'Software'));  // All rooms for "Software" faculty: 105; 115; 120.

// 3.3 Вывод на экран только тех аудиторий, которые подходят для переданной группы
const showGroupRooms = (arr = [], group = {}) => {
    let groupRooms = [];

    for (const i of arr) {
        if (i.places >= group.count) {
            groupRooms.push(i.name);
        }
    }
    return `All rooms for "${group.name}": ${groupRooms.join('; ')}`;  
}

console.log(showGroupRooms(classRoom, group));   // All rooms for "SW-2019": 117; 120

// 3.4 Функция сортировки аудиторий по количеству мест;
const arrSortPlace = (arr = []) => {
    let arr1 = [...arr];
    arr1.sort((a, b) => a.places - b.places);
    return arr1;
};

// 3.5 Функция сортировки аудиторий по названию (по алфавиту).
const arrSortName = (arr = []) => {
    let arr2 = [...arr];
    arr2.sort( (a, b) => a.name - b.name );
    return arr2;
};

console.log(arrSortName(classRoom));    // 0: {name: "100", places: "15", faculty: "Languages"}
                                        // 1: {name: "105", places: "24", faculty: "Software"}
                                        // 2: {name: "110", places: "10", faculty: "Techical Cybernetics"}
                                        // 3: {name: "112", places: "12", faculty: "Cybernetics"}
                                        // 4: {name: "113", places: "20", faculty: "Techical Cybernetics"}
                                        // 5: {name: "115", places: "20", faculty: "Software"}
                                        // 6: {name: "117", places: "25", faculty: "Economic cybernetics"}
                                        // 7: {name: "118", places: "14", faculty: "Engineering"}
                                        // 8: {name: "120", places: "28", faculty: "Software"}

console.log(arrSortPlace(classRoom));   // 0: {name: "110", places: "10", faculty: "Techical Cybernetics"}
                                        // 1: {name: "112", places: "12", faculty: "Cybernetics"}
                                        // 2: {name: "118", places: "14", faculty: "Engineering"}
                                        // 3: {name: "100", places: "15", faculty: "Languages"}
                                        // 4: {name: "113", places: "20", faculty: "Techical Cybernetics"}
                                        // 5: {name: "115", places: "20", faculty: "Software"}
                                        // 6: {name: "105", places: "24", faculty: "Software"}
                                        // 7: {name: "117", places: "25", faculty: "Economic cybernetics"}
                                        // 8: {name: "120", places: "28", faculty: "Software"}


// 4
const styles = [
    { 
        name: "text-align", 
        value: "center" 
    },
    {
        name: "text-transform", 
        value: "capitalize" 
    },
    { 
        name: "text-overflow", 
        value: "ellipsis" 
    },
    { 
        name: "font-size", 
        value: "1rem" 
    },
    { 
        name: "color", 
        value: "#555555" 
    },
    { 
        name: "letter-spacing", 
        value: "2px" 
    },
    { 
        name: "font-weight", 
        value: "300" 
    },
    { 
        name: "border", 
        value: "1px solid red" 
    },
    { 
        name: "font-style", 
        value: "oblique" 
    },
    { 
        name: "font-stretch", 
        value: "extra-expanded" 
    }
  ];
  
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Reprehenderit, rem sit eaque temporibus sint explicabo. 
    Quod placeat quos inventore quas magni architecto, cupiditate assumenda enim, 
    eum exercitationem ex sunt iste?`;
  
    let styleText = (arr = [], text = '') => {
        document.write('<p style = "');

        for (let i of arr) {
            document.write(`${i.name}: ${i.value}; `);
        }

        document.write('">' + text + "</p>");
    };
  
  styleText(styles, text);
