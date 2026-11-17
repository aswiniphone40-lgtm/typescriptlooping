/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock = 0;
let lowStock = 0;
let safeStock = 0;
let total = 0;

for( const stock of stocks ){
    if( stock == 0){
        outOfStock++;
    } else if ( stock < 10){
        lowStock++;
    } else {
        safeStock++;
    }
    total = total + stock
}

console.log("Number of Out of Stock products:", outOfStock);
console.log("Number of Low Stock products:", lowStock);
console.log("Number of Safe Stock products:", safeStock);
console.log("Total inventory:", total);
console.log("Average stock quantity:", total / stocks.length);