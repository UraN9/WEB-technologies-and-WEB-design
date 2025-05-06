let storeProducts = [
    { name: "Samsung J5 2017", price: 5400},
    { name: "iPhone X", price: 25000},
    { name: "Xiaomi Mi 4", price: 4999},
    { name: "Чохол для iPhone X", price: 500}
    ];

let orderProducts = [
{ name: "iPhone X", price: 25000},
{ name: "Чохол для iPhone X", price: 500}
];

function getTotalCost(products) {
    let result = 0;
    for(let product of products){
        result += product.price;
    }
    return result;
}

let totalCost = getTotalCost(storeProducts);
console.log("На складі товарів на ", totalCost, "грн.");

totalCost = getTotalCost(orderProducts);
console.log("Сума замовлення: ", totalCost, "грн.");