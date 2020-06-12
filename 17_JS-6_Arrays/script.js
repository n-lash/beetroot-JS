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
sortedShoppingList.sort(function(a, b) {
    if (a.isBought === true && b.isBought === false) {
        return 1;
    }
    if (a.isBought === false && b.isBought === true) {
        return -1;
    }
    return 0;
})

// b)
sortedShoppingList.sort(function(a, b) {
    return a.isBought - b.isBought;
})

console.log(sortedShoppingList);  // 0: {name: "milk", count: 3, isBought: false}
                                    // 1: {name: "egg", count: 6, isBought: false}
                                    // 2: {name: "tomato", count: 8, isBought: false}
                                    // 3: {name: "bread", count: 2, isBought: true}
                                    // 4: {name: "butter", count: 1, isBought: true}
                                    // 5: {name: "sauce", count: 1, isBought: true}
                                    // length: 6


// 1.2 Добавление покупки в список
let addPurchase = (name, count, arr) => {
   
    if (arr.find(item => item.name === name)) {
        for (let i = 0; i < arr.length; i++) 
            if (name === arr[i].name) {
                arr[i].count += count;
            }
    } else {
        arr.push({
                name,
                count,
                isBought: false,
        }) 
    }

    return arr;
    
}

const newList1 = [...shoppingList];
console.log(newList1);      // 0: {name: "bread", count: 2, isBought: true}
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
