/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let ordersReady = 0;
let unpaidOrders = 0;
let waitingStock = 0;
let unpaidAndWaitingStock = 0;

for ( const order of orders ){
  if( order.id && order.paid && order.stockAvailable){
    ordersReady++;
    console.log(`${order.id} Ready to ship`)
  } else if( !order.paid && !order.stockAvailable){
    unpaidAndWaitingStock++;
    console.log(`${order.id} Unpaid Orders & unpaid orders`)
  } else if(!order.paid){
    unpaidOrders++;
    console.log(`${order.id} Unpaid Orders`)
  } else{
    waitingStock++;
    console.log(`${order.id} Waiting for stock`)
  }
}
console.log("---------------------")
console.log(`Number of ready to ship: ${ordersReady}`)
console.log(`Number of unpaid & waiting stock: ${unpaidAndWaitingStock}`)
console.log(`Number of unpaid order: ${unpaidOrders}`)
console.log(`Number of waiting for stock : ${waitingStock}`)