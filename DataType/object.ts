// Basic tuple
let user: [string, number] = ["Aakash", 21];

// Access values
console.log(user[0]); // string
console.log(user[1]); // number

// Tuple with multiple types
let data: [string, number, boolean] = ["Hello", 10, true];

// Change values (correct types only)
user[0] = "Rahul";
user[1] = 25;

// Array of tuples
let users: [string, number][] = [
  ["Aakash", 21],
  ["Rahul", 22],
];

// Access tuple inside array
console.log(users[0][0]); // Aakash

// Optional tuple element
let person: [string, number?] = ["Aakash"];

// Rest in tuple
let values: [string, ...number[]] = ["Total", 10, 20, 30];

// Readonly tuple
let point: readonly [number, number] = [10, 20];
// point[0] = 15; ❌ not allowed