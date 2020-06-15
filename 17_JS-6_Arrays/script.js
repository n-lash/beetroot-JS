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

//console.log(sortedShoppingList);  // 0: {name: "milk", count: 3, isBought: false}
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
//console.log(newList1);      // 0: {name: "bread", count: 2, isBought: true}
                            // 1: {name: "butter", count: 1, isBought: true}
                            // 2: {name: "milk", count: 3, isBought: false}
                            // 3: {name: "egg", count: 6, isBought: false}
                            // 4: {name: "tomato", count: 8, isBought: false}
                            // 5: {name: "sauce", count: 1, isBought: true}

//console.log(addPurchase('egg', 4, newList1));       // 0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}

//console.log(addPurchase('banana', 2, newList1));    //0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}
                                                    // 6: {name: "banana", count: 2, isBought: false}


// 1.3   Покупка продукта

const addBuyingProduct = (arr = [], name = '') => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        if (name === res[i].name) {
            res[i].isBought = true;
        }
    }

    return res;
}

const addPurchasedProduct = (arr = [], name = '') => {
    let res = [...arr];

    res.forEach(product => {
        if (name === product.name) {
            product.isBought = true;
        }        
    });
    return res;
}


// console.log(addPurchasedProduct('milk', newList2));


//console.log(addBuyingProduct('milk', newList2));    //0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: true}
                                                    // 3: {name: "egg", count: 6, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}

//console.log(addBuyingProduct('egg', newList2));     // 0: {name: "bread", count: 2, isBought: true}
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

const showReceipt = (arr = []) => {
    let res = [...arr];
    // let total = 0;

  res.forEach(product => {
    let sum = product.count * product.price;
    console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
    
  });

  let amount = res.map((product) => product.count * product.price );
  let total = amount.reduce((sum, current) => sum + current, 0);

  console.log(`Total: ${total}`);

  return res;
}

// showReceipt(receipt);   //2 x 8
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
                        // 
                        // Total: 353


