type StrictUser = {
  name: string;
  age: number;
};

const strictUser: StrictUser = {
  name: "Aakash",
  age: 21,
  // city: "Delhi" ❌ Error: extra property not allowed
};

console.log("StrictUser:", strictUser);


// ✅ SOLUTION: Index Signature (Flexible Object)

type FlexibleUser = {
  [key: string]: string;
};

const user1: FlexibleUser = {
  name: "Aakash",
  city: "Delhi",
  country: "India"
};

console.log("FlexibleUser:", user1);


// ✅ Fixed + Dynamic properties together

type UserWithDynamic = {
  name: string;
  [key: string]: string | number;
};

const user2: UserWithDynamic = {
  name: "Rahul",
  age: 22,
  city: "Noida"
};

console.log("UserWithDynamic:", user2);


// ✅ Real-life Example: Form Data

type FormData = {
  [field: string]: string;
};

const form: FormData = {
  username: "Aakash",
  password: "1234",
  email: "a@gmail.com"
};

console.log("FormData:", form);


