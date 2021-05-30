// examle 1


interface User3 {
    name: string;
    id: number
}

class UserAccount2 {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

}



const user3: User3 = new UserAccount2("xutai", 1)

console.log("user3", user3)