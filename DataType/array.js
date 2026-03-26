// Basic array
var numbers = [1, 2, 3, 4];
// Another way (generic)
var names = ["Aakash", "Rahul", "John"];
// Mixed array (not recommended mostly)
var mixed = ["Hello", 10];
// Add element
numbers.push(5);
// Remove last element
numbers.pop();
// Access element
console.log(numbers[0]);
// Loop
numbers.forEach(function (num) {
    console.log(num);
});
var users = [
    { name: "Aakash", age: 21 },
    { name: "Rahul", age: 22 },
];
console.log(users[0].name);
// Map example
var doubled = numbers.map(function (n) { return n * 2; });
// Filter example
var even = numbers.filter(function (n) { return n % 2 === 0; });




