// Basic tuple
var user = ["Aakash", 21];
// Access values
console.log(user[0]); // string
console.log(user[1]); // number
// Tuple with multiple types
var data = ["Hello", 10, true];
// Change values (correct types only)
user[0] = "Rahul";
user[1] = 25;
// Array of tuples
var users = [
    ["Aakash", 21],
    ["Rahul", 22],
];
// Access tuple inside array
console.log(users ? [0][0] : undefined); // Aakash
// Optional tuple element
var person = ["Aakash"];
// Rest in tuple
var values = ["Total", 10, 20, 30];
// Readonly tuple
var point = [10, 20];
// point[0] = 15; ❌ not allowed
