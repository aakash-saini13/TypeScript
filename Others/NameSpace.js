var UserNameSpace;
(function (UserNameSpace) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log('User Login Functoin');
        };
        return Auth;
    }());
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log("List of Users");
    }
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log('Admin Login Functoin');
        };
        return Auth;
    }());
    AdminNameSpace.Auth = Auth;
    function getList() {
        console.log("List of Admin");
    }
})(AdminNameSpace || (AdminNameSpace = {}));
var user1 = new UserNameSpace.Auth();
user1.login();
