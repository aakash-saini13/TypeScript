var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, course) {
        var _this = _super.call(this, name, age) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying ").concat(this.course, " \uD83D\uDCD6"));
    };
    return Student;
}(Person));
var s1 = new Student("Aakash", 21, "React");
s1.introduce();
s1.study();
