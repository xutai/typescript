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

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);
console.log(greeter(user))