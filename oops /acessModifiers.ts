class UserDetails{
    name: string;
    age: number;
    email: string;

    setData(name: string, age: number, email: string): void{
        this.name=name;
        this.age=age;
        this.email = email;
    }

    showDetails(): string{
        return `UserName is: ${this.name} and the age of user is : ${this.age} and email of user is:${this.email}`
    }
}

// class DemoClass extends UserDetails{
//     greetFun(): void{
//         console.log("This is simple greet method");
//     }
// }
var user1 = new UserDetails();
user1.setData('Aakash Saini', 21, 'aakashsainiweb@gmail.com');
console.log(user1.showDetails());

// var user1 = new DemoClass();
// user1.setData('Aakash Saini', 21, 'aakashsainiweb@gmail.com');
// console.log(user1.showDetails());
// console.log(user1.name)