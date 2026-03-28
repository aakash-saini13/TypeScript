class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
}

class Student extends Person {
    course: string;

    constructor(name: string, age: number, course: string) {
        super(name, age); 
        this.course = course;
    }

    study(): void {
        console.log(`${this.name} is studying ${this.course} 📖`);
    }
}

const s1 = new Student("Aakash", 21, "React");

s1.introduce();

s1.study();