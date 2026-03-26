// Basic array
let numbers: number[] = [1, 2, 3, 4];

// Another way (generic)
let names: Array<string> = ["Aakash", "Rahul", "John"];

// Mixed array (not recommended mostly)
let mixed: (string | number)[] = ["Hello", 10];

// Add element
numbers.push(5);

// Remove last element
numbers.pop();

// Access element
console.log(numbers[0]);

// Loop
numbers.forEach((num) => {
  console.log(num);
});

// Array with objects
type User = {
  username: string;
  age: number;
};

let users: User[] = [
  { username: "Aakash", age: 21 },
  { username: "Rahul", age: 22 },
];

console.log(users[0].username);

// Map example
let doubled = numbers.map((n) => n * 2);

// Filter example
let even = numbers.filter((n) => n % 2 === 0);