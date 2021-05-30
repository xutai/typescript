// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
// TypeScript Tooling in 5 minutes - classes
// public:
// the use of public on arguments to the constructor is a shorthand 
// that allows us to automatically create properties with that name

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

let user2 = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);
console.log(greeter(user2))

