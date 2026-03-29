namespace UserNameSpace {
    export class Auth {
        login() {
            console.log('User Login Functoin')
        }
    }
    export function getList() {
        console.log("List of Users")
    }
}

namespace AdminNameSpace{
    export class Auth {
        login() {
            console.log('Admin Login Functoin')
        }
    }
    function getList() {
        console.log("List of Admin")
    }
}
var user1 = new UserNameSpace.Auth()
user1.login()
UserNameSpace.getList()