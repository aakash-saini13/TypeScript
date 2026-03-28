interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student("Aakash", 21);
console.log(s1);