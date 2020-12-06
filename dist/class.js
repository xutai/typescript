// examle 1
// interface User {
//     name: string;
//     id: number
// }
// class UserAccount {
//     name: string;
//     id: number;
//     constructor(name: string, id: number) {
//         this.name = name
//         this.id = id
//     }
// }
// const user: User = new UserAccount("xutai", 1)
// console.log("user", user)
// examle 2
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
// document.body.textContent = greeter(user);
console.log(greeter(user));
