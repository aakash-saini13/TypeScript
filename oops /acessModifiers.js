var UserDetails = /** @class */ (function () {
    function UserDetails() {
    }
    UserDetails.prototype.setData = function (name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    };
    UserDetails.prototype.showDetails = function () {
        return "UserName is: ".concat(this.name, " and the age of user is : ").concat(this.age, " and email of user is:").concat(this.email);
    };
    return UserDetails;
}());
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
